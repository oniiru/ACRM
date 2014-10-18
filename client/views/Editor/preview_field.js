Template.previewField.rendered = function() {
    var containerHeight = $('#main').height();
  var previewHeight = containerHeight - 20;
	
  $('.previewField').css( "min-height", previewHeight );
	
	
  $(window).resize(function() {
      var containerHeight = $('#main').height();
    var previewHeight = containerHeight - 20;
	  $('.previewField').css( "min-height", previewHeight );
  });
};