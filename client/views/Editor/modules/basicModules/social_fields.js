Template.socialFields.rendered = function() {
    
$( ".sidebar-nav .socialdrag" ).on( "dragstop", function( event, ui ) {
    jQuery(".socialFields .input-group:visible:last").addClass("lastSocial");
    jQuery(".socialFields .input-group:visible:first").addClass("firstSocial");
} );
	}
	