define(["knockout", "jquery", "app/urls"], function (ko, $, urls) {
	ko.bindingHandlers.placeViewer = {
		update: function (el, valueAccessor, allBindings) {
			var place = ko.utils.unwrapObservable(valueAccessor());

			if (!place) {
				el.innerHTML = "No place provided";
			} else {
				if (place.fullName) {
					el.innerHTML = place.fullName;
				} else {
					$.ajax(urls.fips + "places/" + place.fips + "/", {
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