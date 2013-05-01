// JavaScript Document
// ASD Project 1 
// Joshua Wisecup
// Term 1304


$('#front-page').on('pageinit', function(){
	
	console.log("hello world. This is the front page");	

		//Auto Fill Local Storage as default
	var autoFillDefault = function (){
		//store JSON into Local Storage
		for(var n in jsonData){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(jsonData[n]));
		} 
	};	

autoFillDefault();
	
// Get localStorage
        $("#mainSearch").empty();
		
//		//populate the form fields with current localStorage values
//		$("#dropdownSelect").val() == item.dropdownSelect[1];
//		$("#inputName").val() == item.inputName[1];
//		$("#inputAddress").val() == item.inputAddress[1];
//		$("#inputAddress2").val() == item.inputAddress2[1];
//		$("#inputCity").val() == item.inputCity[1];
//		$("#inputState").val() == item.inputState[1];
//		$("#inputZip").val() == item.inputZip[1];
//		$("#inputRating").val() == item.inputRating[1];
//		$("#inputDate").val() == item.inputDate[1];
//		$("#inputArea").val() == item.inputArea[1];
//		if(item.inputCheck[1] == "Yes"){
//			$("addfav").attr("checked", "checked");
//		}
		
		
        for (var i= 0, j=localStorage.length; i<j ; i++){
            var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
            console.log(item);
            var makeSubList = $("<li></li>");
            var makeSubLi = $( "<h3>"+item.inputName[1]+"</h3>"+
                "<p><strong>"+item.dropdownSelect[1]+"</strong></p>"+
                "<p>"+item.inputAddress[1]+"</p>" +
                "<p>"+item.inputCity[1]+"</p>" );
            var makeLink = $("<a href='#' id='"+key+"'>Edit</a>");
            makeLink.on('click', function(){
                console.log("This is my key: "+this.id);
            });
            makeLink.html(makeSubLi);
            makeSubList.append(makeLink).appendTo("#mainSearch");
        }; // end for loop
  //      $("ul").listview('refresh');


});	

		
$('#edit-page').on('pageinit', function(){



	
});

$('#display-page').on('pageinit', function(event){

		//Auto Fill Local Storage as default
	var autoFillDefault = function (){
		//store JSON into Local Storage
		for(var n in jsonData){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(jsonData[n]));
		} 
	};	

autoFillDefault();
	
// Get localStorage
    $("#storage").on('click', function(){
        $("#itemList").empty();
        for (var i= 0, j=localStorage.length; i<j ; i++){
            var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
            console.log(item);
            var makeSubList = $("<li></li>");
            var makeSubLi = $( "<h3>"+item.iname[1]+"</h3>"+
                "<p><strong>"+item.category[1]+"</strong></p>"+
                "<p>"+item.quantity[1]+"</p>" +
                "<p>"+item.notes[1]+"</p>" );
            var makeLink = $("<a href='#' id='"+key+"'>Edit</a>");
            makeLink.on('click', function(){
                console.log("This is my key: "+this.id);
            });
            makeLink.html(makeSubLi);
            makeSubList.append(makeLink).appendTo("#itemList");
        }; // end for loop
        $("ul").listview('refresh');
    });  // end storage.on



});




	




