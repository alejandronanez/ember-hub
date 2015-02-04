EmberHub = Ember.Application.create({
    LOG_TRANSITIONS: true
});

var devs = [
    { login: 'alejandronanez', name: 'Alejandro Nanez' },
    { login: 'locke189', name: 'Juan Insuasti' },
    { login: 'luiskdx', name: 'Luis Carlos' }
];

/*==============================
=            ROUTER            =
==============================*/

EmberHub.Router.map(function() {
    this.resource('user', { path: '/users/:login' }, function () {
        this.route('userIndex');
        this.resource('repositories', { path: '/repositories' });
        this.resource('repository', { path: '/repositories/:reponame' }, function () {
            this.resource('issues');
            this.resource('forks');
            this.resource('commits');
        });
    });

});

/*==============================
=            ROUTES            =
==============================*/

EmberHub.IndexRoute = Ember.Route.extend({
    model: function () {
        return devs;
    }
});

EmberHub.UserRoute = Ember.Route.extend({
    model: function (params) {
        return Ember.$.getJSON('https://api.github.com/users/' + params.login);
    }
});

EmberHub.UserIndexRoute = Ember.Route.extend({
    model: function (params) {
        return this.modelFor('user');
    }
});

EmberHub.RepositoriesRoute = Ember.Route.extend({
    model: function () {
        var user = this.modelFor('user');
        return Ember.$.getJSON(user.repos_url);
    }
});

EmberHub.RepositoryRoute = Ember.Route.extend({
    model: function (params) {
        var user = this.modelFor('user');
        var url = 'http://api.github.com/repos/' + user.login + '/' + params.reponame;
        return Ember.$.getJSON(url);
    }
});

EmberHub.IssuesRoute = Ember.Route.extend({
    model: function () {
        var repo = this.modelFor('repository');
        var url = repo.issues_url.replace('{/number}', '');
        return Ember.$.getJSON(url);
    }
});

EmberHub.CommitsRoute = Ember.Route.extend({
    model: function () {
        var repo = this.modelFor('repository');
        var url = repo.commits_url.replace('{/sha}', '');
        return Ember.$.getJSON(url);
    }
});

/*===================================
=            CONTROLLERS            =
===================================*/

EmberHub.RepositoriesController = Ember.ArrayController.extend({
    needs: ['user'],
    user: Ember.computed.alias('controllers.user')
});

EmberHub.RepositoryController = Ember.ObjectController.extend({
    needs: ['user'],
    user: Ember.computed.alias('controllers.user')
});



