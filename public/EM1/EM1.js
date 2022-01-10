const myQuestions = [
  {
    que_no:1,
    question: "Rolle’s theorem is a special case of ……",
    answers: {
      a: "Cauchy’s mean value",
      b: "Lagrange’s theorem",
      c: "Taylor’s theorem",
      d: "None of these"  
    },
    correctAnswer: "b"
  },
  {
    que_no:2,
    question: "Lagrange’s mean value theorem is a special case of….",
    answers: {
      a: "Rolle’s theorem",
      b: "Taylor’s theorem",
      c: "Cauchy’s mean value",
      d: "None of these"
     
    },
    correctAnswer: "c"
  },
  {
    que_no:3,
    question: "If f(a) = f(b) in Lagrange’s mean value theorem , then it becomes",
    answers: {
      a: "Leibnitz’s theorem",
      b: "Rolle’s theorem",
      c: "Taylor’s theorem",
      d: "Cauchy’s mean value theorem"
      
      
    },
    correctAnswer: "b"
  },
  {
    que_no:4,
    question: "Mean value theorem is also known as…",
    answers: {
      a: "Rolle’s theorem",
      b: "Lagrange’s theorem",
      c: "Taylor’s expansion",
      d: "Leibnitz’s theorem"
      
    },
    correctAnswer: "b"
  },
  {
    que_no:5,
    question: "First two terms in expansion of exsecx by Maclaurin’s theorem is",
   
    answers: {
      a: "x+x2+..",
      b: "x−x2+..",
      c: "1+x+..",
      d: "1−x+.."
      
    },
    correctAnswer: "c"
  },
  {
    que_no:6,
    question:"4. Fundamental period of sin2𝑥 is",
    answers:{
      a: "𝝅/𝟒",
      b: "𝝅/2",
      c: "2𝝅",
      d: "𝝅"
    },
    correctAnswer:'c'
  },
  {
    que_no:7,
    question:"5. Fundamental period of cos2𝑥 is",
    answers:{
      a: "𝝅/𝟒",
      b: "𝝅/2",
      c: "𝝅",
      d: "2𝝅"
      
    },
    correctAnswer:"c"
  },
  {
    que_no:8,
    question:"6. Fundamental period of tan3𝑥 is",
    answers:{
      a: "𝝅/2",
      b: "𝝅/3",
      c: "𝝅",
      d: "𝝅/4"
    },
    correctAnswer:"d"
  },
  {
    que_no:9,
    question:"1. A function 𝑓(𝑥) is said to be periodic of T if",
    answers:{
      a: "𝑓(𝑥+𝑇)=𝑓(𝑥) 𝑓𝑜𝑟 𝑎𝑙𝑙 𝑥",
      b: "𝑓(𝑥+𝑇)=𝑓(𝑇) 𝑓𝑜𝑟 𝑎𝑙𝑙 𝑥",
      c: "𝑓(−𝑥)=𝑓(𝑥) 𝑓𝑜𝑟 𝑎𝑙𝑙 𝑥",
      d: "𝑓(−𝑥)=−𝑓(𝑥) 𝑓𝑜𝑟 𝑎𝑙𝑙 𝑥"
      
    },
    correctAnswer:"d"
  },
  {
    que_no:10,
    question:"A function 𝑓(𝑥) is said to be even if",
    answers:{
      a: "𝑓(−𝑥)=𝑓(𝑥)",
      b: "𝑓(−𝑥)=−𝑓(𝑥)",
      c: "𝑓(𝑥+2𝜋)=𝑓(𝑥)",
      d: "𝑓(−𝑥)=[𝑓(𝑥)]2"
      
    },
    correctAnswer:'a'
  },
  {
    que_no:11,
    question:" A function 𝑓(𝑥) is said to be odd if",
    
    answers:{
      a: "𝑓(−𝑥)=𝑓(𝑥)",
      b: "𝑓(−𝑥)=−𝑓(𝑥)",
      c: "𝑓(𝑥+2𝜋)=𝑓(𝑥)",
      d: "𝑓(−𝑥)=[𝑓(𝑥)]2"
    },
    correctAnswer:"b"
  },
  {
    que_no:12,
    question:"In Harmonic analysis the term a1cosx+b1sinx is called",
    answers:{
      a: "Second harmonic",
      b: "first harmonic",
      c: "third harmonic",
      d: "none of this"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:13,
    question:"Which of the following is an odd function?",
    answers:{
      a: "sin𝑥",
      b: "𝑒^𝑥+𝑒^−𝑥",
      c: "𝑒^|𝑥|",
      d: "𝜋^2− 𝑥^2"
    },
    correctAnswer:"a"
  },
  {
    que_no:14,
    question:"Which of the following is even function?",
    answers:{
      a: "sin𝑥",
      b: "𝑒^𝑥-𝑒^−𝑥",
      c: "xcos𝑥",
      d: "cos𝑥"
    },
    correctAnswer:"d"    
  },
  {
    que_no:15,
    question:"Which of the following is neither an even function nor an odd function?",
    answers:{
      a: "x sin𝑥",
      b: "𝑥^2",
      c: "𝑒^−𝑥",
      d: "𝑥 cos𝑥"
      
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