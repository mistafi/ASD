function (doc) {
	if (doc.type === "Retail Store") {
		emit(doc.type, {
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
