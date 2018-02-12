angularjs-promise-button
=====================
An Angular module that gives you feedback for the action buttons on supply of promise

## Get Started
**(1)** You can install angularjs-promise-button using 2 different ways:<br/>
**Bower:**
```bash
$ bower install angularjs-promise-button --save
```

```
**(2)** Include `angularjs-promise-button` (or `angularjs-promise-button.js`) from the [src](https://github.com/dhineshwiz/angular-promise-button/master/src) directory in your `index.html`, after including Angular itself.

**(3)** Add `'promiseButton'` to your main module's list of dependencies.

When you're done, your setup should look similar to the following:

```html
<!doctype html>
<html ng-app="myApp">
<head>

</head>
<body>
    ...
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angularjs-promise-button.js"></script>
    ...
    <script>
        var myApp = angular.module('myApp', ['promiseButton']);

    </script>
    ...
</body>
</html>
```
## Usage

```html
<button promise-click="buttonAction()" busy-text="'Updating'" hide-percentage="false">button_text</button>
```

## Directive Options

promise-click   - Promise of the action to be returned (type: expression)   
busy-text       - Busy text which needs to be shown on action perform (type: string)
hide-percentage - To hide the percentage of work done(type boolean)
