const myQuestions = [
  {
    que_no:1,
    question: "Lines of force is also called ",
    answers: {
      a: "flux",
      b: "current",
      c: "resistance",
      d: "flux density"  
    },
    correctAnswer: "a"
  },
  {
    que_no:2,
    question: "Lines of force passing per unit area is called",
    answers: {
      a: "magnetic field",
      b: "magnetic flux",
      c: "magnetic flux density",
      d: "magnetic field strength"
     
    },
    correctAnswer: "c"
  },
  {
    que_no:3,
    question: "Unit of flux is",
    answers: {
      a: "weber",
      b: "wb/m2",
      c: "Tesla",
      d: "AT"
      
      
    },
    correctAnswer: "a"
  },
  {
    que_no:4,
    question: " Unit of flux density is",
    answers: {
      a: "wb/m2",
      b: "wb",
      c: "AT/wb",
      d: "A"
      
    },
    correctAnswer: "a"
  },
  {
    que_no:5,
    question: "Opposition to the magnetic lines of force is  called ",
   
    answers: {
      a: "Flux",
      b: "resistance",
      c: "susceptance",
      d: "reluctance"
      
    },
    correctAnswer: "d"
  },
  {
    que_no:6,
    question:"Relative permeability of vacuum is",
    answers:{
      a: "4π × 10-7 H/m",
      b: "1 H/m",
      c: "1",
      d: "¼ H/m"
    },
    correctAnswer:'c'
  },
  {
    que_no:7,
    question:"MMF in magnetic circuit is analogous to ",
    answers:{
      a: "electric current in electric circuit",
      b: "current density in conductor",
      c: "electromotive force",
      d: "resistance in electric circuit"
      
    },
    correctAnswer:"c"
  },
  {
    que_no:8,
    question:"Reluctance is analogous to ",
    answers:{
      a: "emf in electric circuit",
      b: "resistivity",
      c: "conductivity",
      d: "resistance in electric circuit"
    },
    correctAnswer:"d"
  },
  {
    que_no:9,
    question:"In left hand rule, thumb always represents",
    answers:{
      a: "current",
      b: "voltage",
      c: "magnetic field",
      d: "direction of force on conductor"
      
    },
    correctAnswer:"d"
  },
  {
    que_no:10,
    question:"Unit of permeability is",
    answers:{
      a: "A/m",
      b: "H/m",
      c: "I/m",
      d: "m/H"
      
    },
    correctAnswer:'b'
  },
  {
    que_no:11,
    question:"Permeance is to reluctance as conductance is to",
    
    answers:{
      a: "inductance",
      b: "resistance",
      c: "capacitance",
      d: "ampere turns"
    },
    correctAnswer:"b"
  },
  {
    que_no:12,
    question:" Which of the following is magnetic material?",
    answers:{
      a: "copper",
      b: "silicon steel",
      c: "aluminium",
      d: "brass"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:13,
    question:" Flux in the air gap is called",
    answers:{
      a: "leakage flux",
      b: "total flux",
      c: "useful flux",
      d: "all of above"
    },
    correctAnswer:"c"
  },
  {
    que_no:14,
    question:"Reluctance of magnetic material is",
    answers:{
      a: "less than non magnetic material:",
      b: "more than non magnetic material:",
      c: "equal to that of non magnetic material:",
      d: "none of above:"
    },
    correctAnswer:"a"    
  },
  {
    que_no:15,
    question:"The denser the flux",
    answers:{
      a: "stronger is the magnetic field",
      b: "weaker is the magnetic flux",
      c: "no effect on the strength of field",
      d: "none of above"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:16,
    question:"The direction of induced e.m.f. is given by  ",
    answers:{
      a: "Flemings right hand rule",
      b: "Flemings left hand rule",
      c: "faradays law of electromagnetic induction",
      d: "crock screw rule."
      
    },
    correctAnswer:"a"
  },
  {
    que_no:17,
    question:"Co-efficient of self induction is also called",
    answers:{
      a: "self- induction",
      b: "Inductance",
      c: "Self- inductance",
      d: "Induction"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:18,
    question:" Expression NI/L is called",
    answers:{
      a: "MMF",
      b: "EMF",
      c: "Flux linkage",
      d: "Magnetic field strength"
      
    },
    correctAnswer:"d"
  },
  {
    que_no:19,
    question:"A dielectric material must be",
    answers:{
      a: "resistor",
      b: "Insulator",
      c: "Conductor",
      d: "Semiconductor"
      
    },
    correctAnswer:'b'
  },
  {
    que_no:20,
    question:'  The energy stored in capacitance is given ',
    answers:{
      a: "C2V",
      b: "CV2/2",
      c: "C2V/2",
      d: "CV"
    },
    correctAnswer:'b'
  },
  {
    que_no:21,
    question:" A capacitor consists of  ",   
    answers:{
      a: "two insulators separated by a conductor",
      b: "two conductor separated by a dielectric",
      c: "two insulators only",
      d: "two conductors only"
      
      
    },
    correctAnswer:"b"
  },
  {
    que_no:22,
    question:" 1 Volt /metre is same as",
    answers:{
      a: "1 metre/coulomb",
      b: "1 Newton metre",
      c: "1 Newton /Coulomb",
      d: "1 Joule /Coulomb"
      
   },
    correctAnswer:"c"
  },
  {
    que_no:23,
    question:"Joule / Coulomb is the unit of",
    answers:{
      a: "Electric field potential",
      b: "Potential",
      c: "charge",
      d: "none of the above"
    },
    correctAnswer:'b'
  },
  {
    que_no:24,
    question:"The form factor of a sine wave is",
    answers:{
      a:"1.01",
      b:"1.11",
      c:"1.21",
      d:" none of the above"
    },
    correctAnswer:"b"
  },
  {
    que_no:25,
    question:'__________will work only on dc supply.', 
    answers:{
      a: "electric lamp",
      b: "refrigerator",
      c: "electroplating",
      d: "heater"
      
    },
    correctAnswer:"c"
  },
  {
    que_no:26,
    question:"The area of a sinusoidal wave over a halfcycle is________",
    answers:{
      a: "𝑚𝑎𝑥. 𝑣𝑎𝑙𝑢𝑒 ÷ 2",
      b: "2 × 𝑚𝑎𝑥. 𝑣𝑎𝑙𝑢𝑒",
      c:  "𝑚𝑎𝑥. 𝑣𝑎𝑙𝑢𝑒 ÷ 𝜋",
      d: "𝑚𝑎𝑥. 𝑣𝑎𝑙𝑢𝑒 ÷ 2𝜋"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:27,
    question:"A100 V peak ac is as effective as_____dc.",
    answers:{
      a: "100 V",
      b: "50 V",
      c: "70.7 V",
      d: "none of the above"
      
    },
    correctAnswer:"c"
  },
  {
    que_no:28,
    question:"The form factor of a ________wave is 1.",
    answers:{
      a: "sinusoidal",
      b: "square",
      c: "triangular",
      d: "sawtooth"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:29,
    question:" RMS value of current I = 25 + j40 Amp is ",
    answers:{
      a: "57.99",
      b: "47.1699",
      c: "60",
      d: "30"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:30,
    question:"The sum of (3+j6) and (-3-j6) is",
    answers:{
      a:"0+j0",
      b:"6+j12",
      c:"-6-j12",
      d:" 0-j12"
       
  },
  correctAnswer:"a"
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