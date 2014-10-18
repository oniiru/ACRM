Orgs = new Meteor.Collection('orgs');
Orgs.allow({
  update: ownsNotDeleted
});
Orgs.deny({
  update: function(userId, org, fieldNames) {
    // may only edit the following two fields:
	
    return (_.without(fieldNames, 'title', 'deleted', 'published', 'datePublished').length > 0);
  }
});
Meteor.methods({
 org: function(orgAttributes) {
    var user = Meteor.user();
	var orgcount = Orgs.find({adminId: user._id, deleted: false}).count();
	if(orgcount >= '2')
	throw new Meteor.Error(401, "Each user is allowed only 2 concurrant organizations while we are in beta. If you need more, please let us know!");
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to create a organization.");

    // pick out the whitelisted keys
    var org = _.extend(_.pick(orgAttributes, 'title' ), {
      adminId: user._id, 
      dateCreated: new Date().getTime(),
	  published: false,
	  datePublished: '',
	  deleted:false
    });

    var orgId = Orgs.insert(org);

    return orgId;
  }
  
});

