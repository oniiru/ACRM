Template.projectItem.helpers({ 
	
	notpublished: function() {
		return this.published !== true;
	}


 });
 
 Template.projectItem.events({
	 'click p.deleteButton': function(e) {
		 e.preventDefault();
  		var modal = '#deleteModal-'+this._id;
		 
 		 $(modal).modal();
				   },
				   
	 'submit form.deleteModal': function(e) {
		 e.preventDefault();
		 var deleteinput = '[name=delete-'+this._id+']';
   		 confirmDelete = $(e.target).find(deleteinput).val();
	if(confirmDelete === 'DELETE') {
	  var modal = '#deleteModal-'+this._id;
	  var projectId = this._id;
	   var projectTitle = this.title;
  	  $(modal).modal('hide');
 		$(modal).on('hidden.bs.modal', function (e) {
		
			 var projectProperties = {
				 deleted:  true
			 }
			 
				 Projects.update(projectId, {$set: projectProperties}, function(error) {
				       if (error) {
				         // display the error to the user
				         alert(error.reason);
				       } else {
						   Notifications.success('Good Riddance!',  projectTitle+' has been deleted.');
				       }
				     });
		});
				  }
				  else {
				  	$(e.target).find(deleteinput).addClass('deleteError')
				  }
				 }


 });
 