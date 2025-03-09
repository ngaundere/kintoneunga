(function () {
	"use strict";

	fb.events.form.created = [
		function () {
			console.log("aho")
		},

		function (state) {
			console.log(state)
		}

	];

	fb.events.fields.keisai.changed = [
		function (state) {
			console.log(state.record.keisai.value)
		}


	];


})();
