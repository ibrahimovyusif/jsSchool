function Person(name){
	this.name = name;
}


var school = {

	schoolNumber: 157,
	address:  "Baku, Chernyakhovsi, 76a",
    getInfo: function(){
    	return this.schoolNumber + " " + this.address;
    }

}


console.log("yduasasb " + school.address);

function Teacher(name, surname){
   this.name = name;
   this.surname = surname;
   this.getInfo = getTeacherInfo;

}
function getTeacherInfo(){
	return this.name + " "+ this.surname +" " + this.phoneNumber;
}
var teacher1 = new Teacher("Yusif","Ibrahimov");
console.log("teah" ); 

var Student = function(idNum){
	this.idNum = idNum;
	this.name = name;
	this.surname = surname;
 	}


var student1 = new Student(123);
var student2 = new Student(234);