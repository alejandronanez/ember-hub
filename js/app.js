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
