IG Switches
===========

A simple switch. Nothing fancy.

##Installation

From your project's root directory type

```bower install --save git+https://github.com/ft-interactive/ig-switches.git```

##Usage
[See some examples](http://ft-interactive.github.io/ig-switches/)

The basic usage is: 

* Don't forget to have the switchinput.js file in your HTML document and include the relevant stuff in sass i.e. 'ig-switches/main'

* Make some HTML

```html
<div id="my-lovely-switch">My Switch</div>
```

* Create a switch ( passing the id attribute of the DOM element to which the switch should be appended and a set of 2+ states )

```javascript
var myLovelySwitch = switchInputFactory(
	'my-lovely-switch', 
	[ 'Bulbasaur', 'Caterpie', 'Pikachu', 'Vulpix', 'Psyduck' ]);
```

* Add an event listener to the switch so when it's state is changed you can do something with that information

```javascript
$(myLovelySwitch).on('state-change', function(){
  $('#example-output-2').html('switch set to: ' + this.state);
});
```

###Options

You can specify other things when you create your switch in the form of an options object like this
```javascript
var switchOptions = {
	defaultState:"Pikachu",
	disabledStates:["Caterpie", "Psyduck"],
	activeClass:'my-active-switch-state',
	inactiveClass:'my-inactive-switch-state',
	disabledClass:'my-disabled-switch-state'
}

var myLovelySwitch = switchInputFactory(
	'my-lovely-switch', 
	[ 'Bulbasaur', 'Caterpie', 'Pikachu', 'Vulpix', 'Psyduck' ],
	switchOptions);

```

```defaultState``` : Which of the switches states should be selected upon creation
```disabledStates```: Which set of states should initially not be selectable by the user
```activeClass```: A class name (or set of names) that the switches selected option should have
```inactiveClass```: Ditto for unselected options
```disabledClass```: Same again, but this time for states which the user can not select

###Other methods

```disableState``` : disable a particular state ```myLovelySwitch.disableState('Psyduck')``` (NOTE: if you disable the currently selected state the next available state will be selected, this might not be your intention so be careful!)
```enableState``` : enable a particular state ```myLovelySwitch.enableState('Psyduck')```
```changeState``` : programatically (i.e. not by user input) select a particular state ```myLovelySwitch.changeState('Pikachu')``` (NOTE: calling this mehtod on a disabled state will enable and select it, this might not be your intention so be careful!)

##TO DO
Switch steas are refered to by their 'sanitized' versions i.e. "custom (1!)" will register as "custom__1__" not ideal.
