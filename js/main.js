// JavaScript Document
// ASD Project 1 
// Joshua Wisecup
// Term 1304





$('#home').on('pageinit', function() {
	//code needed for home page goes here
	alert("hello world");
    console.log("Page one loaded."); // only runs on the first load unless the page is refreshed.
    // Latest update

	
	// transition to page, using data from a form and reloading the page from scratch
	var toChangePage = function (toPageId) {
		$.mobile.changePage("#" + toPageId , {
			type:"post",
			data:$("form").serialize(),
			reloadPage:true
		});
	};
    
    // Step 1: target our list and empty it http://api.jquery.com/empty/
    $("#mainSearch").empty();
    // Step 2: Grab list item details from index.html
    $('<li data-role="list-divider">Friday, October 8, 2010 <span class="ui-li-count">3</span></li>' +
        '<li><a href="index.html"><h3>Stephen Weber</h3>' +
        '<p><strong>You have been invited to a meeting at Filament Group in Boston, MA</strong></p>' +
        '<p>Hey Stephen, we have got a meeting with the jQuery team.</p>' +
        '<p class="ui-li-aside"><strong>6:24</strong>PM</p></a></li>').appendTo("#mainSearch");

    // Step 3: refresh the listview
    $("#mainSearch").listview('refresh');
            
    // Get localStorage
    $("#getStorage").on('click', function(){
        $("#mainSearch").empty();
        for (var i= 0, j=localStorage.length; i<j ; i++){
            var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
            console.log(item);
            var makeSubList = $("<li></li>");
            var makeSubLi = $( "<h3>"+item.dropdownSelect[1]+"</h3>"+
                "<p><strong>"+item.inputName[1]+"</strong></p>"+
                "<p>"+item.inputRating[1]+"</p>" +
                "<p>"+item.inputArea[1]+"</p>" );
            var makeLink = $("<a href='#' id='"+key+"'>Edit</a>");
            makeLink.on('click', function(){
                console.log("This is my key: "+this.id);
				//Edit Item here this.id is key
				editDataItem();
				//get item populate form
				//change from save to edit item in form				
            });
            makeLink.html(makeSubLi);
            makeSubList.append(makeLink).appendTo("#mainSearch");
        }; // end for loop
        $("#mainSearch").listview('refresh');
    });  // end storage.on


	
		$('#newItem').on('pageinit', function() {
			
			$("a[href='#home']").on('click', function(e){ 
			e.preventDefault();
			console.log("Moving to PAGE ONE with the toChangePage function");
			toChangePage("home");
			});
		
		});
	
	
});


$('#newItem').on('pageinit', function() {

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
	

});
	

$('#editItemPage').on('pageinit', function() {
	
	    // Step 1: target our list and empty it http://api.jquery.com/empty/
    $("#mainEditList").empty();
    // Step 2: Grab list item details from index.html
    $('<li data-role="list-divider">Friday, October 8, 2010 <span class="ui-li-count">3</span></li>' +
        '<li><a href="index.html"><h3>Stephen Weber</h3>' +
        '<p><strong>You have been invited to a meeting at Filament Group in Boston, MA</strong></p>' +
        '<p>Hey Stephen, we have got a meeting with the jQuery team.</p>' +
        '<p class="ui-li-aside"><strong>6:24</strong>PM</p></a></li>').appendTo("#mainEditList");

    // Step 3: refresh the listview
    $("#mainEditList").listview('refresh');
            
    // Load localStorage
        $("#mainEditList").empty();
        for (var i= 0, j=localStorage.length; i<j ; i++){
            var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
            console.log(item);
            var makeSubList = $("<li></li>");
            var makeSubLi = $( "<h3>"+item.dropdownSelect[1]+"</h3>"+
                "<p><strong>"+item.inputName[1]+"</strong></p>"+
                "<p>"+item.inputRating[1]+"</p>" +
                "<p>"+item.inputArea[1]+"</p>" );
            var makeLink = $("<a href='#' id='"+key+"'>Edit</a>");
            makeLink.on('click', function(){
                console.log("This is my key: "+this.id);
				//Edit Item here this.id is key
				editDataItem();
				//get item populate form
				//change from save to edit item in form				
            });
            makeLink.html(makeSubLi);
            makeSubList.append(makeLink).appendTo("#mainEditList");
        }; // end for loop
        $("#mainEditList").listview('refresh');


});

