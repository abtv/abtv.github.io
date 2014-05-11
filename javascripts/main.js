console.log('Start running...');

var showed = {};


function runMenuAction(element){
	var id = element[0].id;
	var speed = "fast";
	var text = element.next();
	if (showed[id]){
		text.hide(speed);	
	} else {
		text.show(speed);
	}
	showed[id] = !showed[id];
};

$(document).ready(function(){
	$("h3").next().each(function(index, value){
		showed[$(value).prev()[0].id] = false;
		$(value).hide();
	});
	$("h3")
		.css("cursor", "pointer")
		.click(function(){ runMenuAction($(this)); });
});

console.log('Completed');