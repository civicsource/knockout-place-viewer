define(["knockout", "jquery", "app/urls"],
function (ko, $, urls) {
	ko.bindingHandlers.placeViewer = {
		update: function (el, valueAccessor, allBindings) {
			el.innerHtml = "<span>loading...</span>";
			var locationName = "";
			var fips = ko.unwrapObservable(valueAccessor) || "";

			$.ajax(urls.fips + "places/" + fips, {
				type: "GET",
				contentType: "application/json",
			}).then(function (data) {
				locationName = data.fullName;
			}).always(function () {
				if (!locationName) locationName = "Unknown";

				el.innerHtml = "<span>" + locationName + "</span>";
			});
		}
	};
	ko.virtualElements.allowedBindings.placeViewer = true;
});