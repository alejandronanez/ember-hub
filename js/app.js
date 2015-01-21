EmberHub = Ember.Application.create();

var devs = [
    { login: 'alejandronanez', name: 'Alejandro Nanez' },
    { login: 'locke189', name: 'Juan Insuasti' },
    { login: 'luiskdx', name: 'Luis Carlos' },
    { login: 'tj', name: 'TJ' }
];

EmberHub.Router.map(function() {
    this.resource('user', {path: '/users/:login'});
});

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
