EmberHub = Ember.Application.create();

EmberHub.Router.map(function() {
// put your routes here
});

EmberHub.IndexRoute = Ember.Route.extend({
    model: function () {
        return [
            'User one',
            'User two',
            'User three',
            'User four'
        ];
    }
});

EmberHub.IndexController = Ember.ArrayController.extend({
    actions: {
        clicked: function (name) {
            alert('You clicked: ' + name);
        }
    },
    newDate: function () {
        return new Date();
    }.property()
});
