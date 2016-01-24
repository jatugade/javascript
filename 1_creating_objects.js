/**********************************************************
 * CREATING OBJECTS
 * Three ways to create an object in Javascript
 **********************************************************/

/******************************
 * I. Object Initializers
 * Creates an object instance
 ******************************/

var obj = {
	key1: 'val1',
	key2: 'val2'
}

/******************************************
 * II. Constructor Functions
 * Creates multiple instances of type Obj
 ******************************************/ 

function Obj(val1, val2) {
	this.key1 = val1;
	this.key2 = val2;
}
obj1 = new Obj();
obj2 = new Obj();


/****************************************************
 * III. Object.create()
 * Creates an object instance using another object as 
 * its prototype 
****************************************************/
obj = Object.create({key1: 'val1', key2: 'val2'});
