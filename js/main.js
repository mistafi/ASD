// JavaScript Document
// ASD Project 1 
// Joshua Wisecup
// Term 1304


$(document).bind('mobileinit', function(event){

});

$('#front-page').live('pagebeforeshow', function(){
	//alert("hello world");
});	
		
$('#edit-page').live('pagebeforeshow', function(){

});

$('#display-page').bind('pageinit', function(event){

});

$( document ).delegate("#front-page", "pageinit", function() {
  //alert('A page with an id of "front-page" was just created by jQuery Mobile!');
});



	




