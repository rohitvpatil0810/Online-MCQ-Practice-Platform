const myQuestions = [
  {
    que_no:1,
    question: "The differential equation(1 + sin π¦)ππ₯ = (2π¦ cos π¦ β π₯ sec π¦ β π₯ tan π¦)ππ¦is",
    answers: {
      a: "Homogeneous",
      b: "Variable separable",
      c: "Linear in π₯",
      d: "None of these"  
    },
    correctAnswer: "d"
  },
  {
    que_no:2,
    question: "I.F. of D.E.(2π₯ log π₯ β π₯π¦)ππ¦ + (2π¦)ππ₯ = 0is",
    answers: {
      a: "1/x",
      b: "1/x^2y^2",
      c: "1/x^2",
      d: "1/y"
     
    },
    correctAnswer: "a"
  },
  {
    que_no:3,
    question: "The orthogonal trajectory of parabola is",
    answers: {
      a: "circle",
      b: "hyperbola",
      c: "ellipse",
      d: "straight line"
      
      
    },
    correctAnswer: "c"
  },
  {
    que_no:4,
    question: " Which one of the following is not correct?",
    answers: {
      a: "πΉ = ππ",
      b: "πΉ = πππ£/ππ‘",
      c: "πΉ = ππ£ππ£/ππ₯",
      d: "πΉ = ππ£ππ£/πt"
      
    },
    correctAnswer: "d"
  },
  {
    que_no:5,
    question: "A motion of a body or particle along straight line is known as",
   
    answers: {
      a: "rectilinear motion",
      b: "curvilinear motion",
      c: "motion",
      d: "None of these"
      
    },
    correctAnswer: "a"
  },
  {
    que_no:6,
    question:"The quantity of heat in a body is proportional to its",
    answers:{
      a: "mass only",
      b: "temperature only",
      c: "mass and temperature",
      d: "none of these"
    },
    correctAnswer:'c'
  },
  {
    que_no:7,
    question:"The orthogonal trajectories of the series of hyperbolas π₯π¦ = π2 is",
    answers:{
      a: "π₯2 + π¦2 = π2",
      b: "π₯2π¦2 = π2",
      c: "π¦2 β π₯2 = π2",
      d: "None of these"
      
    },
    correctAnswer:"c"
  },
  {
    que_no:8,
    question:"The orthogonal trajectories of the family of curves π cos π = π is",
    answers:{
      a: "π sin π = π",
      b: "π tan π = π",
      c: "π/sin π = π",
      d: "None of these"
    },
    correctAnswer:"a"
  },
  {
    que_no:9,
    question:"Voltage drop across inductance L is given by",
    answers:{
      a: "Li",
      b: "πΏππ/ππ‘",
      c: "ππΏ/ππ‘",
      d: "None of these"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:10,
    question:"The value of Ξ (1/3) Ξ (2/3) is",
    answers:{
      a: "2π/β3",
      b: "π/β3",
      c: "2π",
      d: "2/β3"
      
    },
    correctAnswer:'a'
  },
  {
    que_no:11,
    question:"The value of π΅(3,3) is",
      answers:{
      a: "30",
      b: "9",
      c: "1/30",
      d: "1/9"
    },
    correctAnswer:"c"
  },
  {
    que_no:12,
    question:"The value of π β π΅(π + 1, π) is",
    answers:{
      a: "π΅(π, π)",
      b: "π β π΅(π, π)",
      c: "π΅(ππ, ππ + 1)",
      d: "π β π΅(π, π + 1)"
      
    },
    correctAnswer:"d"
  },
  {
    que_no:13,
    question:"The value of erf (β) is",
    answers:{
      a: "0",
      b: "1",
      c: "β",
      d: "-1"
    },
    correctAnswer:"b"
  },
  {
    que_no:14,
    question:"The value of ππππ(π₯) + ππππ(βπ₯) is",
    answers:{
      a: "1",
      b: "2",
      c: "0",
      d: "-1"
    },
    correctAnswer:"b"    
  },
  {
    que_no:15,
    question:"The value of erf (ββ) is",
    answers:{
      a: "0",
      b: "1",
      c: "β",
      d: "-1"
      
    },
    correctAnswer:"d"
  },
  {
    que_no:16,
    question:"Error function is",
    answers:{
      a: "Even function",
      b: "Neither ever nor",
      c: "Odd function",
      d: "Constant function"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:17,
    question:"The value of ππππ(0) is",
    answers:{
      a: "0",
      b: "1",
      c: "-1",
      d: "β"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:18,
    question:"The value of πππ(β) + ππππ(ββ) is",
    answers:{
      a: "3",
      b: "2",
      c: "1",
      d: "0"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:19,
    question:"A point through which two branches of curve passes is called",
    answers:{
      a: "Double point",
      b: "Cusp",
      c: "Node",
      d: "Isolated point"
      
    },
    correctAnswer:'a'
  },
  {
    que_no:20,
    question:'The curve π₯π¦^2 = π^2(π β π₯) is symmetric about',
    answers:{
      a: "π₯ βaxis",
      b: "line π¦ = π₯",
      c: "π¦ βaxis",
      d: "line π¦ = βπ₯"
    },
    correctAnswer:'a'
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
      elem.innerHTML="β"
    }
    else{elem.innerHTML="β"}
  });
  review_next.onclick=()=>{
    if(que_count < (myQuestions.length-1)){
      que_count++;
      reviewquestion(que_count);
      document.querySelectorAll('.tick').forEach((elem)=>{
        if(elem.id==myQuestions[que_count].correctAnswer){
          elem.innerHTML="β"
        }
        else{elem.innerHTML="β"}
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
            elem.innerHTML="β"
          }
          else{elem.innerHTML="β"}
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
    que.innerHTML="β"+myQuestions[index].que_no+". "+myQuestions[index].question;
    option1.innerHTML=myQuestions[index].answers.a;
    option2.innerHTML=myQuestions[index].answers.b;
    option3.innerHTML=myQuestions[index].answers.c;
    option4.innerHTML=myQuestions[index].answers.d;
  }
  else{
    que.innerHTML="β"+myQuestions[index].que_no+". "+myQuestions[index].question;
    option1.innerHTML=myQuestions[index].answers.a;
    option2.innerHTML=myQuestions[index].answers.b;
    option3.innerHTML=myQuestions[index].answers.c;
    option4.innerHTML=myQuestions[index].answers.d;}
}