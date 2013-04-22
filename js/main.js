// JavaScript Document
// ASD Project 1 
// Joshua Wisecup
// Term 1304


$('#front-page').on('pageinit', function(){
	
	console.log("hello world. This is the front page");	

});	
		
$('#edit-page').on('pageinit', function(){

	$('select').trigger( 'create' );
	
	var showSubmit = function (){
		$('#submit').parent().show();
		$('#submit2').parent().hide();
	}
	
	showSubmit();
	

	//function to clear the form
	$.fn.clearForm = function() {
		return this.each(function() {
		var type = this.type, tag = this.tagName.toLowerCase();
			if (tag == 'form')
				return $(':input',this).clearForm();
			if (type == 'text' || type == 'password' || tag == 'textarea')
				this.value = '';
			else if (type == 'checkbox' || type == 'radio')
				this.checked = false;
			else if (tag == 'select')
				this.selectedIndex = -1;
		});
	};
	//reset the form by calling the clearform fn
	$('#reset').clearForm();
	

});

$('#display-page').on('pageinit', function(event){

//	$.ajax({
//		url: "js/json.js",
//		type: "GET",
//		dataType: "json",
//		success: function (data, status) {
//			console.log(status, data);
//		},
//		error: function (error, parseerror) {
//			console.log(error, parseerror);
//		}
//	});
	
	//Auto Fill Local Storage as default
	var autoFillDefault = function (){
		//store JSON into Local Storage
		for(var n in jsonData){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(jsonData[n]));
		} 
	};	
	
	//Get local storage
	var getStorageData = function(){
		if(localStorage.length === 0) {
			alert("There is no data in Local Storage so example data was added.");
			autoFillDefault();
		}
		
		var makeDiv = $('#main').after( $("<div></div>").addClass('items') );
		var makeList = $('.items').after($('<ol></ol>').addClass('unstyled') );
	
		//write data from local storage to the browser
		var createList = function(){
			makeDiv.after(makeList);
		}
		
		createList();
		$(".items").show();	


		for (var i=0, len=localStorage.length; i<len;i++){
			var makeNewLi = document.createElement("li");
			var navLinksLi = document.createElement("li");
			makeList.append(makeNewLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert the string from local storage value back to an object using JSON.parse()
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeSubList.setAttribute("class", "unstyled well");
			makeNewLi.append(makeSubList);
			getCatImage(obj.dropdownSelect[1],makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement("li");
				makeSubList.append(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.append(navLinksLi);
			}
			makeNavLinksLi(localStorage.key(i), navLinksLi); // create edit and delete links for each item in local storage
		}
		document.getElementById("editItemPage").appendChild(makeNewDiv);
//		selectDiv = document.getElementById("selectDiv");
//		selectDiv.parentNode.removeChild("select");
	};	
	
	
	//clear localstorage
	var clearLocalStorage = function(){
		if(localStorage.length === 0){
			alert("There is no data to clear.")
		}else{
			localStorage.clear();
			alert("All pebbles are deleted!");
			window.location.reload();
			return false;
		}
	};	
	
	getStorageData();

});




	




