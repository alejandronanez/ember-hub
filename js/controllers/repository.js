EmberHub.RepositoryController = Ember.ObjectController.extend({
    needs: ['user'],
    user: Ember.computed.alias('controllers.user')
});
