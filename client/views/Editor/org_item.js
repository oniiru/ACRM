Template.orgItem.helpers({ 
	
	notpublished: function() {
		return this.published !== true;
	}


 });
 
 Template.orgItem.events({
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
	  var orgId = this._id;
	   var orgTitle = this.title;
  	  $(modal).modal('hide');
 		$(modal).on('hidden.bs.modal', function (e) {
		
			 var orgProperties = {
				 deleted:  true
			 }
			 
				 Orgs.update(orgId, {$set: orgProperties}, function(error) {
				       if (error) {
				         // display the error to the user
				         alert(error.reason);
				       } else {
						   Notifications.success('Good Riddance!',  orgTitle+' has been deleted.');
				       }
				     });
		});
				  }
				  else {
				  	$(e.target).find(deleteinput).addClass('deleteError')
				  }
				 }


 });
 