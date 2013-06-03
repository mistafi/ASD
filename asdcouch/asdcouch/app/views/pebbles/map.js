function (doc) {
	if (doc._id.substr(0, 7) === "pebble:") {
		emit(doc._id.substr(7), {
			"type":doc.type,
			"inputName":doc.inputName,
			"inputAddress":doc.inputAddress,
			"inputCity":doc.inputCity,
			"inputState":doc.inputState,
			"inputZip":doc.inputZip,
			"inputRating":doc.inputRating,
			"inputDate":doc.inputDate
		});
	}
};