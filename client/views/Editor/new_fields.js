Template.newFields.rendered = function() {
	
	
	
// Auto Resize Window
  var childHeight = $('.moduleAccordians').height();
  var mainHeight = childHeight;
	
  $('#main').css( "min-height", mainHeight );
	
	
  $(window).resize(function() {
	  var childHeight = $('.moduleAccordians').height();
	  var mainHeight = childHeight;
	  $('#main').css( "min-height", childHeight );
  });
  
  $('#accordion').on('hidden.bs.collapse', function () {
	  
	  var childHeight = $('.moduleAccordians').height();
	  var mainHeight = childHeight + 10;
	
	  $('#main').css( "min-height", mainHeight );
      var previewHeight = $('#main').height() - 20;
	  
	  $('.previewField').css( "min-height", previewHeight );
	  	
  });
  $('#accordion').on('shown.bs.collapse', function () {
	  
	  var childHeight = $('.moduleAccordians').height();
	  var mainHeight = childHeight + 10;
	
	  $('#main').css( "min-height", mainHeight );
      var previewHeight = $('#main').height() - 20;
	  
	  $('.previewField').css( "min-height", previewHeight );
	  	
  });

// Draggable Modules


function removeElm() {
	$(".demo").delegate(".remove", "click", function(e) {
		e.preventDefault();
		$(this).parent().remove();
		
	})
	$(".demo").delegate(".removeOption", "click", function(e) {
	
		if($(this).parent().siblings().length >= 2) {
		$(this).parent().remove();
} else {		Notifications.error('Ooops!', 'Dropdowns need at least 2 options. :)');}
	
	})
}


function modalElm() {
	$(".demo").delegate(".openModal", "click", function(e) {
		e.preventDefault();
		theId = $(this).parent().children('.view').children('.gridId').attr('id');
		elementId = $(this).parent().children('.view').children('.elementId').attr('id');
		if($(this).hasClass('col1')) {
			theModal = '#col1-'+theId;
		    $(theModal).modal();
			
		}
		else if($(this).hasClass('col2')) {
			theModal = '#col2-'+theId;
		    $(theModal).modal();
			
		}
		else if($(this).hasClass('col3')) {
			theModal = '#col3-'+theId;
		    $(theModal).modal();
			
		}
		else if($(this).hasClass('col4')) {
			theModal = '#col4-'+theId;
		    $(theModal).modal();
			
		}
		else if($(this).hasClass('element')) {
			theModal = '#modal-'+elementId;
		    $(theModal).modal();
			
			
		}
		else if($(this).hasClass('descElem')) {
			theModal = '#modal-'+elementId;
		    $(theModal).modal({backdrop: 'static'});
			
			
		}
		
		
	})
	$(".demo").delegate(".modalView", "click", function(e) {
		e.preventDefault();
		theId = $(this).attr('id');
		theModal = '#modal-'+theId;
	    $(theModal).modal();
	
	});
	$(".demo").delegate(".descriptionView", "click", function(e) {
		theId = $(this).attr('id');
		theModal = '#modal-'+theId;
		$(theModal).modal({backdrop: 'static'});
	
	});	
	$(".demo").delegate(".removeOption", "click", function(e) {
	
		if($(this).parent().siblings().length >= 2) {
		$(this).parent().remove();
} else {		Notifications.error('Ooops!', 'Dropdowns need at least 2 options. :)');}
	
	})
	$(".demo").delegate(".selectOption input", "input", function(e) {
		theId = '#'+$(this).attr('id').replace('option-', '');
		theVal = $(this).val();
		$(theId).text(theVal);
	
	});	
	
}
function newTabsElm() {
	$(".demo").delegate(".addTab", "click", function(e) {
		if($(this).parent().parent().children('li').length <= 8) {
		var t = randomNumber();
		
		$(this).parent().before('<li><a href="#settings-'+t+'" class="tabsettings-'+t+'" data-toggle="tab" contenteditable="false"><input type="text" value="New Tab" id="tname-'+t+'" class="tabname"></a><span class="glyphicon glyphicon-move moveTab"></span></li>');
		
		$(this).closest('.tabbable').children('.tab-content').append('<div class="tab-pane" id="settings-'+t+'"><div class="row clearfix"><div class="col-md-12"><h3>Padding</h3><form class="form-inline" role="form"><div class="form-group col-md-3"><p>Top</p><div class="input-group"><input class="form-control onlynum padding-top" data-target-padding="col-'+t+'" type="text" value="10" data-original-value="10" maxlength="3"><div class="input-group-addon">px</div></div></div><div class="form-group col-md-3"><p>Right</p><div class="input-group"><input class="form-control onlynum padding-right" data-target-padding="col-'+t+'" type="text" value="10" data-original-value="10" maxlength="3"><div class="input-group-addon">px</div></div></div><div class="form-group col-md-3"><p>Bottom</p><div class="input-group"><input class="form-control onlynum padding-bottom" data-target-padding="col-'+t+'" type="text" value="10" data-original-value="10" maxlength="3"><div class="input-group-addon">px</div> </div></div><div class="form-group col-md-3"><p>Left</p><div class="input-group"><input class="form-control onlynum padding-left" data-target-padding="col-'+t+'" type="text" value="10" data-original-value="10" maxlength="3"><div class="input-group-addon">px</div></div></div></form><div class="removeTab">Remove Tab</div></div></div></div>');
	}
else {
	Notifications.error('Ooops!', 'Up to 8 tabs are allowed per tab-group. Add another tab module for more.');
}	

modalOptions();



theModal = $(this).closest('.modal').attr('id');
theId = '#'+theModal.replace('col1-', '');
$(theId).children('ul').append(' <li><a href="#panel-'+t+'" class="tab-'+t+' '+t+'" data-toggle="tab" contenteditable="false">New Tab</a></li>');
$(theId).children('.tab-content').append('<div class="tab-pane panel-'+t+'" id="panel-'+t+'"><div class="row clearfix"><div class="col-md-12 column col-'+t+'"></div></div></div>');
})
$(".demo").delegate(".hTab", "click", function(e) {
	
	$(this).closest('.modal-body').children('.myTabs').removeClass('row');
	$(this).closest('.modal-body').children('.myTabs').children('.nav').attr('class', 'nav nav-tabs');
	$(this).closest('.modal-body').children('.myTabs').children('.tab-content').attr('class', 'tab-content');
	theID = '#'+$(this).closest('.modal').attr('id').replace('col1-', '');
	$(theID).removeClass('row');
	$(theID).children('.nav').attr('class', 'nav nav-tabs');
	$(theID).children('.tab-content').attr('class', 'tab-content');
	$(theID).closest('.lyrow').children('.glyphicon').addClass('tabglyph');
	$(this).closest('.modal-body').children('.myTabs').children('.nav').find('.addGlyph').show()
	$(this).closest('.modal-body').children('.myTabs').children('.nav').find('.addtab-stacked').hide()
	
	
});
$(".demo").delegate(".vTab", "click", function(e) {
	$(this).closest('.modal-body').children('.myTabs').addClass('row');
	$(this).closest('.modal-body').children('.myTabs').children('.nav').attr('class', 'nav nav-pills col-md-3 nav-stacked');
	$(this).closest('.modal-body').children('.myTabs').children('.tab-content').attr('class', 'tab-content col-md-9');
	theID = '#'+$(this).closest('.modal').attr('id').replace('col1-', '');
	$(theID).addClass('row');
	$(theID).children('.nav').attr('class', 'nav nav-pills col-md-3 nav-stacked');
	$(theID).children('.tab-content').attr('class', 'tab-content col-md-9');
	$(theID).closest('.lyrow').children('.glyphicon').removeClass('tabglyph');
	$(this).closest('.modal-body').children('.myTabs').children('.nav').find('.addGlyph').hide()
	$(this).closest('.modal-body').children('.myTabs').children('.nav').find('.addtab-stacked').show()
});

$(".demo").delegate(".removeTab", "click", function(e) {
		
	theId = $(this).closest('.tab-pane').attr('id').replace('settings-','');
	findSettings = '[href=#settings-'+theId+']';	
	tabSettings = $(this).closest('.myTabs').children('ul').find(findSettings);
	
	if($(this).closest('.myTabs').children('ul').children('li').length > 2) {
		
		theModal = '#'+$(this).closest('.modal').attr('id');
		closestPane = $(this).closest('.tab-pane');
		$(theModal).css({opacity: 0.2});
		$('#deleteTabsmodal').modal({backdrop: 'static'});
		
		$('#backTabs').click(function(e) {
  	     	 e.preventDefault();
			$(theModal).css({opacity: 1});
			$('#deleteTabsmodal').modal('hide');
		});
		
		$('#deleteTabs').click(function(e) {
 	     	 e.preventDefault();
 			$(theModal).css({opacity: 1});
 			$('#deleteTabsmodal').modal('hide');
			
		ugh1 = $(tabSettings).parent().siblings('li').first().children('a');
		$(ugh1).tab('show');
	$(tabSettings).parent().remove();
	
	$(closestPane).remove();
	
	findTab = '[href=#panel-'+theId+']';
ugh2 = $(findTab).parent().siblings('li').first().children('a');
$(ugh2).tab('show');
	$(findTab).parent().remove();
	tabPanel = '#panel-'+theId;
	
	$(tabPanel).remove();


});
} else {
		Notifications.error('Ooops!', 'A tag field must contain at least one tab.');
}
	
});

}

var timerSave = 1000;
var stopsave = 0;
var startdrag = 0;
var demoHtml = $(".demo").html();

function modalOptions() {
	$('.onlynum').on('input', function (event) { 
	    this.value = this.value.replace(/[^0-9]/g, '');
	});
	$('.defaults-btn').click(function() {
	    var custom_coverage = $(this).parent().parent().find('form input');
	      custom_coverage.val(custom_coverage.data("original-value"));
		  $(custom_coverage).trigger("change");
	});
	$('input.padding-left').change(function() {
		var targetData = '.column.'+$(this).data('target-padding');
		var target = $(this).closest('.lyrow').find(targetData).first();
		var value = $(this).val()+'px';
		$(target).css('padding-left', value)
	});
	$('input.padding-top').change(function() {
		var targetData = '.column.'+$(this).data('target-padding');
		var target = $(this).closest('.lyrow').find(targetData).first();
		var value = $(this).val()+'px';
		$(target).css('padding-top', value)
	});
	$('input.padding-bottom').change(function() {
		var targetData = '.column.'+$(this).data('target-padding');
		var target = $(this).closest('.lyrow').find(targetData).first();
		var value = $(this).val()+'px';
		$(target).css('padding-bottom', value)
	});
	$('input.padding-right').change(function() {
		var targetData = '.column.'+$(this).data('target-padding');
				
		var target = $(this).closest('.lyrow').find(targetData).first();
		var value = $(this).val()+'px';
		$(target).css('padding-right', value)
	});
	$('input.tabname').change( function () { 
		theId = $(this).attr('id').replace('tname-', '');
		theVal = $(this).val();
		theClass = '[href=#panel-'+theId+']';
		$(theClass).text(theVal);
		
	});
	
}

function textOptions() {
	$('.headerInput').change( function() {
		theId = $(this).closest('.modal').attr('id').replace('modal-','');
		withHash = '#'+theId;
		theVal = $(this).val();		
		theSize= $(this).siblings('.row').children('select').val();
		theValue = '<'+theSize+' class="elementId headingView" id="'+theId+'">'+theVal+'</'+theSize+'>';
		$(withHash).parent().html(theValue);
		
	})
	
	
	
	$('.headingSize').change( function() {
		theId = $(this).closest('.modal').attr('id').replace('modal-','');
		withHash = '#'+theId;
		
		theSize = $(this).val();
		theVal= $(this).parent().siblings('.headerInput').val();
		theValue = '<'+theSize+' class="elementId headingView" id="'+theId+'">'+theVal+'</'+theSize+'>';
		$(withHash).parent().html(theValue);
		
	})	
	
	$('.labelField').change( function() {
		theId = $(this).closest('.modal').attr('id').replace('modal-','');
		withHash = '#'+theId;
		theLabel = $(this).val();
		$(withHash).children('label').text(theLabel);
		
	})	
	
	$('.requiredYes').click( function() {
		theId = '#'+$(this).closest('.modal').attr('id').replace('modal-','');
		$(theId).children('input').addClass('required');
		$(theId).children('label').addClass('requiredLabel');
	})	
	$('.requiredNo').click( function() {
		theId = '#'+$(this).closest('.modal').attr('id').replace('modal-','');
		$(theId).children('input').removeClass('required');
		$(theId).children('label').removeClass('requiredLabel');
	})	
	
	$('.descripSubmit').click( function(e){
		e.preventDefault();
		theId = '#'+$(this).closest('.descriptionModal').attr('id').replace('modal-','');
		theVal = $(this).closest('.descriptionModal').find('.summerNote').code();
		$(theId).html(theVal);
		$(this).closest('.descriptionModal').modal('hide');
		$(this).closest('.descriptionModal').find('.summerNote').destroy();
		$(this).closest('.descriptionModal').find('.summerNote').summernote({
    	airMode: true
		
    });	
})



	$('.addOption').click( function(e){
		e.preventDefault();
		var t = randomNumber();
		$(this).parent().siblings('.dropdownRow').append('<div class="selectOption col-md-12"><input name="labelField" type="text" id="option-'+t+'" value="An Option" class="col-md-10"><span class="glyphicon glyphicon-move"></span><span class="glyphicon glyphicon-remove removeOption"></span></div>');
		
		$(this).closest('.modal').siblings('.view').find('select').append('<option id="'+t+'" class="anOption">An Option</option>');
		
		
		$('.dropdownRow').sortable({
			handle: '.glyphicon-move',
			start: function(e, ui ){
			     ui.placeholder.height(50);
			},
				stop: function(e, ui) {
					littleIndex = $(ui.item).index();
					theID = $(ui.item).children('input').attr('id').replace('option-', '');
					bigLi = '#'+theID;
					bigIndex = $(bigLi).parent().children('.anOption').get(littleIndex);
					if($(bigIndex).is(':last-child')) {
						$(bigLi).insertAfter(bigIndex);
					} else {
					$(bigLi).insertBefore(bigIndex);
								}
							}
		});
				
	})
	

	
	$('.singleValid').change( function(e){
		theId = '#'+$(this).closest('.modal').attr('id').replace('modal-','');
		if($(this).val() == 'none') {
			newStuff = '<input type="text" placeholder="Type something…" class="col-md-10 needsValidation" disabled>';
			$(theId).children('.needsValidation').replaceWith(newStuff);
		}
		else if($(this).val() == 'validEmail') {
			$(this).siblings('.currencyValid').hide();
			
			newStuff = ' <div class="input-group col-md-10 needsValidation"><span class="input-group-addon"><i class="fa fa-envelope-o"></i></span><input type="text" placeholder="Type something…" class="col-md-12" disabled></div>';
			$(theId).children('.needsValidation').replaceWith(newStuff);

		}
		
		else if($(this).val() == 'validUrl') {
			$(this).siblings('.currencyValid').hide();
			
			newStuff =' <div class="input-group col-md-10 needsValidation"><span class="input-group-addon"><i class="fa fa-link"></i></span><input type="text" placeholder="Type something…" class="col-md-12" disabled></div>';
			$(theId).children('.needsValidation').replaceWith(newStuff);

		}
		
		else if($(this).val() == 'validPhone') {
			$(this).siblings('.currencyValid').hide();
			
			newStuff =' <div class="input-group col-md-10 needsValidation"><span class="input-group-addon"><i class="fa fa-phone"></i></span><input type="text" placeholder="Type something…" class="col-md-12" disabled></div>';
			$(theId).children('.needsValidation').replaceWith(newStuff);

		}
		else if($(this).val() == 'validNumber') {
			$(this).siblings('.currencyValid').hide();
			
			newStuff =' <input type="text" placeholder="Type something…" class="col-md-10 needsValidation onlyNum" disabled>';
			$(theId).children('.needsValidation').replaceWith(newStuff);

		}
		else if($(this).val() == 'validCurrency') {
			$(this).siblings('.currencyValid').show();
			newStuff =' <div class="input-group col-md-10 needsValidation"><span class="input-group-addon"><i class="currencySymbol fa fa-dollar"></i></span><input type="text" placeholder="Type something…" class="col-md-12" disabled></div>';
			$(theId).children('.needsValidation').replaceWith(newStuff);

		}
	
	})
	
	$('.currencyValid').change (function() {
		theId = '#'+$(this).closest('.modal').attr('id').replace('modal-','');
		
		if(($(this).val() == 'Dollar') || ($(this).val() == 'Other') || ($(this).val() == 'Peso')) {
			$(theId).find('.currencySymbol').attr('class', 'currencySymbol fa fa-dollar');
		}
		else if($(this).val() == 'Pound') {
			$(theId).find('.currencySymbol').attr('class', 'currencySymbol fa fa-gbp');
		}
		else if($(this).val() == 'Euro') {
			$(theId).find('.currencySymbol').attr('class', 'currencySymbol fa fa-eur');
		}
		else if(($(this).val() == 'Yen') || ($(this).val() == 'Yuan')) {
			$(theId).find('.currencySymbol').attr('class', 'currencySymbol fa fa-yen');
		}
		else if($(this).val() == 'Won') {
			$(theId).find('.currencySymbol').attr('class', 'currencySymbol fa fa-krw');
		}
		else if($(this).val() == 'Rupee') {
			$(theId).find('.currencySymbol').attr('class', 'currencySymbol fa fa-inr');
		}
	})
	$('.descripCancel').click( function(e){
		e.preventDefault();
		theId = '#'+$(this).closest('.descriptionModal').attr('id').replace('modal-','');
		theVal = $(theId).html();
		$(this).closest('.descriptionModal').find('.summerNote').html(theVal);
		
		
		$(this).closest('.descriptionModal').modal('hide');
		$(this).closest('.descriptionModal').find('.summerNote').destroy();
		$(this).closest('.descriptionModal').find('.summerNote').summernote({
    	airMode: true
		
    });	
	})
	
	$('.btn-toggle .btn').click(function() {
	    $(this).addClass('active');  
	    $(this).addClass('btn-info');  
	    $(this).removeClass('btn-default');  
		
		$(this).siblings('.btn').removeClass('active')
		$(this).siblings('.btn').removeClass('btn-info')
	    $(this).siblings('.btn').addClass('btn-default');  
		
		
	
       
	});

    $('.summerNote').summernote({
    	airMode: true
		
    });
	$('[data-event=showImageDialog]').remove();
	
	
}

function handleTabsIds() {
	var e = $(".sidebar-nav .myTabs");
	var t = $(e).attr('id');
	
	$(e).find('.tab-1413185131072-1').attr('href', '#panel-'+t+'-1');
	$(e).find('.tab-1413185131072-2').attr('href', '#panel-'+t+'-2');

	$(e).find('.panel-1413185131072-1').attr('id', 'panel-'+t+'-1');
	$(e).find('.panel-1413185131072-2').attr('id', 'panel-'+t+'-2');
	
	$(e).find('.tabsettings-1413185131072-1').attr('href', '#settings-'+t+'-1');
	$(e).find('.tabsettings-1413185131072-2').attr('href', '#settings-'+t+'-2');
	
	$(e).find('.settings-1413185131072-1').attr('id', 'settings-'+t+'-1');
	$(e).find('.settings-1413185131072-2').attr('id', 'settings-'+t+'-2');
	
	$(e).find('.tabname-1').attr('id', 'tname-'+t+'-1');
	$(e).find('.tabname-2').attr('id', 'tname-'+t+'-2');
}
function handleModalIds() {
	var e = $(".sidebar-nav .gridId");
	var t = randomNumber();
	var n = "col1-" + t;
	var m = "col2-" + t;
	var o = "col3-" + t;
	var p = "col4-" + t;
	var r = t;
	e.attr("id", r);

	e.parent().parent().find('.modal.col1').attr("id", n);
	e.parent().parent().find('.modal.col2').attr("id", m);
	e.parent().parent().find('.modal.col3').attr("id", o);
	e.parent().parent().find('.modal.col4').attr("id", p);
	
	handleTabsIds();
	
}
function handleElementIds() {
	var f = $(".sidebar-nav .elementId");
	var t = randomNumber();
	var q = 'modal-' + t;
		var z1 = 'option-' + t+"-1";
		var z2 = 'option-' + t+"-2";
		var z3 = 'option-' + t+"-3";
		var y1 = t+'-1';
		var y2 = t+'-2';
		var y3 = t+'-3';
		
		
	f.attr("id", t);
	f.parent().parent().find('.elementModal').attr("id", q);
	
	f.parent().parent().find('.option1').attr('id', z1);
	f.parent().parent().find('.option2').attr('id', z2);
	f.parent().parent().find('.option3').attr('id', z3);
	f.children().children('.option1').attr('id', y1);
	f.children().children('.option2').attr('id', y2);
	f.children().children('.option3').attr('id', y3);
	

}

function randomNumber() {
	return (new Date().getTime());
}

function handleBiz(event, ui) {
	handleModalIds();
	modalOptions();
	
}

function initContainer(){
	$(".demo, .demo .column").sortable({
		connectWith: ".column",
		opacity: .35,
		handle: ".drag",
		start: function(e,t) {
			if (!startdrag) stopsave++;
			startdrag = 1;
		},
		stop: function(event, ui) {
			if(stopsave>0) stopsave--;
			startdrag = 0;
			handleBiz(event, ui);
			
		}
	});
}

$(".sidebar-nav .lyrow").draggable({
	connectToSortable: ".demo",
	helper: "clone",
	handle: ".drag",
	start: function(e,t) {
		if (!startdrag) stopsave++;
		startdrag = 1;
	},
	drag: function(e, t) {
		t.helper.width(175)
	},
	stop: function(e, t) {
		
		$('.modal .myTabs .nav').sortable(
			{
				handle: ".moveTab",
				 items: 'li:not(.notSortable)',
				 stop: function(event, ui)  {
					littleIndex = $(ui.item).index();
					theID = $(ui.item).children('a').attr('href').replace('#settings-', '');
					bigLi = '[href=#panel-'+theID+']';
					bigIndex = $(bigLi).parent().parent().children().get(littleIndex);
					if($(bigIndex).is(':last-child')) {
						$(bigLi).parent().insertAfter(bigIndex);
					} else {
					$(bigLi).parent().insertBefore(bigIndex);
					
				 }
			}
		}
		);
		
		$(".demo .column").sortable({
			opacity: .35,
			connectWith: ".column",
			handle: ".drag",
			
			start: function(e,t) {
				if (!startdrag) stopsave++;
				startdrag = 1;
			},
			stop: function(e,t) {
				if(stopsave>0) stopsave--;
				startdrag = 0;
						}
				
			
		});
		if(stopsave>0) stopsave--;
		startdrag = 0;
	}
});

$(".sidebar-nav .box").draggable({
	connectToSortable: ".column",
	helper: "clone",
	handle: ".drag",
	start: function(e,t) {
		if (!startdrag) stopsave++;
		startdrag = 1;
	},
	drag: function(e, t) {
		t.helper.width(175)
	},
	stop: function(event, ui) {
		if(stopsave>0) stopsave--;
		startdrag = 0;
		handleElementIds();
		textOptions();
		$('.dropdownRow').sortable({
			handle: '.glyphicon-move',
			start: function(e, ui ){
			     ui.placeholder.height(50);
			},
			stop: function(e, ui) {
				littleIndex = $(ui.item).index();
				theID = $(ui.item).children('input').attr('id').replace('option-', '');
				bigLi = '#'+theID;
				bigIndex = $(bigLi).parent().children('.anOption').get(littleIndex);
				if($(bigIndex).is(':last-child')) {
					$(bigLi).insertAfter(bigIndex);
				} else {
				$(bigLi).insertBefore(bigIndex);
							}
}
		});
	}
});

removeElm();
newTabsElm();
modalElm();

initContainer();




};



 