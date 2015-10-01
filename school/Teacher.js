var Student = require('./Student');
var Lesson = require('./Lesson')


var Teacher = function(name, dateOfBirth, ID, subject, serialNumber){
	this.name = name;
	this.dateOfBirth = dateOfBirth;
	this.ID = ID;
	this.subject = subject;
	this.serialNumber = serialNumber;
	this.teacher = function(){
		return this.serialNumber;
	}
	this.lessons = [];
	this.teach = function(daysOfWeek, subject, teacher, student, number, hours){
    var lesson = new Lesson(daysOfWeek, subject, teacher, student, number, hours);
    this.lessons.push(lesson);
	}

}

var niyameddin = new Teacher("Niyameddin Abb", "21/03/1234", 123, "Math", 12345);
var elovset = new    Teacher("Elovset Abb", "21/03/23", 124, "Literature", 1234);
var hikmet = new     Teacher("Hikmet Abb", "21/03/31", 125, "Music", 123456);
