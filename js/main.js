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
		
		//write data from local storage to the browser
		var makeNewDiv = $('#main').appendTo("div");
		makeNewDiv.attr("id", "items");
		var makeNewList = $('#items').appendTo("ol");
		makeNewList.attr("class", "unstyled");
		makeNewDiv.appendTo(makeNewList);
		document.body.appendChild(makeNewDiv);
		$("#items").show();													

		for (var i=0, len=localStorage.length; i<len;i++){
			var makeNewLi = document.createElement("li");
			var navLinksLi = document.createElement("li");
			makeNewList.appendChild(makeNewLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert the string from local storage value back to an object using JSON.parse()
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeSubList.setAttribute("class", "unstyled well");
			makeNewLi.appendChild(makeSubList);
			getCatImage(obj.dropdownSelect[1],makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement("li");
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(navLinksLi);
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
	
	
	//Set Link and Submit Click Events
	var displayDataLink = $("#displayDataLink");
	$("#displayDataLink").on("click", getStorageData);
	var clearDataLink = $("#clearData");
	$("#clearData").on("click", clearLocalStorage);			
	var parsePebbleForm = function(data){
		console.log(data);
	}

});

$('#display-page').bind('pageinit', function(event){

});




	




