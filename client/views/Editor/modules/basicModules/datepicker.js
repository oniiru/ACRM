Template.datePicker.rendered=function() {
	$( ".sidebar-nav .datedrag" ).on( "dragstop", function( event, ui ) {
	
    $('.datetimepicker1').datetimepicker({
					pickTime: false
				});
});
}