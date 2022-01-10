const myQuestions = [
  {
    que_no:1,
    question: " Which kind of turbines changes the pressure of the water entered through it ",
    answers: {
      a: "Reaction turbines",
      b: "Reactive turbines",
      c: "Impulse turbines",
      d: "Kinetic turbines"
    },
    correctAnswer: "a"
  },
  {
    que_no:2,
    question: "Reciprocating pump is a",
    answers: {
      a: "Negative displacement pump ",
      b: "Positive displacement pump",
      c: "Diaphragm pump",
      d: "Emulsion pump"
     
    },
    correctAnswer: "b"
  },
  {
    que_no:3,
    question: "Which of the following represents net work done in case of thermal power plant?",
    answers: {
      a: "Turbine Work only ",
      b: "(Turbine Work – Pump Work)",
      c: "(Turbine Work + Pump Work)",
      d: "None of the above"
    },
    correctAnswer: "b"
  },
  {
    que_no:4,
    question: " The function of a surge tank in hydro power plant is",
    answers: {
      a: "To supply water at constant pressure",
      b: "To produce surges in the penstock",
      c: "To relieve water hammer pressures in the penstock",
      d: "All of the above"
      
    },
    correctAnswer: "c"
  },
  {
    que_no:5,
    question: " What do you call the partition in a bucket of Pelton wheel",
    answers: {
      a: "Glider",
      b: "Splitter",
      c: "Divider",
      d: "Jet Cuter"
    },
    correctAnswer: "b"
  },
  {
    que_no:6,
    question:"Which kind geothermal plant is most common type? ",
    answers:{
      a: "Dry steam",
      b: "Flash",
      c: "Binary",
      d: "Wet steam"
    },
    correctAnswer:'b'
  },
  {
    que_no:7,
    question:"In case of tidal power plants water to the turbine is allowed through the ",
    answers:{
      a: "Pipes",
      b: "Sluice gates",
      c: "Canals",
      d: "Pumps"
    },
    correctAnswer:"b"
  },
  {
    que_no:8,
    question:"Compression Ratio for diesel engine is ",
    answers:{
      a: "5-11",
      b: "14-21",
      c: "23-27",
      d: "6-10"
    },
    correctAnswer:"b"
  },
  {
    que_no:9,
    question:"If heat supplied to the system is Q1 and heat rejected from the system Q2 is zero, then",
    answers:{
      a: "Net-work done = Q1 and efficiency=1.00",
      b: "heat is exchanged only with one reservoir",
      c: "it violates the Kelvin-Planck statement",
      d: "All of the above"    
    },
    correctAnswer:"d"
  },
  {
    que_no:10,
    question:"Heat reservoir that supplies heat to the system is called",
    answers:{
      a: "Heat sink",
      b: "Heat source",
      c: "Heat engine",
      d: "Heat pump"
    },
    correctAnswer:'b'
  },
  {
    que_no:11,
    question:"System that convert heat into work is",
    answers:{
      a: "Heat engine",
      b: "Heat pump",
      c: "Refrigerator.",
      d: "Boiler"
    },
    correctAnswer:"a"
  },
  {
    que_no:12,
    question:"According to first law of thermodynamics ",
    answers:{
      a: "Work is directly proportional to heat",
      b: "Heat is inversely proportional to work",
      c: "Heat and work are independent",
      d: "None of the above"
    },
    correctAnswer:"a"
  },
  {
    que_no:13,
    question:"Efficiency of heat engine is ",
    answers:{
      a: "Q1/W",
      b: "Q1-Q2/Q1",
      c: "W/Q1",
      d: "Both B &C"
    },
    correctAnswer:"d"
  },
  {
    que_no:14,
    question:"According to first law of thermodynamics   ",
    answers:{
      a: "mass and energy are mutually convertible",
      b: "Carnot engine is most efficient",
      c: "heat and work are mutually convertible",
      d: "mass and light are mutually convertible"
      
    },
    correctAnswer:"c"    
  },
  {
    que_no:15,
    question:"Coefficient of performance(COP) is defined as  ",
    answers:{
      a: "heat leakage/work input",
      b: "work input/heat leakage",
      c: "latent heat of condensation/work input",
      d:" work input/latent heat of condensation"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:16,
    question:"Kelvin-Planck’s and Clausius’ statements are",
    answers:{
      a: "not connected to each other",
      b: "statements of second law",
      c: "violation of one doesn’t violate the other",
      d: "none of the mentioned"
    },
    correctAnswer:"b"
  },
  {
    que_no:17,
    question:"A heat pump,",   
    answers:{
      a: "extracts energy at low temperature heat source",
      b: "gives energy to high temperature heat source",
      c: "both of the mentioned",
      d: "none of the mentioned"
      
    },
    correctAnswer:"c"
  },
  {
    que_no:18,
    question:"By first law of thermodynamics,  ",
    answers:{
      a: "Q=ΔE-W",
      b: "Q=ΔE+W",
      c: "Q=-ΔE-W",
      d: "Q=-ΔE+W"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:19,
    question:"In which phase of a substance does conduction mode of heat transfer take place?",
    answers:{
      a: "solid",
      b: "liquid",
      c: "gaseous",
      d: "all of the above"
      
    },
    correctAnswer:'d'
  },
  {
    que_no:20,
    question:' Mass transfer does not take place in  ',
    answers:{
      a: "conduction heat transfer",
      b: "convection heat transfer",
      c: "radiation heat transfer",
      d: "none of the above"
    },
    correctAnswer:'c'
  },
  {
    que_no:21,
    question:"Radiations in a black body are  ",   
    answers:{
      a: "Reflected",
      b: "Transmitted",
      c: "absorbed ",
      d: "none"
    },
    correctAnswer:"c"
  },
  {
    que_no:22,
    question:"The Stefan Boltzman law states that ",
    answers:{
      a: "E α T",
      b: "E α T2",
      c: "E α T3",
      d: "E α T4"
   },
    correctAnswer:"d"
  },
  {
    que_no:23,
    question:"The body which absorbs all radiations incident upon it, is called as ",
    answers:{
      a: "Black body",
      b: "White body",
      c: "Opaque body",
      d: "Transparent body"
    },
    correctAnswer:'a'
  },
  {
    que_no:24,
    question:"Units for thermal conductivity ",
    answers:{
      a:   "J/kg.K",
      b:  "J/mol.K",
      c: "J.ohm/sec.K2",
      d: "W/m.K "
    },
    correctAnswer:"d"
  },
  {
    que_no:25,
    question:'... Of any surface is defined as energy emitted by surface per unit area per unit time ', 
    answers:{
      a: "Conduction",
      b: "Convection",
      c: "Radiation",
      d: "none"
    },
    correctAnswer:"b"
  },
  {
    que_no:26,
    question:"Unit of the rate of heat transfer is ",
    answers:{
      a: "Joule",
      b: "Newton",
      c: "Pascal",
      d: "Watt "
    },
    correctAnswer:"d"
  },
  {
    que_no:27,
    question:"In four stroke petrol engine during the suction stroke",
    answers:{
      a: "Only air is sucked",
      b: "Mixture of fuel and air is sucked",
      c: "Only fuel is sucked",
      d: "None of the these"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:28,
    question:"Following is an SI engine",
    answers:{
      a: "Petrol engine",
      b: "Diesel engine",
      c: "Gas engine",
      d: "None of the above"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:29,
    question:"Petrol engine is ",
    answers:{
      a: "Compression ignition engine",
      b: "Spark ignition engine",
      c: "Mixed ignition engine",
      d: "All of the above"
    },
    correctAnswer:"b"
  },
  {
    que_no:30,
    question:"Carburetor is used for",
    answers:{
      a: "S.I. engine",
      b: "Gas engine",
      c: "C.I. engine",
      d: "None of the above"       
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