console.log('Start running...');

var state = {};


function action(element){
	var id = element[0].id;
	var showed = state[id];
	if (showed){
		element.hide();	
	} else {
		element.show();
	}
	state[id] = !state[id];
};

$(document).ready(function(){
	$("h3").next().hide();
	$("h3").next().attr("showed", false);
	$("h3").next().each(function(index, value){
		state[value.id] = false;
	});
	$("h3").click(function(){ action($(this).next()); });
});

console.log('Completed');

// function action(element){
// 	var showed = element.attr("showed");
// 	console.log(showed);
// 	var anti = !showed;
// 	console.log(anti);
// 	element.attr("showed", anti);
// 	console.log(element.attr("showed"));
// 	if (showed === true){
// 		element.hide();	
// 	} else {
// 		element.show();
// 	}
// };

// $(document).ready(function(){
// 	$("h3").next().hide();
// 	$("h3").next().attr("showed", false);
// 	$("h3").click(function(){ action($(this).next()); });
// });