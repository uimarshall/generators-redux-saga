window.onload = () => {
	function* gen() {
		// Only 'Peter' will be logged to d console b/c Js executes from R-L
		yield console.log("Peter"); //we use 'yield' to pause the generator func (gen())
		console.log("James");
		console.log("John");
	}

	/* When a generator func is 1st called, it does not fire the function but only set it up
	ready for use . It does so by returning an iterator(loop thru)*/
	let myIterator = gen(); //This line setup the generator func & returned the iterator

	// Next is to play/run the code or generator
	// The 'next()' mtd is the play botton to run the code
	myIterator.next(); //The generator func start to run here
	/*Calling next() on the iterator will run the code again and logged 'James'& 'John' 
	 to the console after pausing it at 'Peter' with the yield keyword*/
	myIterator.next();
};
