Package.describe({
	name: "customsummer",
  summary: "Summernote WYSIWYG editor repackaged for Meteor",
  version: "0.1.0",
  git: "https://github.com/hckrs/meteor-summernote.git"
});

Package.onUse(function(api) {
  api.addFiles('summernote/dist/summernote.js', 'client');
  api.addFiles('summernote/dist/summernote.css', 'client');
});
