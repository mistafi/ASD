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
		var makeList = $('.items').after($('<ul></ul>').addClass('unstyled allData') );
	
		//write data from local storage to the browser
		var createList = function(){
			makeDiv.after(makeList);
		}
		
		createList();
		$(".items").show();	


		for (var i=0, len=localStorage.length; i<len;i++){
			var makeNewLi = $("<li/>").appendTo("allData");
			var navLinksLi = $("<li/>").appendTo("makeSubList");
			
			makeList.append(makeNewLi);
			
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert the string from local storage value back to an object using JSON.parse()
			var obj = JSON.parse(value);
			var makeSubList = $("<ul/>").addClass('unstyled well');
			
			makeNewLi.append(makeSubList);
			
			getCatImage(obj.dropdownSelect[1],makeSubList);
			
			for(var n in obj){
				var makeSubli = $("<li/>");
				
				makeSubList.append(makeSubli);
				
				var optSubText = obj[n][0]+" "+obj[n][1];
				
				makeSubli.innerHTML = optSubText;
				
				makeSubList.append(navLinksLi);
			}
			makeNavLinksLi(localStorage.key(i), navLinksLi); // create edit and delete links for each item in local storage
		}
		$(".editItemPage").append(makeDiv);
//		selectDiv = document.getElementById("selectDiv");
//		selectDiv.parentNode.removeChild("select");
	};	
	
			//Get image for right category
	function getCatImage(categoryName, makeSubList){
		var imageNewLi = $("<li/>");
		
		makeSubList.append(imageNewLi);
		
		var newCatImg =$("<img/>");
		var setSrc = $(newCatImg).attr("src", "img/"+ categoryName + ".png");
		
		imageNewLi.append(newCatImg);
	}
	
	
	//Make Navigation Links for Items
	//create edit and delete links
	function makeNavLinksLi(key, navLinksLi){
		//add edit single item link
		var editDataLink = $("<a/>");
		
		editDataLink.attr ("href", "#newItem");
		
		$(editDataLink).attr("class", "btn btn-info");
		
		editDataLink.key = key;
		
		var editDataText = "Edit Pebble";
		
		editDataLink.on("click", editDataItem);
		
		editDataLink.innerHTML = editDataText;
		
		navLinksLi.append(editDataLink);
		
		//add line break
		//var breakReturnTag = document.createElement("br");
		//navLinksLi.appendChild(breakReturnTag);
		
		
		//add delete single item link
		var deleteDataLink = $("<a/>");
		$(deleteDataLink).attr("href", "#editItemPage");
		$(deleteDataLink).addClass("btn btn-danger");
		deleteDataLink.key = key;
		var deleteDataText = "Delete Pebble";
		deleteDataLink.on("click", deleteDataItem);
		deleteDataLink.innerHTML = deleteDataText;
		navLinksLi.append(deleteDataLink);
	
	}
	
	function editDataItem(){
	//Grab data from local storage
	var value = localStorage.getItem(this.key);
	var item = JSON.parse(value);
	
	$('#submit').parent().hide();
	$('#submit2').parent().show();
	
	//Show the form
//	toggleTheControls("off");
	
	//populate the form fields with current localStorage values
	$("#dropdownSelect").value = item.dropdownSelect[1];
	$("#inputName").value = item.inputName[1];
	$("#inputAddress").value = item.inputAddress[1];
	$("#inputAddress2").value = item.inputAddress2[1];
	$("#inputCity").value = item.inputCity[1];
	$("#inputState").value = item.inputState[1];
	$("#inputZip").value = item.inputZip[1];
	$("#inputRating").value = item.inputRating[1];
	$("#inputDate").value = item.inputDate[1];
	$("#inputArea").value = item.inputArea[1];
		if(item.inputCheck[1] == "Yes"){
			$("#addfav").attr("checked", "checked");
		}
	}
	
	
		
	//Remove inital listener from save button
	$(submit).off("click", storeTheData);
	
		
	//change submit button to edit button
//	document.getElementById("submit").value = "Edit Pebble";
	var editSubmit = $("#submit2");
	
	//save key value for reuse
	$(editSubmit).on("click", validate);
	editSubmit.key = this.key;
	
	itemsDiv = $("#items");
	$(itemsDiv).parent().remove(itemsDiv);

	
	function deleteDataItem(){
		var ask = confirm("Are you sure you want to delete this pebble?");	
		if(ask){
			localStorage.removeItem(this.key);
			alert("Pebble was deleted.");
			window.location.reload();
		}else{
			alert("Pebble was not deleted.");
		}
	}	
	
		var storeTheData = function(data, key){
		//if no key, then it's brand new and we need a new key
		if(!key){
		var id 				= Math.floor(Math.random()*100000001);
		}else {
			//set the id to the existing key so it will not overwrite the data
			id = key;
		}
		//Gather up our form field values and store in an object
		//Object properties contain an array with form label and input values
		getCheckBoxValue();
		var item			= {};
		item.dropdownSelect	= ["Type:", document.getElementById("dropdownSelect").value];
		item.inputName		= ["Name:", document.getElementById("inputName").value];
		item.inputAddress	= ["Address:", document.getElementById("inputAddress").value];
		item.inputAddress2	= ["Address2:", document.getElementById("inputAddress2").value];
		item.inputCity		= ["City:", document.getElementById("inputCity").value];
		item.inputState		= ["State:", document.getElementById("inputState").value];
		item.inputZip		= ["Zip Code:", document.getElementById("inputZip").value];
		item.inputRating	= ["Rating:", document.getElementById("inputRating").value];
		item.inputDate		= ["Date of Visit:", document.getElementById("inputDate").value];
		//item.inputHidden	= ["Hidden:", ge("inputHidden").value];
		item.inputArea		= ["Notes:", document.getElementById("inputArea").value];
		item.inputCheck		= ["Favorite:", favoriteValue];
		
		//Save data into local storage. Use stringify to convert object into a string		
		localStorage.setItem(id, JSON.stringify(item));
		
		//localStorage.setItem("test","hello");
		//alert(localStorage.length);
		alert("Pebble Saved! You have " + localStorage.length + " pebbles saved.");
	}	
	
	function getCheckBoxValue(){
		if(document.getElementById("addfav").checked){
			favoriteValue = document.getElementById("addfav").value;
		}else{
			favoriteValue = "No"
		}
	}
	
		
	var	deleteItem = function (){
		var ask = confirm("Are you sure you want to delete this pebble?");	
		if(ask){
			localStorage.removeItem(this.key);
			alert("Pebble was deleted.");
			window.location.reload();
		}else{
			alert("Pebble was not deleted.");
		}
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
	
	
	
		function validate(v){
		//define the elements we want to check
		var checkGroup = $("#dropdownSelect");
		var checkName = $("#inputName");
		var checkAddress = $("#inputAddress");
		var checkCity = $("#inputCity");
		var checkState = $("#inputState");
		
		//reset error messages
		errMessage.innerHTML = "";
		$(checkGroup).css("border" ,"1px solid #cccccc");
		$(checkName).css("border" ,"1px solid #cccccc");
		$(checkAddress).css("border" ,"1px solid #cccccc");
		$(checkCity).css("border" ,"1px solid #cccccc");
		$(checkState).css("border" ,"1px solid #cccccc");

		//get error messages
		var messagesArray = [];
		
		//group validation
		if(checkGroup.value === "--Choose a Type--"){
			var checkGroupError = "Please choose a group."
			$(checkGroup).css("border" ,"1px solid red");
			messagesArray.push(checkGroupError);
		}
		//name validation
		if(checkName.value === ""){
			var checkNameError = "Please enter a name."
			$(checkName).css("border" ,"1px solid red");
			messagesArray.push(checkNameError);
		}
		//address validation
		if(checkAddress.value === ""){
			var checkAddressError = "Please enter an address."
			$(checkAddress).css("border" ,"1px solid red");
			messagesArray.push(checkAddressError);
		}
		//city validation
		if(checkCity.value === ""){
			var checkCityError = "Please enter a city."
			$(checkCity).css("border" ,"1px solid red");
			messagesArray.push(checkCityError);
		}
		//state validation
		if(checkState.value === ""){
			var checkStateError = "Please enter a state."
			$(checkState).css("border" ,"1px solid red");
			messagesArray.push(checkStateError);
		}
		
		//if there are errors, display them
		if(messagesArray.length >= 1){
			for(var i=0, j=messagesArray.length; i < j; i++){
				var txt = document.createElement("li");
				txt.innerHTML = messagesArray[i];
				errMessage.appendChild(txt);
			}
			v.preventDefault();
			return false;
		}else{
			//if no errors, save data. send key val from editData function
			//remember this key value was passed through editSubmit as a property
			storeTheData(this.key);
		}

		
	}
	
	getStorageData();

});




	




