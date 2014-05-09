console.log('This would be the main JS file.');

function action(element){
	var showed = element.attr("showed");
	console.log(showed);
	var anti = !showed;
	console.log(anti);
	element.attr("showed", anti);
	console.log(element.attr("showed"));
	if (showed === true){
		element.hide();	
	} else {
		element.show();
	}
};

$(document).ready(function(){
	$("h3").next().hide();
	$("h3").next().attr("showed", false);
	$("h3").click(function(){ action($(this).next()); });
});