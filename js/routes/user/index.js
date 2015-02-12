EmberHub.UserIndexRoute = Ember.Route.extend({
    model: function (params) {
        return this.modelFor('user');
    }
});
