EmberHub.RepositoriesController = Ember.ArrayController.extend({
    needs: ['user'],
    user: Ember.computed.alias('controllers.user')
});
