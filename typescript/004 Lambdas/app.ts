class MyClass {
	public doSomething() {
		// Note that "this" is set when the function is invoked
		console.log(this.toString());
	}

	public doSomethingWithLambda: () => void;

	constructor() {
		// Note that the arrow syntax is capturing this when the function
		// is created.
		this.doSomethingWithLambda = () => {
			console.log(this.toString());
		};
	}
}
