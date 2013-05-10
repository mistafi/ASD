// JavaScript Document
// ASD Project 1 
// Joshua Wisecup
// Term 1304

$('#newItem').on('pageinit', function(){
	//code needed for home page goes here
//	alert("hello world");

	
	$('select').trigger( 'create' );

	var showSubmit = function (){
		$('#submit').parent().show();
		$('#submit2').parent().hide();
	}

	showSubmit();
	
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
	//reset the form
	$('#reset').clearForm();

	//Create select field element and populate with options
	function makeSelectField() {
		var formTag = $("#form"), //formTag is an array of all the form tags
			selectDiv = $("#selectDiv"),
			makeSelect = $("select");
			makeSelect.attr({"id": "dropdownSelect", "data-native-menu": "false", "data-theme": "c"});
		for(var i=0, j=pebbleGroups.length; i<j; i++){
			var makeOption = $("option");
			var optText = pebbleGroups[i];
			makeOption.attr("value", optText);
			makeOption.html(optText);
			makeSelect.append(makeOption);
		}
		selectDiv.append(makeSelect);
	}
	
	//Auto Fill Local Storage as default
	var autoFillDefault = function (){
		//store JSON into Local Storage
		for(var n in jsonData){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(jsonData[n]));
		} 
	};	
	
	
	//Get data
	var getStorageData = function(){
		if(localStorage.length === 0) {
			alert("There is no data in Local Storage so example data was added.");
			autoFillDefault();
		}
		
		//write data from local storage to the browser
		$('body').append('<div></div>').attr("id", "items");
		$('#items').append('<ol></ol>').addClass('unstyled itemOrder');

		$("#items").css('display', 'block');													

		for (var i=0, len=localStorage.length; i<len;i++){
			
			var navLinksLi = $("li");
			
			var makeNewLi = $('.itemOrder').append('<li></li>');
			
			
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert the string from local storage value back to an object using JSON.parse()
			var obj = JSON.parse(value);
			var makeSubList = $("ul");
			makeSubList.addClass('unstyled well');
			makeNewLi.append('<ul></ul>');
			
			getCatImage(obj.dropdownSelect[1],makeSubList);
			for(var n in obj){
				var makeSubli = $("li");
				makeSubList.append('<li></li>');
				var optSubText = obj[n][0]+" "+obj[n][1];
				$("li").html(optSubText);
				makeSubList.append('<li></li>');
			}
			makeNavLinksLi(localStorage.key(i), navLinksLi); // create edit and delete links for each item in local storage
		}
		$("#mainFormContainer").append('<div></div>');
		selectDiv = $("#selectDiv");
		selectDiv.parent().children("select").remove();
	};	
	
	
		//Get image for right category
	function getCatImage(categoryName, makeSubList){
		var imageNewLi = $("li");
		makeSubList.append(imageNewLi);
		var newCatImg = $("img");
		var setSrc = newCatImg.attr("src", "img/"+ categoryName + ".png");
		imageNewLi.append(newCatImg);
	}
	
	
		//Make Navigation Links for Items
	//create edit and delete links
	function makeNavLinksLi(key, navLinksLi){
		//add edit single item link
		var editDataLink = $("a");
		editDataLink.attr({"href": "#", "class": "btn btn-info"});
		editDataLink.key = key;
		var editDataText = "Edit Pebble";
		editDataLink.on("click", editDataItem);
		editDataLink.html(editDataText);
		navLinksLi.append(editDataLink);
		
		//add line break
		//var breakReturnTag = document.createElement("br");
		//navLinksLi.appendChild(breakReturnTag);
		
		
		//add delete single item link
		var deleteDataLink = $("a");
		deleteDataLink.attr({"href": "#", "class": "btn btn-danger"});
		deleteDataLink.key = key;
		var deleteDataText = "Delete Pebble";
		deleteDataLink.on("click", deleteDataItem);
		deleteDataLink.html(deleteDataText);
		navLinksLi.append(deleteDataLink);
	
	}
	
	function editDataItem(){
	//Grab data from local storage
	var value = localStorage.getItem(this.key);
	var item = JSON.parse(value);
	
	//Show the form
//	toggleTheControls("off");
	
	//populate the form fields with current localStorage values
	$("#dropdownSelect").val() = item.dropdownSelect[1];
	$("#inputName").val() = item.inputName[1];
	$("#inputAddress").val() = item.inputAddress[1];
	$("#inputAddress2").val() = item.inputAddress2[1];
	$("#inputCity").val() = item.inputCity[1];
	$("#inputState").val() = item.inputState[1];
	$("#inputZip").val() = item.inputZip[1];
	$("#inputRating").val() = item.inputRating[1];
	$("#inputDate").val() = item.inputDate[1];
	$("#inputArea").val() = item.inputArea[1];
	if(item.inputCheck[1] == "Yes"){
		$("#addfav").attr("checked", "checked");
	}
	
	//Remove inital listener from save button
	submit.off("click", storeTheData);
	
	//change submit button to edit button
	$("#submit").val() = "Edit Pebble";
	var editSubmit = $("#submit");
	
	//save key value for reuse
	editSubmit.on("click", validate);
	editSubmit.key = this.key;
	
	itemsDiv = $("#items");
	itemsDiv.parent().children(itemsDiv);
	}
	
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
		item.dropdownSelect	= ["Type:", $("#dropdownSelect").val()];
		item.inputName		= ["Name:", $("#inputName").val()];
		item.inputAddress	= ["Address:", $("#inputAddress").val()];
		item.inputAddress2	= ["Address2:", $("#inputAddress2").val()];
		item.inputCity		= ["City:", $("#inputCity").val()];
		item.inputState		= ["State:", $("#inputState").val()];
		item.inputZip		= ["Zip Code:", $("#inputZip").val()];
		item.inputRating	= ["Rating:", $("#inputRating").val()];
		item.inputDate		= ["Date of Visit:", $("#inputDate").val()];
		//item.inputHidden	= ["Hidden:", $("#inputHidden").val()];
		item.inputArea		= ["Notes:", $("inputArea").val()];
		item.inputCheck		= ["Favorite:", '.val()'];
		
		//Save data into local storage. Use stringify to convert object into a string		
		localStorage.setItem(id, JSON.stringify(item));
		
		//localStorage.setItem("test","hello");
		//alert(localStorage.length);
		alert("Pebble Saved! You have " + localStorage.length + " pebbles saved.");
	}	
	
	function getCheckBoxValue(){
		if($("#addfav").checked){
			favoriteValue = $("#addfav").val();
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
	
	
//	function validate(v){
//		//define the elements we want to check
//		var checkGroup = $("#dropdownSelect");
//		var checkName = $("#inputName");
//		var checkAddress = $("#inputAddress");
//		var checkCity = $("#inputCity");
//		var checkState = $("#inputState");
//		
//		//reset error messages
//		errMessage.html('');
//		checkGroup.css('border', '1px solid #cccccc');
//		checkName.css('border', '1px solid #cccccc');
//		checkAddress.css('border', '1px solid #cccccc');
//		checkCity.css('border', '1px solid #cccccc');
//		checkState.css('border', '1px solid #cccccc');
//
//		//get error messages
//		var messagesArray = [];
//		
//		//group validation
//		if(checkGroup.val() === "--Choose a Type--"){
//			var checkGroupError = "Please choose a group."
//			checkGroup.css('border', '1px solid red');
//			messagesArray.push(checkGroupError);
//		}
//		//name validation
//		if(checkName.val() === ""){
//			var checkNameError = "Please enter a name."
//			checkName.css('border', '1px solid red');
//			messagesArray.push(checkNameError);
//		}
//		//address validation
//		if(checkAddress.val() === ""){
//			var checkAddressError = "Please enter an address."
//			checkAddress.css('border', '1px solid red');
//			messagesArray.push(checkAddressError);
//		}
//		//city validation
//		if(checkCity.val() === ""){
//			var checkCityError = "Please enter a city."
//			checkCity.css('border', '1px solid red');
//			messagesArray.push(checkCityError);
//		}
//		//state validation
//		if(checkState.val() === ""){
//			var checkStateError = "Please enter a state."
//			checkState.css('border', '1px solid red');
//			messagesArray.push(checkStateError);
//		}
//		
//		//if there are errors, display them
//		if(messagesArray.length >= 1){
//			for(var i=0, j=messagesArray.length; i < j; i++){
//				var txt = $("li");
//				txt.html(messagesArray[i]);
//				errMessage.append(txt);
//			}
//			v.preventDefault();
//			return false;
//		}else{
//			//if no errors, save data. send key val from editData function
//			//remember this key value was passed through editSubmit as a property
//			storeTheData(this.key);
//		}
//
//		
//	}
	
	//trying to add query function
	function searchQuery() {
	 if ($("#terms").val().length > 0) {
            getStorageData();
        }else {
		return true;
        }
    }
	
	//Set Link and Submit Click Events
	var displayDataLink = $("#displayDataLink");
	$(displayDataLink).on("click", getStorageData);
	var clearDataLink = $("#clearData");
	$(clearDataLink).on("click", clearLocalStorage);			
	var parsePebbleForm = function(data){
		console.log(data);
	}

	//Variable defaults
	var pebbleGroups = ["--Choose a Type--", "Restaurant", "Gas Station", "Retail Store"],
		favoriteValue = "No",
		errMessage = $("#errorMessages");
	;
	
		makeSelectField();

		var pebbleForm = $('#pebbleForm');
		    pebbleForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = pebbleForm.serializeArray();
			parsePebbleForm(data);
			storeTheData(data);
		}


		
	});
	
	//any other code needed for addItem page goes here	

});

//$('#newItem').bind('pageinit', function(event) {
//	$('form').validate({
//		rules: {
//			Name: {
//				required: true
//			},
//			password: {
//				required: true
//			}
//		}
//	});
//});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.


	




