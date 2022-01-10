const myQuestions = [
  {
    que_no:1,
    question: "Which of the following is the antireflective material",
    answers: {
      a: "MgO2",
      b: "MgF2",
      c: "Cr2O3",
      d: "None of these"
    },
    correctAnswer: "b"
  },
  {
    que_no:2,
    question: "Nature of interference pattern in wedge shaped film is",
    answers: {
      a: "Circular and equally spaced",
      b: "Circular",
      c: "Straight and equally spaced",
      d: "None of these"
    },
    correctAnswer: "c"
  },
  {
    que_no:3,
    question: "Lenses are required to form and observe the diffraction pattern in---",
    answers: {
      a: "Frensel",
      b: "Fraunhofer",
      c: "Both",
      d: "None of these"
    },
    correctAnswer: "b"
  },
  {
    que_no:4,
    question: "The Resolving power is ---------",
    answers: {
      a: "Equal to limit of Resolution",
      b: "Reciprocal to the limit of Resolution",
      c: "Square of limit of resolution",
      d: "Both B & C"
    },
    correctAnswer: "b"
  },
  {
    que_no:5,
    question: "Optic axis is -----",
    answers: {
      a: "An imaginary line inside the crystal",
      b: "A real line inside the crystal",
      c: "A direction inside the crystal",
      d: "none of the above"
    },
    correctAnswer: "c"
  },
  {
    que_no:6,
    question:"During the interference of light energy is",
    answers:{
      a: "Created at maxima",
      b: "Destroyed at the minima",
      c: "Not conserved",
      d: "Redistributed "      
    },
    correctAnswer:'d'
  },
  {
    que_no:7,
    question:"Intensity of light depends upon",
    answers:{
      a:  "Wavelength",
      b:  "Amplitude",
      c:  "Frequency",
      d:  "Velocity"       
    },
    correctAnswer:"b"
  },
  {
    que_no:8,
    question:" In an interference pattern energy is",
    answers:{
      a: "Created at position of maxima",
      b: "Destroyed at position of maxima",
      c: "Conserved but redistributed",
      d: "Not conserved"
    },
    correctAnswer:"c"
  },
  {
    que_no:9,
    question:"When interference takes place",
    answers:{
      a: "Only maxima is produced",
      b: "Only minima is produced",
      c: "Maxima and Minima is not produced",
      d: "None of the above"
       
    },
    correctAnswer:"d"
  },
  {
    que_no:10,
    question:" The thin film interference is based on",
    answers:{
      a: "Division of wavelength",
      b: "Division of wavefront",
      c: "Division of intensity",
      d: "None of the above"       
    },
    correctAnswer:'c'
  },
  {
    que_no:11,
    question:"In case of population inversion",
    answers:{
      a: "	N1= N2 ", 
      b: "	 N1< N2",
      c: "	 N1> N2",               
      d: "	none of these"
    },
    correctAnswer:"b"
  },
  {
    que_no:12,
    question:"In case of holography",
    answers:{
      a:	"only intensity is recorded",
      b:	"only phase information is recorded",
      c:	"both phase and intensity is recorded",
      d:	"only amplitude is recorded"        
    },
    correctAnswer:"c"
  },
  {
    que_no:13,
    question:"Angle of acceptance is maximum for a fibre, when",
    answers:{
      a:	"The critical angle is minimum",
      b:	"The critical angle is maximum",
      c:	"The critical angle is zero",
      d:	"The critical angle is negative"
    },
    correctAnswer:"a"
  },
  {
    que_no:14,
    question:"Numerical Aperture of an optical fiber is 0.5. Find the refractive index of cladding, if the refractive index of the core is 1.53",
    answers:{
      a:	"1.228",   
      b:	"1.327",
      c:	"1.446",   
      d:	"2.0909"
      
    },
    correctAnswer:"c"    
  },
  {
    que_no:15,
    question:"Advantages of fiber optics communication are",
    answers:{
      a:	"Large band width",
      b:	"No interference of external source like RF, EMW",
      c:	"Safe and secure communication ",
      d:	"All the above"
      
    },
    correctAnswer:"d"
  },
  {
    que_no:16,
    question:"Which of the following is described by the concept of numerical aperture in an optical fibre? ",
    answers:{
      a:	"Light scattering",
      b:	"Light collection",
      c:	" Light dispersion ",
      d:	"Light polarisation"       
    },
    correctAnswer:"b"
  },
  {
    que_no:17,
    question:"The lifetime of an atom in a metastable state is of the order of",
    answers:{
      a:	"10-10 sec",   
      b:	"10-8 sec",
      c:	"10-3 sec  ", 
      d: "None of these"       
    },
    correctAnswer:"c"
  },
  {
    que_no:18,
    question:"The transmission based on tunnel effect is that of a plane wave through a ____________",
    answers:{
      a: "Circular Barrier",
      b: "Opaque Object",
      c: "Rectangular Barrier",
      d: "Infinitely small barrier"        
    },
    correctAnswer:"c"
  },
  {
    que_no:19,
    question:"Tunnel effect is notably observed in the case of ____________ ",
    answers:{
      a: "X-rays",
      b: "Gamma rays",
      c: "Alpha Particles",
      d: "Beta Particles "
    },
    correctAnswer:'c'
  },
  {
    que_no:20,
    question:'4 MeV alpha particle crosses the 25 MeV potential barrier inside the nucleus due to ',
    answers:{
      a: "Tunnelling Effect",
      b: "Compton Effect",
      c: "Photoelectric effect",
      d: "Uncertainty principle. "
    },
    correctAnswer:'a'
  },
  {
    que_no:21,
    question:" In a uniform thickness thin film all the reflected rays are",   
    answers:{
      a: "Parallel",
      b: "Anti-parallel",
      c: "Perpendicular",
      d: "Inclined"
       
    },
    correctAnswer:"a"
  },
  {
    que_no:22,
    question:"In STM, Surface being imaged must be, ",
    answers:{
      a: "Magnetic in nature",
      b: "Dielectric in nature",
      c: "Able to conduct electricity",
      d: "None of above"
   },
    correctAnswer:"c"
  },
  {
    que_no:23,
    question:"In a reverse biased diode, the onduction is mainly due to",
    answers:{
      a: "electrons",
      b: "holes",
      c: "electrons in p-type and holes in n-type",
      d: "holes in p-type and electrons in n-type"
    },
    correctAnswer:'c'
  },
  {
    que_no:24,
    question:"A solar cell consists of",
    answers:{
      a: "alkali metal",
      b: "pure semiconductor",
      c: "intrinsic semiconductor",
      d: "p-n junction "
    },
    correctAnswer:"d"
  },
  {
    que_no:25,
    question:'When the load resistance connected  across the solar cell is zero, we get ',    
    answers:{
      a: "open circuit current",
      b: "open circuit voltage",
      c: "short circuit current",
      d: "short circuit voltage"
    },
    correctAnswer:"c"
  },
  {
    que_no:26,
    question:"The fermi level in semiconductor",
    answers:{
      a: "is energy level of electron",
      b: "need not be the energy level of electron",
      c: "can be energy level of electron",
      d: "is always energy level of electron"
    },
    correctAnswer:"b"
  },
  {
    que_no:27,
    question:"vp = vg suggests that, ",
    answers:{
      a: "Particle is lagging behind the wave packet",
      b: "Particle is travelling with the wave packet",
      c: "particle is travelling ahead of wave packet",
      d: "Particle & wave packet have independent motion"
    },
    correctAnswer:"b"
  },
  {
    que_no:28,
    question:"The motion of a wave packet is similar to _____________ ",
    answers:{
      a: "Photons",
      b: "Waves",
      c: "Classical Particle",
      d: "Quantum Particle"
    },
    correctAnswer:"c"
  },
  {
    que_no:29,
    question:"A very thin film in reflected light appears ",
    answers:{
      a: "Coloured",
      b: "Black",
      c: "White",
      d: "Yellow"
    },
    correctAnswer:"b"
  },
  {
    que_no:30,
    question:"Colours in the thin films are because  of",
    answers:{
      a: "Dispersion",
      b: "Diffraction",
      c: "Interference",
      d: "None of them."       
    },
    correctAnswer:"c"
  },
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