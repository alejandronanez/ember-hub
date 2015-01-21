EmberHub = Ember.Application.create();

var devs = [
    { name: 'alejandronanez', fullName: 'Alejandro Nanez' },
    { name: 'locke189', fullName: 'Juan Insuasti' },
    { name: 'luiskdx', fullName: 'Luis Carlos' },
    { name: 'tj', fullName: 'TJ' }
];

EmberHub.Router.map(function() {
    this.resource('users', {path: '/users/:name'});
});

EmberHub.IndexRoute = Ember.Route.extend({
    model: function () {
        return devs;
    }
});
