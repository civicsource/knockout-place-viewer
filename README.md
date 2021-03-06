#Knockout Place Viewer

> Knockout component to view a [FIPs place](https://github.com/civicsource/fips).

##Installation

```
npm install knockout-place-viewer --save
```

Then add the folder to your project.

##How to Use

`require` the script and use it as a binding handler:

```html
<span data-bind="placeViewer: myPlace"></span>
```

where `myPlace` is an observable you want two-way bound to the component.

If the bound place only has a `fips` code, it will hit the server to retrieve the full place object and populate the observable. Otherwise, it will use what is passed in to show the place's full name.

This component will look for a payloaded endpoint URL on the window object by default. To configure this, pass the `endpoint` parameter to the binding.

This component complements and can be used with the [Knockout Place Picker](https://github.com/civicsource/knockout-place-picker)