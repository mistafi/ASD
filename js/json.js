// JSON Document
// MIU Project 4 
// Joshua Wisecup
// Term 1302 

$("#home").on("pagebeforecreate", function () {
    localStorage.clear();
    var jsonData = {
        "items":[
            		{
					"dropdownSelect": ["Type:", "Restaurant"],
					"inputName": ["Name:", "Johnny's Pizza"],	
					"inputAddress": ["Address:", "300 W Main St"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Frankfort"],	
					"inputState": ["State:", "KY"],	
					"inputZip": ["Zip Code:", "40601"],	
					"inputRating": ["Rating:", "8"],	
					"inputDate": ["Date of Visit:", "2013-01-30"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "No"]	
					},
				 	{
					"dropdownSelect": ["Type:", "Gas Station"],
					"inputName": ["Name:", "Smith Bros."],	
					"inputAddress": ["Address:", "22 S Main St"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Frankfort"],	
					"inputState": ["State:", "KY"],	
					"inputZip": ["Zip Code:", "40601"],	
					"inputRating": ["Rating:", "6"],	
					"inputDate": ["Date of Visit:", "2013-01-23"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "No"]	
					},
				 	{
					"dropdownSelect": ["Type:", "Retail Store"],
					"inputName": ["Name:", "Michael's"],	
					"inputAddress": ["Address:", "55 Allen Way"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Frankfort"],	
					"inputState": ["State:", "KY"],	
					"inputZip": ["Zip Code:", "40601"],	
					"inputRating": ["Rating:", "7"],	
					"inputDate": ["Date of Visit:", "2013-01-25"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "No"]	
					},
				 	{
					"dropdownSelect": ["Type:", "Retail Store"],
					"inputName": ["Name:", "Joey's Pet Mart"],	
					"inputAddress": ["Address:", "6600 Martin Ave"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Lexington"],	
					"inputState": ["State:", "KY"],	
					"inputZip": ["Zip Code:", "40511"],	
					"inputRating": ["Rating:", "5"],	
					"inputDate": ["Date of Visit:", "2013-01-28"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "No"]	
					},	
				 	{
					"dropdownSelect": ["Type:", "Gas Station"],
					"inputName": ["Name:", "Family Guys"],	
					"inputAddress": ["Address:", "Highway 44"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Lexington"],	
					"inputState": ["State:", "KY"],	
					"inputZip": ["Zip Code:", "40511"],	
					"inputRating": ["Rating:", "6"],	
					"inputDate": ["Date of Visit:", "2013-02-02"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "Yes"]	
					},
				 	{
					"dropdownSelect": ["Type:", "Restaurant"],
					"inputName": ["Name:", "Subby's"],	
					"inputAddress": ["Address:", "600 State Rt 47"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Sidney"],	
					"inputState": ["State:", "OH"],	
					"inputZip": ["Zip Code:", "45365"],	
					"inputRating": ["Rating:", "8"],	
					"inputDate": ["Date of Visit:", "2013-02-4"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "Yes"]	
					},
				 	{
					"dropdownSelect": ["Type:", "Retail Store"],
					"inputName": ["Name:", "Mac's Clothing for Kids"],	
					"inputAddress": ["Address:", "455 Fifth St"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Frankfort"],	
					"inputState": ["State:", "KY"],	
					"inputZip": ["Zip Code:", "40601"],	
					"inputRating": ["Rating:", "7"],	
					"inputDate": ["Date of Visit:", "2013-01-05"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "Yes"]	
					},
				 	{
					"dropdownSelect": ["Type:", "Restaurant"],
					"inputName": ["Name:", "Flo's Diner"],	
					"inputAddress": ["Address:", "250 Main St"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Frankfort"],	
					"inputState": ["State:", "KY"],	
					"inputZip": ["Zip Code:", "40601"],	
					"inputRating": ["Rating:", "8"],	
					"inputDate": ["Date of Visit:", "2013-01-10"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "Yes"]	
					},
				 	{
					"dropdownSelect": ["Type:", "Restaurant"],
					"inputName": ["Name:", "Rojo's"],	
					"inputAddress": ["Address:", "233 3rd St"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Lexington"],	
					"inputState": ["State:", "KY"],	
					"inputZip": ["Zip Code:", "40505"],	
					"inputRating": ["Rating:", "8"],	
					"inputDate": ["Date of Visit:", "2013-01-10"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "Yes"]	
					},	
					{
					"dropdownSelect": ["Type:", "Gas Station"],
					"inputName": ["Name:", "Shelly's Shell"],	
					"inputAddress": ["Address:", "22 Fifth Ave"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Dayton"],	
					"inputState": ["State:", "OH"],	
					"inputZip": ["Zip Code:", "43001"],	
					"inputRating": ["Rating:", "7"],	
					"inputDate": ["Date of Visit:", "2013-01-15"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "No"]	
					},
				 	{
					"dropdownSelect": ["Type:", "Gas Station"],
					"inputName": ["Name:", "Fill 'er Up"],	
					"inputAddress": ["Address:", "865 James St"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Xenia"],	
					"inputState": ["State:", "OH"],	
					"inputZip": ["Zip Code:", "49905"],	
					"inputRating": ["Rating:", "7"],	
					"inputDate": ["Date of Visit:", "2013-01-02"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "No"]	
					},
				 	{
					"dropdownSelect": ["Type:", "Retail Store"],
					"inputName": ["Name:", "TJ"],	
					"inputAddress": ["Address:", "677 Business Blvd"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Westchester"],	
					"inputState": ["State:", "OH"],	
					"inputZip": ["Zip Code:", "45599"],	
					"inputRating": ["Rating:", "7"],	
					"inputDate": ["Date of Visit:", "2013-02-05"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "No"]	
					},	
				 	{
					"dropdownSelect": ["Type:", "Retail Store"],
					"inputName": ["Name:", "Lucky's Garage Warehouse"],	
					"inputAddress": ["Address:", "465 Circle Dr"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Sidney"],	
					"inputState": ["State:", "OH"],	
					"inputZip": ["Zip Code:", "45365"],	
					"inputRating": ["Rating:", "7"],	
					"inputDate": ["Date of Visit:", "2013-02-02"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "Yes"]	
					},
				 	{
					"dropdownSelect": ["Type:", "Restaurant"],
					"inputName": ["Name:", "Mikey's Pizza"],	
					"inputAddress": ["Address:", "900 Versailles Ave"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Frankfort"],	
					"inputState": ["State:", "KY"],	
					"inputZip": ["Zip Code:", "40601"],	
					"inputRating": ["Rating:", "7"],	
					"inputDate": ["Date of Visit:", "2013-02-01"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "No"]	
					},
				 	{
					"dropdownSelect": ["Type:", "Gas Station"],
					"inputName": ["Name:", "Johnson's BP"],	
					"inputAddress": ["Address:", "800 Alameda Freeway"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Lexington"],	
					"inputState": ["State:", "KY"],	
					"inputZip": ["Zip Code:", "40505"],	
					"inputRating": ["Rating:", "5"],	
					"inputDate": ["Date of Visit:", "2013-01-18"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "Yes"]	
					},
				 	{
					"dropdownSelect": ["Type:", "Restaurant"],
					"inputName": ["Name:", "Bella's"],	
					"inputAddress": ["Address:", "700 Folkerth Ave"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Frankfort"],	
					"inputState": ["State:", "KY"],	
					"inputZip": ["Zip Code:", "40601"],	
					"inputRating": ["Rating:", "9"],	
					"inputDate": ["Date of Visit:", "2013-01-21"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "No"]	
					},	
				 	{
					"dropdownSelect": ["Type:", "Retail Store"],
					"inputName": ["Name:", "Trade 'em Ins"],	
					"inputAddress": ["Address:", "700 Trustway Blvd"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Lexington"],	
					"inputState": ["State:", "KY"],	
					"inputZip": ["Zip Code:", "40505"],	
					"inputRating": ["Rating:", "7"],	
					"inputDate": ["Date of Visit:", "2013-01-23"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "Yes"]	
					},
				 	{
					"dropdownSelect": ["Type:", "Gas Station"],
					"inputName": ["Name:", "Showman's BP"],	
					"inputAddress": ["Address:", "877 Highway 66"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Westchester"],	
					"inputState": ["State:", "OH"],	
					"inputZip": ["Zip Code:", "40909"],	
					"inputRating": ["Rating:", "7"],	
					"inputDate": ["Date of Visit:", "2013-01-10"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "Yes"]	
					},
					{
					"dropdownSelect": ["Type:", "Retail Store"],
					"inputName": ["Name:", "Dress Place"],	
					"inputAddress": ["Address:", "455 Major Way"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Sidney"],	
					"inputState": ["State:", "OH"],	
					"inputZip": ["Zip Code:", "45365"],	
					"inputRating": ["Rating:", "6"],	
					"inputDate": ["Date of Visit:", "2013-02-04"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "Yes"]	
					},
					{
					"dropdownSelect": ["Type:", "Restaurant"],
					"inputName": ["Name:", "Sweetheart's Grille"],	
					"inputAddress": ["Address:", "400 Musical Ln"],	
					"inputAddress2": ["Address2:", ""],	
					"inputCity": ["City:", "Lexington"],	
					"inputState": ["State:", "KY"],	
					"inputZip": ["Zip Code:", "40505"],	
					"inputRating": ["Rating:", "8"],	
					"inputDate": ["Date of Visit:", "2013-01-17"],	
					"inputArea": ["Notes:", ""],	
					"inputCheck": ["Favorite:", "No"]	
            }
        ]
    };

    $.each(jsonData.items, function (index, singleItem) {
        var _id = Math.floor(Math.random() * 100001);
        var toStore = JSON.stringify(singleItem);
        localStorage.setItem(_id, toStore);
        console.log("Saved item " + index + " to storage with _id = " + _id);
    });
});
