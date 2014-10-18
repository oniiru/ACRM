Template.editOrgs.helpers({
  orgs: function() {
	  return Orgs.find();
  }
});

Template.editOrgs.rendered = function() {
  var childHeight = $('.orgs').height();
  var mainHeight = childHeight;
	
  $('#main').css( "min-height", mainHeight );
	
	
  $(window).resize(function() {
	  var childHeight = $('.orgs').height();
	  var mainHeight = childHeight;
	  $('#main').css( "min-height", childHeight );
  });

  
};


Template.editOrgs.events({
	
  'click #newOrg': function(e) {
	  $('#npModal').modal();
  },
  'submit #npModal form': function(e) {
	      e.preventDefault();
	if(!$(e.target).find('[name=newTitle]').val()) {
		var orgTitle = 'Untitled'
	} else {
		var orgTitle = $(e.target).find('[name=newTitle]').val()
	}

    var newOrg = {
		title: orgTitle
    }
	Meteor.call('org', newOrg, function(error, id) {
	      if (error)
	        return alert(error.reason);
	  	  $('#npModal').modal('hide');
			
			$('#npModal').on('hidden.bs.modal', function (e) {
				var neworg = '/org/'+id;
	  	      Router.go(neworg, {});
			})
	    });
	  }

	  
	  
	  
	  
	});