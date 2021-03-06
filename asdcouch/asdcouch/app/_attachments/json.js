// JSON Document
// MIU Project 4 
// Joshua Wisecup
// Term 1302 
$("#home").on("pagebeforecreate", function () {
    localStorage.clear();
   var jsonData =
 
{ 
		"pebbleItems" : [
            		{
					"type": ["Restaurant"],
					"inputName": ["Johnny's Pizza"],	
					"inputAddress": ["300 W Main St"],	
					"inputAddress2": [""],	
					"inputCity": ["Frankfort"],	
					"inputState": ["KY"],	
					"inputZip": ["40601"],	
					"inputRating": ["8"],	
					"inputDate": ["2013-01-30"],	
					"inputArea": [""],	
					"inputCheck": ["No"]	
					},
				 	{
					"type": ["Gas Station"],
					"inputName": ["Smith Bros."],	
					"inputAddress": ["22 S Main St"],	
					"inputAddress2": [""],	
					"inputCity": ["Frankfort"],	
					"inputState": ["KY"],	
					"inputZip": ["40601"],	
					"inputRating": ["6"],	
					"inputDate": ["2013-01-23"],	
					"inputArea": [""],	
					"inputCheck": ["No"]	
					},
				 	{
					"type": ["Retail Store"],
					"inputName": ["Michael's"],	
					"inputAddress": ["55 Allen Way"],	
					"inputAddress2": [""],	
					"inputCity": ["Frankfort"],	
					"inputState": ["KY"],	
					"inputZip": ["40601"],	
					"inputRating": ["7"],	
					"inputDate": ["2013-01-25"],	
					"inputArea": [""],	
					"inputCheck": ["No"]	
					},
				 	{
					"type": ["Retail Store"],
					"inputName": ["Joey's Pet Mart"],	
					"inputAddress": ["6600 Martin Ave"],	
					"inputAddress2": [""],	
					"inputCity": ["Lexington"],	
					"inputState": ["KY"],	
					"inputZip": ["40511"],	
					"inputRating": ["5"],	
					"inputDate": ["2013-01-28"],	
					"inputArea": [""],	
					"inputCheck": ["No"]	
					},	
				 	{
					"type": ["Gas Station"],
					"inputName": ["Family Guys"],	
					"inputAddress": ["Highway 44"],	
					"inputAddress2": [""],	
					"inputCity": ["Lexington"],	
					"inputState": ["KY"],	
					"inputZip": ["40511"],	
					"inputRating": ["6"],	
					"inputDate": ["2013-02-02"],	
					"inputArea": [""],	
					"inputCheck": ["Yes"]	
					},
				 	{
					"type": ["Restaurant"],
					"inputName": ["Subby's"],	
					"inputAddress": ["600 State Rt 47"],	
					"inputAddress2": [""],	
					"inputCity": ["Sidney"],	
					"inputState": ["OH"],	
					"inputZip": ["45365"],	
					"inputRating": ["8"],	
					"inputDate": ["2013-02-4"],	
					"inputArea": [""],	
					"inputCheck": ["Yes"]	
					},
				 	{
					"type": ["Retail Store"],
					"inputName": ["Mac's Clothing for Kids"],	
					"inputAddress": ["455 Fifth St"],	
					"inputAddress2": [""],	
					"inputCity": ["Frankfort"],	
					"inputState": ["KY"],	
					"inputZip": ["40601"],	
					"inputRating": ["7"],	
					"inputDate": ["2013-01-05"],	
					"inputArea": [""],	
					"inputCheck": ["Yes"]	
					},
				 	{
					"type": ["Restaurant"],
					"inputName": ["Flo's Diner"],	
					"inputAddress": ["250 Main St"],	
					"inputAddress2": [""],	
					"inputCity": ["Frankfort"],	
					"inputState": ["KY"],	
					"inputZip": ["40601"],	
					"inputRating": ["8"],	
					"inputDate": ["2013-01-10"],	
					"inputArea": [""],	
					"inputCheck": ["Yes"]	
					},
				 	{
					"type": ["Restaurant"],
					"inputName": ["Rojo's"],	
					"inputAddress": ["233 3rd St"],	
					"inputAddress2": [""],	
					"inputCity": ["Lexington"],	
					"inputState": ["KY"],	
					"inputZip": ["40505"],	
					"inputRating": ["8"],	
					"inputDate": ["2013-01-10"],	
					"inputArea": [""],	
					"inputCheck": ["Yes"]	
					},	
					{
					"type": ["Gas Station"],
					"inputName": ["Shelly's Shell"],	
					"inputAddress": ["22 Fifth Ave"],	
					"inputAddress2": [""],	
					"inputCity": ["Dayton"],	
					"inputState": ["OH"],	
					"inputZip": ["43001"],	
					"inputRating": ["7"],	
					"inputDate": ["2013-01-15"],	
					"inputArea": [""],	
					"inputCheck": ["No"]	
					},
				 	{
					"type": ["Gas Station"],
					"inputName": ["Fill 'er Up"],	
					"inputAddress": ["865 James St"],	
					"inputAddress2": [""],	
					"inputCity": ["Xenia"],	
					"inputState": ["OH"],	
					"inputZip": ["49905"],	
					"inputRating": ["7"],	
					"inputDate": ["2013-01-02"],	
					"inputArea": [""],	
					"inputCheck": ["No"]	
					},
				 	{
					"type": ["Retail Store"],
					"inputName": ["TJ"],	
					"inputAddress": ["677 Business Blvd"],	
					"inputAddress2": [""],	
					"inputCity": ["Westchester"],	
					"inputState": ["OH"],	
					"inputZip": ["45599"],	
					"inputRating": ["7"],	
					"inputDate": ["2013-02-05"],	
					"inputArea": [""],	
					"inputCheck": ["No"]	
					},	
				 	{
					"type": ["Retail Store"],
					"inputName": ["Lucky's Garage Warehouse"],	
					"inputAddress": ["465 Circle Dr"],	
					"inputAddress2": [""],	
					"inputCity": ["Sidney"],	
					"inputState": ["OH"],	
					"inputZip": ["45365"],	
					"inputRating": ["7"],	
					"inputDate": ["2013-02-02"],	
					"inputArea": [""],	
					"inputCheck": ["Yes"]	
					},
				 	{
					"type": ["Restaurant"],
					"inputName": ["Mikey's Pizza"],	
					"inputAddress": ["900 Versailles Ave"],	
					"inputAddress2": [""],	
					"inputCity": ["Frankfort"],	
					"inputState": ["KY"],	
					"inputZip": ["40601"],	
					"inputRating": ["7"],	
					"inputDate": ["2013-02-01"],	
					"inputArea": [""],	
					"inputCheck": ["No"]	
					},
				 	{
					"type": ["Gas Station"],
					"inputName": ["Johnson's BP"],	
					"inputAddress": ["800 Alameda Freeway"],	
					"inputAddress2": [""],	
					"inputCity": ["Lexington"],	
					"inputState": ["KY"],	
					"inputZip": ["40505"],	
					"inputRating": ["5"],	
					"inputDate": ["2013-01-18"],	
					"inputArea": [""],	
					"inputCheck": ["Yes"]	
					},
				 	{
					"type": ["Restaurant"],
					"inputName": ["Bella's"],	
					"inputAddress": ["700 Folkerth Ave"],	
					"inputAddress2": [""],	
					"inputCity": ["Frankfort"],	
					"inputState": ["KY"],	
					"inputZip": ["40601"],	
					"inputRating": ["9"],	
					"inputDate": ["2013-01-21"],	
					"inputArea": [""],	
					"inputCheck": ["No"]	
					},	
				 	{
					"type": ["Retail Store"],
					"inputName": ["Trade 'em Ins"],	
					"inputAddress": ["700 Trustway Blvd"],	
					"inputAddress2": [""],	
					"inputCity": ["Lexington"],	
					"inputState": ["KY"],	
					"inputZip": ["40505"],	
					"inputRating": ["7"],	
					"inputDate": ["2013-01-23"],	
					"inputArea": [""],	
					"inputCheck": ["Yes"]	
					},
				 	{
					"type": ["Gas Station"],
					"inputName": ["Showman's BP"],	
					"inputAddress": ["877 Highway 66"],	
					"inputAddress2": [""],	
					"inputCity": ["Westchester"],	
					"inputState": ["OH"],	
					"inputZip": ["40909"],	
					"inputRating": ["7"],	
					"inputDate": ["2013-01-10"],	
					"inputArea": [""],	
					"inputCheck": ["Yes"]	
					},
					{
					"type": ["Retail Store"],
					"inputName": ["Dress Place"],	
					"inputAddress": ["455 Major Way"],	
					"inputAddress2": [""],	
					"inputCity": ["Sidney"],	
					"inputState": ["OH"],	
					"inputZip": ["45365"],	
					"inputRating": ["6"],	
					"inputDate": ["2013-02-04"],	
					"inputArea": [""],	
					"inputCheck": ["Yes"]	
					},
					{
					"type": ["Restaurant"],
					"inputName": ["Sweetheart's Grille"],	
					"inputAddress": ["400 Musical Ln"],	
					"inputAddress2": [""],	
					"inputCity": ["Lexington"],	
					"inputState": ["KY"],	
					"inputZip": ["40505"],	
					"inputRating": ["8"],	
					"inputDate": ["2013-01-17"],	
					"inputArea": [""],	
					"inputCheck": ["No"]	
            }	 
		]
    }
	
;

    $.each(jsonData.pebbleItems, function (index, singleItem) {
        var _id = Math.floor(Math.random() * 100001);
        var toStore = JSON.stringify(singleItem);
        localStorage.setItem(_id, toStore);
        console.log("Saved item " + index + " to storage with _id = " + _id);
    });
});
