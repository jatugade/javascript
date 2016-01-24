/*************************************************
 * INHERITANCE
 * Ways to implement prototypal inheritance
 *************************************************/

/***************************************
 * I. Inheriting from an object instance
 ***************************************/

 //A. Object.create()
 parent = { 
 	key: 'val', 
 	getKey: function() {
 		return this.key;
 	}
 };

 child = Object.create(parent);
 child.key; // => val
 child.getKey(); // => val1


 // B. Object.setPrototypeOf()
 parent = { 
 	key: 'val', 
 	getKey: function() {
 		return this.key;
 	}
 };

 child = {};
 Object.setPrototypeOf(child, parent);
 child.key; // => val
 child.getKey(); // => val


/***************************************
 * II. Inheriting from Function Objects
 ***************************************/
 
 function Parent() {
 	this.key = 'val';
 	this.getKey = function() {
 		return this.key;
 	}
 }

 function Child() {
 	Parent.call(this);
 }

 Child.prototype = Object.create(Parent.prototype);
 Child.prototype.constructor = Child;

 c = new Child();
 c.key; // => val
 c.getKey(); // => val

 Parent.prototype.sayHello = function() {
 	console.log('hello');
 }

 c.sayHello(); // => hello
 
 // Child
 //     getKey: function()
 //     key: val
 //     __proto__: Child
 //     	constructor: Child()
 //     	__proto__: Parent
 //     		constructor: function Parent()
 //     		sayHello: function()
 //     		__proto__: Object


