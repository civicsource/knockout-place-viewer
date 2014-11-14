define(["knockout", "jquery", "app/urls"], function (ko, $, urls) {
	ko.bindingHandlers.placeViewer = {
		init: function (el, valueAccessor, allBindings) {
			return { controlsDescendantBindings: true };
		},
		update: function (el, valueAccessor, allBindings) {
			el.innerHTML = "<span>loading...</span>";
			var locationName = "";
			var fips = ko.utils.unwrapObservable(valueAccessor()) || "";

			$.ajax(urls.fips + "places/" + fips, {
				type: "GET",
				contentType: "application/json",
			}).then(function (data) {
				locationName = data.fullName;
			}).always(function () {
				if (!locationName) locationName = "Unknown";

				el.innerHTML = "<span>" + locationName + "</span>";
			});
		}
	};
});