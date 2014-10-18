Meteor.publish('orgs', function() {
  return Orgs.find({adminId: this.userId, deleted: false}); 
});

Meteor.publish('projects', function() {
  return Projects.find({adminId: this.userId, deleted: false}); 
});