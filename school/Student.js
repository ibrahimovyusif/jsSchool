var Student = require('./Teacher');



var Student = function(name, ID, dateOfBirth, serialNumber){
	this.name = name;
	this.ID = ID;
	this.dateOfBirth = dateOfBirth;
	this.serialNumber = serialNumber;
	this.student = function(){
		return this.serialNumber;
	}
}

var huseyn = new Student("Huseyn Xanlarov", 222, "21/12/4112", 9012);
var abbas = new Student("ASasa Xanlarov", 22232, "21/12/414212", 9013);
var qewem = new Student("Qewem Xanlarov", 765, "21/12/4121412", 9014);
