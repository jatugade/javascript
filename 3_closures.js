/**************************************************************
 * Closures
 * Function remembers the enviroment in which it was created,
 * giving it access to the variables within this environment
 * no matter where the function is executed
 **************************************************************/


 function F() {
 	var val = 'val';

 	this.getVal = function() {
 		return val; 
 	}
 }

 var f1 = new F();
 var val = 'newval'; // this won't affect the 'val' bound to getVal();


 f1.getVal(); // => val

 var f2 = f1.getVal;
 f2(); // => val





