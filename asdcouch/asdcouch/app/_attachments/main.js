// JavaScript Document
// ASD Project 1,2,3,4 
// Joshua Wisecup
// Term 1305

//global variables
var pebbleKey = '';
var pebbleCat = '';
var mainList = $('#mainEditList');
var errMessage = $("#errorMessages");
var clearErrors = function() {
	$('#messagesArray').empty().hide();
};



//load data in ajax 
var loadInfo = function(dataLoad) {
	if(dataLoad === 'json') {
		console.log('Loading JSON file');
		$.ajax({
			url: "_view/pebbles",
			type: "GET",
			dataType: "json",
			statusCode: {
				404: function() {
				  alert("Page not found.");
				}
			  },
			success: function(data) {
				console.log(data)
				$.each(data.rows, function(index, pebble){
				var type = pebble.value.type;
				var name = pebble.value.inputName;
				var address = pebble.value.inputAddress;
				var city = pebble.value.inputCity;
				var state = pebble.value.inputState;
				var zip = pebble.value.inputZip;
				var rating = pebble.value.inputRating;
				var date = pebble.value.inputDate;
					$('#mainEditList').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(name)
						)
					);
				});
				$('#mainEditList').listview('refresh');
				//get the list of data
				//getData();
			}
		});		
	} 

};//end data load

//store the data into local storage
	var storeTheData = function() {
		//if no key, then it's brand new and we need a new key
		var idKey;
           if (pebbleKey) {
			 //set the id to the existing key so it will not overwrite the data
			   idKey = pebbleKey;
           } else {
			 //set the id to a random key
               idKey = Math.floor(Math.random() * 100000001);
           };
		//Gather up our form field values and store in an object
		//Object properties contain an array with form label and input values
			var item = {};

           //Gather form field values and store in an object
           //Object properties contain an array with the form label and input value
			item.type			= [$("#type").val()];
			item.inputName		= [$("#inputName").val()];
			item.inputAddress	= [$("#inputAddress").val()];
//			item.inputAddress2	= [$("#inputAddress2").val()];
			item.inputCity		= [$("#inputCity").val()];
			item.inputState		= [$("#inputState").val()];
			item.inputZip		= [$("#inputZip").val()];
			item.inputRating	= [$("#inputRating").val()];
			item.inputDate		= [$("#inputDate").val()];
//			item.inputArea		= [$("#inputArea").val()];
//			item.inputCheck		= ["Favorite:", '.val()'];
		
		//Save data into local storage. Use stringify to convert object into a string		
		localStorage.setItem(idKey, JSON.stringify(item));

		alert("Your location is saved.");
		
		//try adding this
		$.mobile.changePage("#editItemPage",{
			allowSamePageTransition: true,
			transition: "slide"
		});

	//reset key
	pebbleKey = '';

};//end data storage


// validate the form	   
var validate = function() {
	console.log("Validating the data form.");

	var requiredEl = $('.required');
	requiredEl.removeClass('error');

//get error messages
	var messagesArray = [];
	
//define the elements we want to check
	requiredEl.each(function(i){
		if($(this).val() === "") {
			switch(requiredEl[i].id){
				case 'inputName':
					$(this).parent().addClass('error');
					messagesArray.push('Please enter a name.');
					break;
				case 'inputAddress':
					$(this).parent().addClass('error');
					messagesArray.push('Please enter an address.');
					break;
				case 'inputCity':
					messagesArray.push('Please enter a city.');
					break;
				case 'inputState':
					$(this).addClass('error');
					messagesArray.push('Please enter a state.');
					break;				    	
				default:
				
				return false;
			};			
		} else {
			switch(requiredEl[i].id){
				case 'inputName':
					$(this).parent().removeClass('error');
					break;
				case 'inputAddress':
					$(this).parent().removeClass('error');
					break;
				case 'inputCity':
					$(this).removeClass('error');
					break;				    	
				default:
				
				return false;
			};			

		};					
	});
//
//var checkGroup = $('#type');
//	if( checkGroup.val() === "-- Choose a Type --") {
//		checkGroup.parent().addClass('error');
//		messagesArray.push('Please choose a group.');
//	} else {
//		checkGroup.parent().removeClass('error');
//};	

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
//			
//			storeTheData();
//		}

		
//	}
	
//show errors
errMessage.empty();
if(messagesArray.length != 0) {

$.each(messagesArray, function(i) {
	$('' + 	'<li>' + messagesArray[i] + '</li>').appendTo(errMessage);
})
errMessage.show();
} else {
//reset error messages
errMessage.empty();
errMessage.hide();
//if no errors, save data. send key val from editData function
storeTheData();
};
	//	
//		//group validation
//			if(checkGroup.val() === "--Choose a Type--"){
//				var checkGroupError = "Please choose a group."
//				$(this).parent().addClass('error');
//				checkGroup.css('border', '1px solid red');
//				messagesArray.push(checkGroupError);
//			}
//		}else{
//			//if no errors, save data. send key val from editData function
//			//remember this key value was passed through editSubmit as a property
//			storeTheData(this.key);
//			}
		
};
		
		
var getData = function() {
		
		//look for data, and then load JSON if empty
		if (!localStorage.length) {
			var verify = confirm('No Pebbles have been saved. Load sample JSON data by choosing OK.')
			if(verify) {
				loadInfo('json');	
			} else {
				alert("No data has been loaded.");
			};			
		};	
		
		
//show category when selected		
	if(pebbleCat) {
		$('#editItemPage h2').html('Viewing ' + pebbleCat + 's');	
	};
	
	for(var i = 0, j=localStorage.length; i<j; i++ ){
		var localObjKey = localStorage.key(i);
		var localObj = JSON.parse(localStorage.getItem(localObjKey));
		
		if(pebbleCat) {
			if(pebbleCat === type) {
				$('' + 
					'<li>' + '<a href="#newItem" class="" data-key="' + localObjKey + '" data-transition="slide">' +
						'<img src="' + type + '.png" class="ul-li-icon">' +
							'<h3>' + name + '</h3>' +
						'</a>' +
					'</li>'
				).appendTo(mainList);					
			};
		} else {
			$('' + 
					'<li>' + '<a href="#newItem" class="" data-key="' + localObjKey + '" data-transition="slide">' +
						'<img src="' + type + '.png" class="ul-li-icon">' +
							'<h3>' + 	inputName + '</h3>' +
						'</a>' +
					'</li>'
			).appendTo(mainList);	
		};
	};

	//bind edit 
	$('a[data-key]').on('click', function() {
		pebbleKey = $(this).attr('data-key');
	})

	//reset pebbleCat
	pebbleCat = '';

	//refresh the list
	mainList.listview('refresh');	
	
}; // end storage get
		

// delete single item from local storage
var	deleteItem = function() {
	var ask = confirm("Are you sure you want to delete this pebble?");	
	if(ask){
		//it was pebbleKey was this.key
		localStorage.removeItem(pebbleKey);
		alert("Pebble with id of " + pebbleKey + " was deleted.");
		pebbleKey = '';
	$.mobile.changePage("#editItemPage",{
	reverse: true,
	transition: "none"
	});	


	}else{
		alert("Pebble was not deleted.");
	}
};	// end delete


//edit the items
var editDataItem = function(){
	//Grab data from local storage
	var keyArg = pebbleKey;
	var value = localStorage.getItem(keyArg);
	var item = JSON.parse(value);
	
	console.log(item.inputName);
	
	//Show the form
//	toggleTheControls("off");
	
	//populate the form fields with current localStorage values
	$("#type").val(item.type).selectmenu("refresh");
	$("#inputName").val(item.inputName).trigger("create");
	$("#inputAddress").val(item.inputAddress).trigger("create");
//	$("#inputAddress2").val(item.inputAddress2).trigger("create");
	$("#inputCity").val(item.inputCity).trigger("create");
	$("#inputState").val(item.inputState).trigger("create");
	$("#inputZip").val(item.inputZip).trigger("create");
	$("#inputRating").val(item.inputRating).slider("refresh");
	$("#inputDate").val(item.inputDate).trigger("create");
//	$("#inputArea").val(item.inputArea).trigger("create");
//	if(item.inputCheck == "Yes"){
//		$("#addfav").attr("checked", "checked");
//	}
	
	var editSubmit = $("#submit");
	
	editSubmit.off('click');	
	//save key value for reuse
	editSubmit.on('click', function(){
	pebbleKey = keyArg;
	validate();
	});
	
};// end edit item		


// clear local storage
var clearLocalStorage = function(){
	if(localStorage.length === 0){
		alert("There is no data to clear.")
	}else{
		localStorage.clear();
		alert("All pebbles are deleted!");
		$.mobile.changePage("#indexPage",{
			reverse: true,
			transition: "none"
		});	 
	};
};// end storage clear	


//clear form fields
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
	$('.error').removeClass('error');
	clearErrors();
};// end clear form
	
		//reset the form
		$('#reset').clearForm();




//refresh any page
var pageRefresh = function() {
  $.mobile.changePage(
	window.location.href,
	{
	  allowSamePageTransition : true,
	  transition              : 'none',
	  showLoadMsg             : false,
	  reloadPage              : true
	}
  );
};//end page refresh
	

$('#home').on('pagebeforeshow', function(event) {
	console.log("Homepage is loaded.");

	$('.category').on('click', function() {
		pebbleCat = $(this).attr('data-category');
	});	
	
	$('.editItemPage').on('click', function() {
		mainList.empty();
	});	
			
});

$('#home').on('pagehide',function(event) {
	$('.category').off('click');
});


$('#editItemPage').on('pagebeforeshow',function(event) {
	console.log("View list of pebbles.");
	$('#editItemPage h2').html('Viewing All Pebbles');
	mainList.empty();
	getData();
	
	// bind clear storage to button click
	$('#clearStorage').on('click', function() {
		clearLocalStorage();
	});
	
	
});

$('#editItemPage').on('pagehide',function(event) {
	$('a[data-key]').off('click');
	$('#clearStorage').off('click');		
});



$('#newItem').on('pagebeforeshow', function(event) {
	console.log("Add a Pebble.");
	

	$('#submit').on('click', function() { validate() });
	$('#delete').on('click', function() { deleteItem() });
	
	//Populate form to edit item data
	if(pebbleKey) {
		editDataItem();
	}; 
});


$('#newItem').on('pagehide',function(event) {

	$('#submit').off('click');
	$('#delete').off('click');
	
	pebbleForm:reset;
	clearErrors();
});



