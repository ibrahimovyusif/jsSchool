var School = function (name) { this.name = name; };
School.prototype.number = [157]; // setting a non-primitive property
School.prototype.showData = function () { 
	console.log(this.name, this.number); 
};

var foo1 = new School("Mekteb1");
var foo2 = new School("Mekteb2");

// both instances use the same default value of data
foo1.showData(); // "foo1", [1, 2, 3]
foo2.showData(); // "foo2", [1, 2, 3]
