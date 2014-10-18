Template.orgPage.helpers({
  projects: function() {
	  return Projects.find({organization: this._id}); 
   },
});

Template.orgPage.rendered = function() {
  var childHeight = $('.projects').height();
  var mainHeight = childHeight;
	
  $('#main').css( "min-height", mainHeight );
	
	
  $(window).resize(function() {
	  var childHeight = $('.projects').height();
	  var mainHeight = childHeight;
	  $('#main').css( "min-height", childHeight );
  });

};


Template.orgPage.events({
	
  'click #newProject': function(e) {
	  $('#npModal').modal();
  },
  'submit #npModal form': function(e) {
	      e.preventDefault();
	if(!$(e.target).find('[name=newTitle]').val()) {
		var projectTitle = 'Untitled'
	} else {
		var projectTitle = $(e.target).find('[name=newTitle]').val()
	}
	var theid = this._id;
    var newProject = {
		title: projectTitle,
		organization: theid
    }
	Meteor.call('project', newProject, function(error, id) {
	      if (error)
	        return alert(error.reason);
	  	  $('#npModal').modal('hide');
			
			$('#npModal').on('hidden.bs.modal', function (e) {
				var newproj = '/'+id+'/new';
	  	      Router.go(newproj, {});
			})
	    }); 
	}

});
	
	