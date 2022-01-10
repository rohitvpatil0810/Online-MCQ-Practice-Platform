const myQuestions = [
  {
    que_no:1,
    question: "The C.G. of a body is the point through which,",
    answers: {
      a: "Earth attracts",
      b: "resultant of external forces acts",
      c: "both (a) and (b)",
      d: "none of above"  
    },
    correctAnswer: "a"
  },
  {
    que_no:2,
    question: "Find the resultant of 130N at 30º W of S and 280N at 40° S of E",
    answers: {
      a: "329N at 63° N of E",
      b: "329N at 63° S of E",
      c: "329N at 63° S of W",
      d: "329N at 63° W of N"
     
    },
    correctAnswer: "b"
  },
  {
    que_no:3,
    question: "If a body is at rest, it implies that",
    answers: {
      a: "The forces acting on it are always zero",
      b: "The resultant of the forces acting on it are zero",
      c: "The moment of the forces acting on it are zero",
      d: "Both the resultant force and moment are zero"
      
      
    },
    correctAnswer: "d"
  },
  {
    que_no:4,
    question: "What is the formula of theorem of perpendicular axis",
    answers: {
      a: "Izz = Ixx – Iyy",
      b: "Izz = Ixx + Ah2",
      c: "Izz – Ixx = Iyy",
      d: "None of these"
      
    },
    correctAnswer: "c"
  },
  {
    que_no:5,
    question: "The moment of inertia of a rectangular section 3 cm wide and 4 cm deep about centroidal X-X axis is ",
   
    answers: {
      a: "9 𝑐𝑚4",
      b: "16 𝑐𝑚4",
      c: "12 𝑐𝑚4",
      d: "20 𝑐𝑚4"
      
    },
    correctAnswer: "b"
  },
  {
    que_no:6,
    question:"Find the Resultant of forces of 100 N and 150 N acting at a point, at an angle of 55º",
    answers:{
      a: "223N",
      b: "221.45N",
      c: "161.87N",
      d: "190.84N"
    },
    correctAnswer:'a'
  },
  {
    que_no:7,
    question:"The moment of inertia of any section about an axis passing through its C.G is",
    answers:{
      a: "Minimum",
      b: "Maximum",
      c: "Depends upon the dimensions of the section",
      d: "Depends upon the shape of the section"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:8,
    question:"Free body diagram is defined as an isolated diagram showing ",
    answers:{
      a: "Only external forces",
      b: "Only internal forces",
      c: "Both (a) and (b)",
      d: "None of the above"
    },
    correctAnswer:"a"
  },
  {
    que_no:9,
    question:"For roller support in general, which of the following statement is correct:",
    answers:{
      a: "unknown reaction is perpendicular to the plane of support",
      b: "unknown reaction is always vertical",
      c: "unknown reaction is always horizontal",
      d: "unknowns are horizontal and vertical reaction"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:10,
    question:"Pin or hinge support",
    answers:{
      a: "permits translation",
      b: "permits only rotation",
      c: "permits both translation and rotation",
      d: "permits neither translation nor rotation"
      
    },
    correctAnswer:'b'
  },
  {
    que_no:11,
    question:"Which of the following statement is correct for fixed support:",
    
    answers:{
      a: "permits neither rotation nor translation",
      b: "permits both rotation and translation",
      c: "permits only rotation",
      d: "permits only translation"
    },
    correctAnswer:"a"
  },
  {
    que_no:12,
    question:" For cantilever beam",
    answers:{
      a: "one support is hinged and other is roller",
      b: "one support is fixed and other end is free",
      c: "one support is fixed and other is roller",
      d: "both supports are fixed"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:13,
    question:" For simply supported beam, generally",
    answers:{
      a: "one support is hinged and other is roller",
      b: "one support is fixed and other end is free",
      c: "one support is fixed and other is roller",
      d: "both supports are fixed"
    },
    correctAnswer:"a"
  },
  {
    que_no:14,
    question:"A redundant frame is also called ______ frame",
    answers:{
      a: "Perfect",
      b: "Imperfect",
      c: "Deficient",
      d: "none of above:"
    },
    correctAnswer:"b"    
  },
  {
    que_no:15,
    question:"A framed structure of a triangular shape is",
    answers:{
      a: "Perfect",
      b: "Imperfect",
      c: "Deficient",
      d: "none of above:"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:16,
    question:"Redundant truss is a type of ______",
    answers:{
      a: "Perfect truss",
      b: "Imperfect truss",
      c: "Stable truss",
      d: "None."
      
    },
    correctAnswer:"b"
  },
  {
    que_no:17,
    question:"It is generally assumed that the cable is _______",
    answers:{
      a: "Perfectly flexible",
      b: "Perfectly inflexible",
      c: "Extensible",
      d: "Perfectly flexible and extensible"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:18,
    question:" Frame is the structure made up of",
    answers:{
      a: "Single force member",
      b: "Compression force members",
      c: "Tension force members",
      d: "Multi force members"
      
    },
    correctAnswer:"d"
  },
  {
    que_no:19,
    question:"In the truss every member is a",
    answers:{
      a: "Two force member",
      b: "Multi force member",
      c: "Either A or B",
      d: "None"
      
    },
    correctAnswer:'a'
  },
  {
    que_no:20,
    question:'The equation used to check the truss whether it is perfect or not is……',
    answers:{
      a: "m = 2j -3",
      b: "m = 2j + 3",
      c: "j = 2m - 3",
      d: "3 = 2j - m"
    },
    correctAnswer:'b'
  },
  {
    que_no:21,
    question:"In a cable the maximum tension is at",   
    answers:{
      a: "higher support",
      b: "lower support",
      c: "midpoint of cable",
      d: "None"
      
      
    },
    correctAnswer:"a"
  },
  {
    que_no:22,
    question:"The weight of a body is a",
    answers:{
      a: "body force",
      b: "surface force",
      c: "line force",
      d: "reactive force"
      
   },
    correctAnswer:"a"
  },
  {
    que_no:23,
    question:"An example for body force is",
    answers:{
      a: "contact force",
      b: "force of gravity",
      c: "tensile force",
      d: "support reaction"
    },
    correctAnswer:'b'
  },
  {
    que_no:24,
    question:"Collinear forces are those which",
    answers:{
      a:"are concurrent at a point",
      b:"are parallel to each other",
      c:"lie on the same line",
      d:"act in different planes"
    },
    correctAnswer:"c"
  },
  {
    que_no:25,
    question:'An example for surface force is', 
    answers:{
      a: "contact force",
      b: "force of gravity",
      c: "tensile force",
      d: "support reaction"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:26,
    question:"The unit of moment is",
    answers:{
      a: "N/m",
      b: "N.s",
      c:  "N.m",
      d: "N/m²"
      
    },
    correctAnswer:"c"
  },
  {
    que_no:27,
    question:"Moment of a couple is a.",
    answers:{
      a: "free vector",
      b: "fixed vectorV",
      c: "sliding vector",
      d: "null vector"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:28,
    question:"The unit of moment of inertia of an area",
    answers:{
      a: "kg/m",
      b: "kg/m2",
      c: "m4",
      d: "m3"
      
    },
    correctAnswer:"c"
  },
  {
    que_no:29,
    question:"The unit of inertia of mass",
    answers:{
      a: "kg/m",
      b: "kgm2",
      c: "m4",
      d: "m3"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:30,
    question:"The polar moment of inertia of a circular section is about",
    answers:{
      a:"X-X axis",
      b:"Y-Y axis",
      c:"Z-Z axis",
      d:"Neutral axis"
       
  },
  correctAnswer:"c"
  }
];
  
// Declaration of DOM Elements 
let que=document.querySelector(".question");
let option1=document.querySelector(".option1");
let option2=document.querySelector(".option2");
let option3=document.querySelector(".option3");
let option4=document.querySelector(".option4");
let que_nav=document.querySelector(".quenav");
let next=document.querySelector("#next");
let later=document.querySelector("#later");
let previous=document.querySelector("#prev");
// let ans1=document.querySelector("#ans1");
// let ans2=document.querySelector("#ans2");
// let ans3=document.querySelector("#ans3");
// let ans4=document.querySelector("#ans4");
let question_container=document.querySelector(".que");
let submit=document.querySelector("#submit");
let score=document.querySelector(".score");
let review=document.querySelector(".review");
let display_score=document.querySelector(".display_score");
let review_quenav=document.querySelector('.reviewquenav');
let rtnhome=document.querySelector('.rtnhome');
let review_previous=document.querySelector("#rwprev");
let review_next=document.querySelector("#rwnext");
// variables intialisation 
que_count = 0;
que_numb = 1;
userScore = 0;
useranswer=[];
loadquestion(que_count);
// Check the useranswer 
document.querySelectorAll('input[name="ans"]').forEach((elem) => {
  elem.addEventListener("change", function(event) {
    var item = event.target.value;
    useranswer.splice(que_count,1,item);

      if(useranswer[que_count]==undefined){
      let flag=1;
      for(i=que_count;i>=0;i--)
      {
        if(useranswer[i]!=undefined){
          for(j=i;j<que_count;j++){
            useranswer.splice(j,1,0);
          }
          break;
        }
        
      }
      useranswer.splice(que_count,1,item);
      }   
    console.log(useranswer[que_count]);
    console.log(useranswer)
  });
});
next.onclick= () =>{
  if(que_count < (myQuestions.length-1)){
    que_count++;
    loadquestion(que_count);
    document.querySelectorAll('input[name="ans"]:checked').forEach((elem) => {
      var radio = document.querySelector('input[type=radio][name=ans]:checked');
      radio.checked = false;
    });
    document.querySelectorAll('input[name="ans"]').forEach((elem) => {
      if(elem.value==useranswer[que_count])
      {
        elem.checked=true;
      }
    });
  }
  else{
    alert("This is the last Question")
  }
  console.log(useranswer);
}
function loadquestion(index){
  que.innerHTML=myQuestions[index].que_no+". "+myQuestions[index].question;
  option1.innerHTML=myQuestions[index].answers.a;
  option2.innerHTML=myQuestions[index].answers.b;
  option3.innerHTML=myQuestions[index].answers.c;
  option4.innerHTML=myQuestions[index].answers.d;
}
submit.onclick= () =>{
  alert("Do you really want to submit?");
  for(let i=0;i<useranswer.length;i++){
    if(useranswer[i]==myQuestions[i].correctAnswer){
      userScore=userScore+1;
    }
    else{
      userScore=userScore+0;
    }
  }
  console.log(useranswer);
  console.log(userScore);
  question_container.classList.add("none");
  que_nav.classList.add("none");
  document.getElementById("score").innerHTML=userScore;
  document.getElementById("total").innerHTML=myQuestions.length;
  score.classList.remove("none");
  score.classList.add("que");
  submit.classList.add("none");
}
previous.onclick= () =>{
  if(que_count >0){
    que_count--;
    loadquestion(que_count); 
      document.querySelectorAll('input[name="ans"]').forEach((elem) => {
      if(elem.value==useranswer[que_count])
      {
        elem.checked=true;
      }
      else if(useranswer[que_count]==0){
        elem.checked=false;
      }
    });
  }
  else{
    alert("This is the first Question")
  }
  console.log(useranswer);
}
review.onclick= () =>{
  question_container.classList.remove("none");
  review_quenav.classList.remove("none");
  rtnhome.classList.remove("none");
  score.classList.add("none");
  reviewfunction();
}
// Review Functions
function reviewfunction(){
  let que_count=0;
  reviewquestion(que_count);
  document.querySelectorAll('input[name="ans"]').forEach((elem) => {
    if(elem.value==useranswer[que_count])
    {
      elem.checked=true;
    }
    else if(useranswer[que_count]==0 || useranswer[que_count]==undefined){
      elem.checked=false;
    }
  });
  document.querySelectorAll('.tick').forEach((elem)=>{
    if(elem.id==myQuestions[que_count].correctAnswer){
      elem.innerHTML="✅"
    }
    else{elem.innerHTML="❌"}
  });
  review_next.onclick=()=>{
    if(que_count < (myQuestions.length-1)){
      que_count++;
      reviewquestion(que_count);
      document.querySelectorAll('.tick').forEach((elem)=>{
        if(elem.id==myQuestions[que_count].correctAnswer){
          elem.innerHTML="✅"
        }
        else{elem.innerHTML="❌"}
      });
      document.querySelectorAll('input[name="ans"]').forEach((elem) => {
        if(elem.value==useranswer[que_count])
        {
          elem.checked=true;
        }
        else if(useranswer[que_count]==0 || useranswer[que_count]==undefined){
          elem.checked=false;
        }
      });
    }
    else{
      alert("This is the last Question")
    }
    console.log(useranswer);
  }
  review_previous.onclick= () =>{
    if(que_count >0){
      que_count--;
      reviewquestion(que_count); 
        document.querySelectorAll('.tick').forEach((elem)=>{
          if(elem.id==myQuestions[que_count].correctAnswer){
            elem.innerHTML="✅"
          }
          else{elem.innerHTML="❌"}
        });
        document.querySelectorAll('input[name="ans"]').forEach((elem) => {
        if(elem.value==useranswer[que_count])
        {
          elem.checked=true;
        }
        else if(useranswer[que_count]==0 || useranswer[que_count]==undefined){
          elem.checked=false;
        }
      });
    }
    else{
      alert("This is the first Question")
    }
    console.log(useranswer);
  }
}
// question loading function in review section 
function reviewquestion(index){
  if(useranswer[index]==myQuestions[index].correctAnswer){
    que.innerHTML="✅"+myQuestions[index].que_no+". "+myQuestions[index].question;
    option1.innerHTML=myQuestions[index].answers.a;
    option2.innerHTML=myQuestions[index].answers.b;
    option3.innerHTML=myQuestions[index].answers.c;
    option4.innerHTML=myQuestions[index].answers.d;
  }
  else{
    que.innerHTML="❌"+myQuestions[index].que_no+". "+myQuestions[index].question;
    option1.innerHTML=myQuestions[index].answers.a;
    option2.innerHTML=myQuestions[index].answers.b;
    option3.innerHTML=myQuestions[index].answers.c;
    option4.innerHTML=myQuestions[index].answers.d;}
}