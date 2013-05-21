// JavaScript Document
// ASD Project 1 
// Joshua Wisecup
// Term 1304

$('#home').on('pageinit', function() {

//		getAllItems();
var loadInfo = function(dataJson) {
	if(dataJson === 'json') {
		console.log('Loading JSON file');
		$.ajax({
			url: "json.js",
			type: "GET",
			dataType: "json",
			success: function(jsonObjects) {
				console.log(jsonObjects)
				var jsonObj = jsonObjects.pebbleItems;			
				//Loop through JSON data and store in local storage
			    for ( var n in jsonObj) {
			        localStorage.setItem(n, JSON.stringify(jsonObj[n]));
			    };
				getData();
			}
		})		
	} else {
		console.log('Loading xml document');
		$.ajax({
			url: "pebbles.xml",
			type: "GET",
			dataType: "xml",
			success: function(xmlObjects) {
				console.log(xmlObjects)
				var xmlData = $(xmlObjects),
					xmlPebbles = xmlData.find('pebbleItems'),
					xmlObj = {}

				//Build Object per each childNode within each recipe.
				xmlRecipes.each(function(i) {
					xmlObj = {};
					xmlObj.type 			= [$(this).find('type').text()];
					xmlObj.inputName		= [$(this).find('inputName').text()];
					xmlObj.inputAddress 	= [$(this).find('inputAddress').text()];
					xmlObj.inputAddress2 	= [$(this).find('inputAddress2').text()];
					xmlObj.inputCity 		= [$(this).find('inputCity').text()];
					xmlObj.inputState 		= [$(this).find('inputState').text()];
					xmlObj.inputZip			= [$(this).find('inputZip').text()];
					xmlObj.inputRating 		= [$(this).find('inputRating').text()];
					xmlObj.inputDate 		= [$(this).find('inputDate').text()];
					xmlObj.inputArea 		= [$(this).find('inputArea').text()];
					xmlObj.inputCheck 		= [$(this).find('inputCheck').text()];


					//Write recipe to local storage
					localStorage.setItem(i, JSON.stringify(xmlObj));
				});

				getData();	
				
			}
		})			
	}

};
    // empty the main list
    $("#mainSearch").empty();
	
    // add custom html
    $('<li data-role="list-divider">Friday, October 8, 2010 <span class="ui-li-count">3</span></li>' +
        '<li><a href="index.html"><h3>Stephen Weber</h3>' +
        '<p><strong>You have been invited to a meeting at Filament Group in Boston, MA</strong></p>' +
        '<p>Hey Stephen, we have got a meeting with the jQuery team.</p>' +
        '<p class="ui-li-aside"><strong>6:24</strong>PM</p></a></li>').appendTo("#mainSearch");

    // refresh the listview
    $("#mainSearch").listview('refresh');


var getdata = function() {
    // Get localStorage and add to button click
    $("#getStorage").on('click', function(){
        $("#mainSearch").empty();
		
		//If no data, pre-populate with JSON
		if (!localStorage.length) {
			var verify = confirm('No Pebbles have been saved. Load sample JSON data by choosing OK, or select cancel to load XML.')
			if(verify) {
				loadData('json');	
			} else {
				loadData('xml');
			};			
		};
		

		
        for (var i= 0, j=localStorage.length; i<j ; i++){
            var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
            console.log(item);
            var makeSubList = $("<li></li>");
            var makeSubLi = $( "<h3>"+item.type[0]+"</h3>"+
                "<p><strong>"+item.inputName[0]+"</strong></p>"+
                "<p>"+item.inputRating[0]+"</p>" +
                "<p>"+item.inputArea[0]+"</p>" );
            var makeLink = $("<a href='#newItem' id='"+key+"'>Edit</a>");
            makeLink.on('click', function(){
                console.log("This is my key: "+this.id);
				//Edit Item here this.id is key
				//this.attr('id');
				editDataItem();
				//get item populate form
				//change from save to edit item in form				
            });
            makeLink.html(makeSubLi);
            makeSubList.append(makeLink).appendTo("#mainSearch");
        }; // end for loop
        $("#mainSearch").listview('refresh');
    });  // end storage.on
	
}

getdata();
		
//store the data into local storage
	var storeTheData = function(data,key) {
		//if no key, then it's brand new and we need a new key
		var id = Math.floor(Math.random() * 100000001);
           if (!key) {
			   
           } else {
			//set the id to the existing key so it will not overwrite the data
               id = key;
           }
		//Gather up our form field values and store in an object
		//Object properties contain an array with form label and input values
//			getCheckBoxValue();           
			var item = {};

           //Gather form field values and store in an object
           //Object properties contain an array with the form label and input value
			item.type			= [$("#type").val()];
			item.inputName		= [$("#inputName").val()];
			item.inputAddress	= [$("#inputAddress").val()];
			item.inputAddress2	= [$("#inputAddress2").val()];
			item.inputCity		= [$("#inputCity").val()];
			item.inputState		= [$("#inputState").val()];
			item.inputZip		= [$("#inputZip").val()];
			item.inputRating	= [$("#inputRating").val()];
			item.inputDate		= [$("#inputDate").val()];
			//item.inputHidden	= ["Hidden:", $("#inputHidden").val()];
			item.inputArea		= [$("inputArea").val()];
			item.inputCheck		= ["Favorite:", '.val()'];


		
		//Save data into local storage. Use stringify to convert object into a string		
		localStorage.setItem(id, JSON.stringify(item));
		
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
			
			console.log(item.inputName[0]);

			
			//Show the form
		//	toggleTheControls("off");
			
			//populate the form fields with current localStorage values
			$("#type").val(item.type[0]).selectmenu("refresh");
			$("#inputName").val(item.inputName[0]).trigger("create");
			$("#inputAddress").val(item.inputAddress[0]).trigger("create");
			$("#inputAddress2").val(item.inputAddress2[0]).trigger("create");
			$("#inputCity").val(item.inputCity[0]).trigger("create");
			$("#inputState").val(item.inputState[0]).trigger("create");
			$("#inputZip").val(item.inputZip[0]).trigger("create");
			$("#inputRating").val(item.inputRating[0]).slider("refresh");
			$("#inputDate").val(item.inputDate[0]).trigger("create");
			$("#inputArea").val(item.inputArea[0]).trigger("create");
			if(item.inputCheck[0] == "Yes"){
				$("#addfav").attr("checked", "checked");
			}
			
			
			//Remove inital listener from save button
			submit.off("click", storeTheData);
			
			//change submit button to edit button
			$("#submit").text() = "Edit Pebble";
			var editSubmit = $("#submit");
			
			//save key value for reuse
			editSubmit.on("click", validate);
			editSubmit.key = this.key;
			
			itemsDiv = $("#items");
			itemsDiv.parent().children(itemsDiv);
		}		
		

		//show submit button
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
	
	
		var errMessage = $("#errorMessages");

// validate the form	   
		var validate = function(v){
		//define the elements we want to check
			var checkGroup = $("#type");
			var checkName = $("#inputName");
			var checkAddress = $("#inputAddress");
			var checkCity = $("#inputCity");
			var checkState = $("#inputState");
		
		//reset error messages
			errMessage.html('');
			checkGroup.css('border', '1px solid #cccccc');
			checkName.css('border', '1px solid #cccccc');
			checkAddress.css('border', '1px solid #cccccc');
			checkCity.css('border', '1px solid #cccccc');
			checkState.css('border', '1px solid #cccccc');

		//get error messages
			var messagesArray = [];
		
		//group validation
			if(checkGroup.val() === "--Choose a Type--"){
				var checkGroupError = "Please choose a group."
				checkGroup.css('border', '1px solid red');
				messagesArray.push(checkGroupError);
			}
		//name validation
			if(checkName.val() === ""){
				var checkNameError = "Please enter a name."
				checkName.css('border', '1px solid red');
				messagesArray.push(checkNameError);
			}
		//address validation
			if(checkAddress.val() === ""){
				var checkAddressError = "Please enter an address."
				checkAddress.css('border', '1px solid red');
				messagesArray.push(checkAddressError);
			}
		//city validation
			if(checkCity.val() === ""){
				var checkCityError = "Please enter a city."
				checkCity.css('border', '1px solid red');
				messagesArray.push(checkCityError);
			}
		//state validation
			if(checkState.val() === ""){
				var checkStateError = "Please enter a state."
				checkState.css('border', '1px solid red');
				messagesArray.push(checkStateError);
			}
		
		//if there are errors, display them
			if(messagesArray.length >= 1){
				for(var i=0, j=messagesArray.length; i < j; i++){
					var txt = $("li");
					txt.html(messagesArray[i]);
					errMessage.append(txt);
			}
			v.preventDefault();
			return false;
		}else{
			//if no errors, save data. send key val from editData function
			//remember this key value was passed through editSubmit as a property
			storeTheData(this.key);
			}
		
		}

// clear local storage
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
// bind clear storage to button click
		$("#clearStorage").click(clearLocalStorage);


// delete single item from local storage
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
	
	var parsePebbleForm = function(data){};
	
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





});
