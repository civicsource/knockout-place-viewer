var ko = require("knockout");
var $ = require("jquery");

ko.bindingHandlers.placeViewer = {
	update: function (el, valueAccessor, allBindings) {
		var place = ko.utils.unwrapObservable(valueAccessor());
		var endpoint = allBindings.get("endpoint") || window.civicsource.urls.fips + "places/";

		if (!place) {
			el.innerHTML = "No place provided";
		} else {
			if (place.fullName) {
				el.innerHTML = place.fullName;
			} else {
				$.ajax(endpoint + place.fips + "/", {
					type: "GET",
					contentType: "application/json"
				}).then(function (data) {
					var obs = valueAccessor();
					if (ko.isObservable(obs)) {
						obs(data);
					}

					el.innerHTML = data.fullName;
				});
			}
		}
	}
};