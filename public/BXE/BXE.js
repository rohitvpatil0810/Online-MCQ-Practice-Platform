const myQuestions = [
  {
    que_no:1,
    question: "Barrier potential for silicon diode ",
    answers: {
      a: "0.3",
      b: "0.4",
      c: "0.7",
      d: "0.1"  
    },
    correctAnswer: "c"
  },
  {
    que_no:2,
    question: "A reverse-biased diode acts",
    answers: {
      a: "open switch",
      b: "closed switch",
      c: "small resistance",
      d: "none of the above"
     
    },
    correctAnswer: "a"
  },
  {
    que_no:3,
    question: "Diffusion current in the diode is caused by",
    answers: {
      a: "Chemical energy",
      b: "heat energy",
      c: "voltage",
      d: "crystal formation"
    },
    correctAnswer: "a"
  },
  {
    que_no:4,
    question: "Depletion region in a pn diode is due to",
    answers: {
      a: "reverse biasing",
      b: "forward biasing",
      c: "an area created by crystal doping",
      d: "an area void of current carriers"
      
    },
    correctAnswer: "a"
  },
  {
    que_no:5,
    question: "When a diode is forward biased",
   
    answers: {
      a: "Barrier potential increases",
      b: "Barrier potential decreases",
      c: "Majority current reduces",
      d: "Minority current reduces"
      
    },
    correctAnswer: "b"
  },
  {
    que_no:6,
    question:"The p-n junction forms device called",
    answers:{
      a: "Triac",
      b: "Diode",
      c: "multiplexer",
      d: "Semiconductor"
    },
    correctAnswer:'b'
  },
  {
    que_no:7,
    question:"In diode reverse current is due to",
    answers:{
      a: "Mobile donor ions",
      b: "Mobile acceptor ions",
      c: "minority carriers",
      d: "majority carriers"
      
    },
    correctAnswer:"c"
  },
  {
    que_no:8,
    question:"The ideal value of forward resistance of diode is",
    answers:{
      a: "high",
      b: "infinite",
      c: "zero",
      d: "very low"
    },
    correctAnswer:"c"
  },
  {
    que_no:9,
    question:"Rectifier converts",
    answers:{
      a: "a.c. voltage to d.c.voltage",
      b: "a.c voltage to pulsating d.c voltage",
      c: "d.c voltage to a.c. voltage",
      d: "a.c voltage to a.c voltage"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:10,
    question:"Efficiency of half wave rectifier is",
    answers:{
      a: "81.20%",
      b: "40.60%",
      c: "45.6%",
      d: "82.10%"
      
    },
    correctAnswer:'b'
  },
  {
    que_no:11,
    question:"No. of diodes used in full wave rectifier is",
    
    answers:{
      a: "1",
      b: "2",
      c: "3",
      d: "4"
    },
    correctAnswer:"b"
  },
  {
    que_no:12,
    question:"Ripple factor of full wave rectifier is",
    answers:{
      a: "0.122",
      b: "0.4",
      c: "0.48",
      d: "0.05"
      
    },
    correctAnswer:"c"
  },
  {
    que_no:13,
    question:"Efficiency of bridge rectifier is",
    answers:{
      a: "81.20%",
      b: "40.60%",
      c: "45.6%",
      d: "82.10%"
    },
    correctAnswer:"a"
  },
  {
    que_no:14,
    question:"PIV rating of diode in a bridge rectifier is",
    answers:{
      a: "Vm",
      b: "2Vm",
      c: "Vm/2",
      d: "none of above:"
    },
    correctAnswer:"a"    
  },
  {
    que_no:15,
    question:"The voltage out of a bridge rectifier is a",
    answers:{
      a: "half wave signal",
      b: "full wave signal",
      c: "bridge rectified signal",
      d: "sine wave"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:16,
    question:"Transistor is a ----- terminal device.",
    answers:{
      a: "Two",
      b: "Three",
      c: "Four",
      d: "Both A and B"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:17,
    question:"The three terminals of transistor are:",
    answers:{
      a: "Gate, collector and emitter",
      b: "Collector, base and source",
      c: "Base, collector and emitter",
      d: "Base, gate and collector"
      
    },
    correctAnswer:"c"
  },
  {
    que_no:18,
    question:"BJT is a ---- device",
    answers:{
      a: "unipolar",
      b: "bipolar",
      c: "multipolar",
      d: "both b and c"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:19,
    question:"In bipolar transistor, the current is due to",
    answers:{
      a: "holes",
      b: "electrons",
      c: "both holes and electrons",
      d: "none of the above"
      
    },
    correctAnswer:'c'
  },
  {
    que_no:20,
    question:'The types of bipolar junction transistors are',
    answers:{
      a: "ppn,npn",
      b: "pnp, npn",
      c: "npp, ppn",
      d: "nnp, pnp"
    },
    correctAnswer:'b'
  },
  {
    que_no:21,
    question:"The middle region of a transistor is called",   
    answers:{
      a: "base",
      b: "collector",
      c: "emitter",
      d: "none of the above"
      
      
    },
    correctAnswer:"a"
  },
  {
    que_no:22,
    question:"No. of depletion layers in a transistor are",
    answers:{
      a: "two",
      b: "three",
      c: "four",
      d: "none of the above"
      
   },
    correctAnswer:"a"
  },
  {
    que_no:23,
    question:"In a transistor",
    answers:{
      a: "IB=IC+IB",
      b: "IC=IE+IB",
      c: "IE=IC+IB",
      d: "IE=IC-IB"
    },
    correctAnswer:'c'
  },
  {
    que_no:24,
    question:"The value of alpha of a transistor is",
    answers:{
      a:"0",
      b:"1",
      c:"more than 1",
      d:"less than 1"
    },
    correctAnswer:"d"
  },
  {
    que_no:25,
    question:'A circuit with a fixed emitter current is called', 
    answers:{
      a: "base bias",
      b: "emitter bias",
      c: "transistor bias",
      d: "two supply bias"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:26,
    question:"If the collector resistor is open, the collector voltage is",
    answers:{
      a: "low",
      b: "high",
      c:  "unchanged",
      d: "unknown"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:27,
    question:"Transistor is used as a switch in",
    answers:{
      a: "an amplifier",
      b: "logic gate",
      c: "linear DC power supply",
      d: "none of the above"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:28,
    question:"Current gain in CB configuration is",
    answers:{
      a: "unity",
      b: "less than unity",
      c: "greater than unity",
      d: "not any above"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:29,
    question:" In saturation region the collector current ",
    answers:{
      a: "is independent of IB",
      b: "is proportional to IB",
      c: "is equal to IB",
      d: "none of the above"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:30,
    question:"For CE amplifier, ac input is applied to",
    answers:{
      a:"emitter",
      b:"base",
      c:"collector",
      d:"none of the above"
       
  },
  correctAnswer:"b"
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