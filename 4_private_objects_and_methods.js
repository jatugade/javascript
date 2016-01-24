/*************************************************
 * PRIVATE OBJECTS AND METHODS
 * Implementing Private Methods using Closures
 *************************************************/
 
var Counter = function() {
	var count = 0; //private

	function changeBy(n) { //private
		count = count + n;
	}

	return {
		increment: function() {
			changeBy(1);
		},
		decrement: function() {
			changeBy(-1);
		},
		getValue: function() {
			return count;
		}
	}
};

counter = new Counter();
counter.increment();
counter.increment();
counter.getValue(); // => 2