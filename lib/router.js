Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
   waitOn: function() { return [Meteor.subscribe('orgs'), Meteor.subscribe('projects')]; }
 });

Router.map(function() {
	
  this.route('editOrgs', {path: '/'});
  this.route('orgPage', {
     path: '/org/:_id',
     data: function() { return Orgs.findOne(this.params._id); }
	 
   });
   this.route('newFields', {
      path: '/:_id/new',	 
    });
});
var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('home');
    pause();
  }
}
Router.onBeforeAction('loading');
