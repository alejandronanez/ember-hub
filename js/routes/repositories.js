EmberHub.RepositoriesRoute = Ember.Route.extend({
    model: function () {
        var user = this.modelFor('user');
        return Ember.$.getJSON(user.repos_url);
    }
});
