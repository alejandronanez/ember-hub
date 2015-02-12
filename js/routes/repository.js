EmberHub.RepositoryRoute = Ember.Route.extend({
    model: function (params) {
        var user = this.modelFor('user');
        var url = 'http://api.github.com/repos/' + user.login + '/' + params.reponame;
        return Ember.$.getJSON(url);
    }
});
