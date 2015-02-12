EmberHub.UserRoute = Ember.Route.extend({
    model: function (params) {
        return Ember.$.getJSON('https://api.github.com/users/' + params.login);
    }
});
