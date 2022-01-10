const myQuestions = [
  {
    que_no:1,
    question: "The differential equation(1 + sin 𝑦)𝑑𝑥 = (2𝑦 cos 𝑦 − 𝑥 sec 𝑦 − 𝑥 tan 𝑦)𝑑𝑦is",
    answers: {
      a: "Homogeneous",
      b: "Variable separable",
      c: "Linear in 𝑥",
      d: "None of these"  
    },
    correctAnswer: "d"
  },
  {
    que_no:2,
    question: "I.F. of D.E.(2𝑥 log 𝑥 − 𝑥𝑦)𝑑𝑦 + (2𝑦)𝑑𝑥 = 0is",
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
      a: "𝐹 = 𝑚𝑎",
      b: "𝐹 = 𝑚𝑑𝑣/𝑑𝑡",
      c: "𝐹 = 𝑚𝑣𝑑𝑣/𝑑𝑥",
      d: "𝐹 = 𝑚𝑣𝑑𝑣/𝑑t"
      
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
    question:"The orthogonal trajectories of the series of hyperbolas 𝑥𝑦 = 𝑐2 is",
    answers:{
      a: "𝑥2 + 𝑦2 = 𝑐2",
      b: "𝑥2𝑦2 = 𝑐2",
      c: "𝑦2 − 𝑥2 = 𝑐2",
      d: "None of these"
      
    },
    correctAnswer:"c"
  },
  {
    que_no:8,
    question:"The orthogonal trajectories of the family of curves 𝑟 cos 𝜃 = 𝑎 is",
    answers:{
      a: "𝑟 sin 𝜃 = 𝑐",
      b: "𝑟 tan 𝜃 = 𝑐",
      c: "𝑟/sin 𝜃 = 𝑐",
      d: "None of these"
    },
    correctAnswer:"a"
  },
  {
    que_no:9,
    question:"Voltage drop across inductance L is given by",
    answers:{
      a: "Li",
      b: "𝐿𝑑𝑖/𝑑𝑡",
      c: "𝑑𝐿/𝑑𝑡",
      d: "None of these"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:10,
    question:"The value of Γ (1/3) Γ (2/3) is",
    answers:{
      a: "2𝜋/√3",
      b: "𝜋/√3",
      c: "2𝜋",
      d: "2/√3"
      
    },
    correctAnswer:'a'
  },
  {
    que_no:11,
    question:"The value of 𝐵(3,3) is",
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
    question:"The value of 𝑛 ⋅ 𝐵(𝑚 + 1, 𝑛) is",
    answers:{
      a: "𝐵(𝑚, 𝑛)",
      b: "𝑚 ⋅ 𝐵(𝑚, 𝑛)",
      c: "𝐵(𝑚𝑚, 𝑛𝑛 + 1)",
      d: "𝑚 ⋅ 𝐵(𝑚, 𝑛 + 1)"
      
    },
    correctAnswer:"d"
  },
  {
    que_no:13,
    question:"The value of erf (∞) is",
    answers:{
      a: "0",
      b: "1",
      c: "∞",
      d: "-1"
    },
    correctAnswer:"b"
  },
  {
    que_no:14,
    question:"The value of 𝑒𝑟𝑓𝑐(𝑥) + 𝑒𝑟𝑓𝑐(−𝑥) is",
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
    question:"The value of erf (−∞) is",
    answers:{
      a: "0",
      b: "1",
      c: "∞",
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
    question:"The value of 𝑒𝑟𝑓𝑐(0) is",
    answers:{
      a: "0",
      b: "1",
      c: "-1",
      d: "∞"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:18,
    question:"The value of 𝑒𝑟𝑓(∞) + 𝑒𝑟𝑓𝑐(−∞) is",
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
    question:'The curve 𝑥𝑦^2 = 𝑎^2(𝑎 − 𝑥) is symmetric about',
    answers:{
      a: "𝑥 −axis",
      b: "line 𝑦 = 𝑥",
      c: "𝑦 −axis",
      d: "line 𝑦 = −𝑥"
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