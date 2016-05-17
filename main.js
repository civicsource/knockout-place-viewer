define(["knockout", "jquery", "app/payload"], function (ko, $, payload) {
	ko.bindingHandlers.placeViewer = {
		update: function (el, valueAccessor, allBindings) {
			var place = ko.utils.unwrapObservable(valueAccessor());

			if (!place) {
				el.innerHTML = "No place provided";
			} else {
				if (place.fullName) {
					el.innerHTML = place.fullName;
				} else {
					$.ajax(payload.urls.fips + "places/" + place.fips + "/", {
						type: "GET",
						contentType: "application/json",
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
});
