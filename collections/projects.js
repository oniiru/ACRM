Projects = new Meteor.Collection('projects');
Projects.allow({
  update: ownsNotDeleted
});
Projects.deny({
  update: function(userId, project, fieldNames) {
    // may only edit the following two fields:
	
    return (_.without(fieldNames, 'title', 'deleted', 'published', 'datePublished').length > 0);
  }
});
Meteor.methods({
 project: function(projectAttributes) {
    var user = Meteor.user();
	var projectcount = Projects.find({adminId: user._id, deleted: false}).count();
	if(projectcount >= '6')
	throw new Meteor.Error(401, "Each user is allowed only 6 concurrant projects per organization while we are in beta. If you need more, please let us know!");
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to create a project.");

    // pick out the whitelisted keys
    var project = _.extend(_.pick(projectAttributes, 'title', 'organization' ), {
      adminId: user._id, 
      dateCreated: new Date().getTime(),
	  published: false,
	  datePublished: '',
	  deleted:false
    });

    var projectId = Projects.insert(project);

    return projectId;
  }
  
});

