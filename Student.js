var studentName = [];
var studentEmail = [];
var studentAge = [];
var count = 0;

 function registerStudent(){


prompt = require('prompt-input')(/* options */)
 
prompt({ name1: 'Your name:', email: 'Your email:', age: 'Your age:'}, function (answers) {
 
  //var stName = answers
  // => john 
  studentName.push(answers.name1);
 // console.log(studentName);
  studentEmail.push(answers.email);
   // console.log(studentEmail);
  studentAge.push(answers.age)
  //  console.log(studentAge);

  moreStudents();

})
}
registerStudent();


function moreStudents(){
//prompt = require('prompt-input')(/* options */)
 

   prompt({ elave: 'add more?'}, function (addMore) {
 
  console.log(addMore.elave);
  var wtaks = addMore.elave;
  console.log(wtaks.toString().charCodeAt(0));

   if(wtaks.toString().charCodeAt(0) === 121)
   {
   	 console.log("2368734658734");
    registerStudent();
   }
   else
   	 printOut();
 
})
}


function printOut(){
  for(var i = 0; i<studentName.length;i++)
  {
    console.log(studentName);
    console.log(studentEmail);
    console.log(studentAge);
  }
}