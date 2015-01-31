EmberHub = Ember.Application.create({
    LOG_TRANSITIONS: true
});

var devs = [
    { login: 'alejandronanez', name: 'Alejandro Nanez' },
    { login: 'locke189', name: 'Juan Insuasti' },
    { login: 'luiskdx', name: 'Luis Carlos' },
    { login: 'tj', name: 'TJ' }
];

/*==============================
=            ROUTER            =
==============================*/

EmberHub.Router.map(function() {
    this.resource('user', { path: '/users/:login' }, function () {
        this.route('userIndex');
        this.resource('repositories', { path: '/repositories' });
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

/*===================================
=            CONTROLLERS            =
===================================*/

EmberHub.RepositoriesController = Ember.ArrayController.extend({
    needs: ['user'],
    user: Ember.computed.alias('controllers.user')
});



