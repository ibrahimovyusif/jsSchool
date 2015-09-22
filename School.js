var Student = require('./Student');
var Teacher = require('./Teacher');
var Lesson = require('./Lesson')


var School = function(number){
	this.number = number;
	this.students = [];
	this.registerStudent = function(name, ID, dateOfBirth, serialNumber){
		var student = new Student(name, ID, dateOfBirth, serialNumber);
		this.students.push(student);
		return "Registered!!";
	}

    this.teachers = [];
	this.registerTeacher = function(name, dateOfBirth, ID, subject, serialNumber){
		var teacher = new Teacher(name, ID, dateOfBirth, serialNumber);
		this.teachers.push(teacher);
	}

	this.lessons = [];
	this.createLesson = function(daysOfWeek, subject, teacher, student, number, hours){
      var lesson = new Lesson(daysOfWeek, subject, teacher, student, number, hours);
      this.lessons.push(lesson);
	}
}
