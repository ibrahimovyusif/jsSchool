var Lesson = function(daysOfWeek, subject, teacher, student, number, hours){
	this.daysOfWeek = daysOfWeek;
	this.subject = subject;
	this.teacher = teacher;
	this.student = student;
	this.number = number;
	this.hours = hours;
	
	this.lesson = function(){
		return this.number;
	}
}
var math = new Lesson(3, "Math", 12345, 9012, 3030, 4);
var music = new Lesson(3, "Music", 12345, 9012, 3030, 4);
var literature = new Lesson(3, "Literature", 12345, 9012, 3030, 4);