const myQuestions = [
  {
    que_no:1,
    question: "The following is not included in title block of drawing sheet.",
    answers: {
      a: "Sheet No",
      b: "Scale",
      c: "Method of Projection",
      d: "Size of sheet"
      
    },
    correctAnswer: "d"
  },
  {
    que_no:2,
    question: "Which of the following represent reducing scale?",
    answers: {
      a: "1:1",
      b: "1:2",
      c: "2:1",
      d: "10:1"
      
    },
    correctAnswer: "b"
  },
  {
    que_no:3,
    question: "In first angle projection method, object is assumed to be placed in",
    answers: {
      a: "First quadrant",
      b: "Second quadrant",
      c: "Third Quadrant",
      d: "Fourth quadrant"
      
    },
    correctAnswer: "a"
  },
  {
    que_no:4,
    question: "The following line is used for visible outlines",
    answers: {
      a: "Continuous thick",
      b: "Continuous thin",
      c: "Chain thin line",
      d: "Short zigzag thin"
    },
    correctAnswer: "a"
  },
  {
    que_no:5,
    question: "The following line is used for dimension line",
    answers: {
      a: "Continuous thick",
      b: "Continuous thin",
      c: "Chain thin line",
      d: "Short zigzag thin"
    },
    correctAnswer: "b"
  },
  {
    que_no:6,
    question:"The dotted lines represents",
    answers:{
      a: "Hidden edges",
      b: "Projection line",
      c: "Centre line",
      d: "Hatching line"
    },
    correctAnswer:'a'
  },
  {
    que_no:7,
    question:"Hatching lines are drawn at what degree to reference line",
    answers:{
      a: "30",
      b: "45",
      c: "60",
      d: "90"
    },
    correctAnswer:"b"
  },
  {
    que_no:8,
    question:"In aligned system of dimensioning, the dimensions may be read from",
    answers:{
      a: "Bottom or right hand edges",
      b: "Bottom or left hand edges",
      c: "Only from bottom",
      d: "Only from left side"
    },
    correctAnswer:"a"
  },
  {
    que_no:9,
    question:"-The Length: Width in case of an arrow head is",
    answers:{
      a: "1:1",
      b: "2:1",
      c: "3:1",
      d: "4:1"
      
    },
    correctAnswer:"c"
  },
  {
    que_no:10,
    question:"A point ‘P’ is above Horizontal Plane (HP) and in front of Vertical Plane (VP). The point is in",
    answers:{
      a: "First quadrant",
      b: "Second quadrant",
      c: "Third quadrant",
      d: "Fourth quadrant"
    },
    correctAnswer:'a'
  },
  {
    que_no:11,
    question:"The side view of an object is drawn in",
    answers:{
      a: "Vertical plane",
      b: "Horizontal plane",
      c: "Profile plane",
      d: "Any of the above"
    },
    correctAnswer:"c"
  },
  {
    que_no:12,
    question:"The top, front, and bottom views align in this manner:",
    answers:{
      a: "Horizontally",
      b: "Vertically",
      c: "According to the planar views",
      d: "Parallel to the frontal plane"
    },
    correctAnswer:"b"
  },
  {
    que_no:13,
    question:"If a plane is parallel to the plane of projection, it appears: ",
    answers:{
      A: "True size",
      B: "As a line or edge",
      C: "Foreshortened",
      D: "As an oblique surface"
    },
    correctAnswer:"a"
  },
  {
    que_no:14,
    question:"Which tool can be used to draw a 90 degree line",
    answers:{
      a: "30/60 set square",
      b: "protactor",
      c: "drafter",
      d: "All of above"
    },
    correctAnswer:"d"    
  },
  {
    que_no:15,
    question:"If the top view of a plane is a rhombus the object may be",
    answers:{
      a: "A square ",
      b: "A rhombus",
      c: "Either (a) or (b) ",
      d: "Neither (a) nor (b)"
    },
    correctAnswer:"b"
  },
  {
    que_no:16,
    question:"Some common blocks used by architectural drafters include ",
    answers:{
      a: "Door swings",
      b: "Ceiling fans",
      c: "Appliances",
      d: "All of the above"
      
    },
    correctAnswer:"d"
  },
  {
    que_no:17,
    question:"A fillet is a rounded surface on the ________ corner of a part.",
    answers:{
      a: "Inside",
      b: "Outside",
      c: "Radial",
      d: "Isoplane"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:18,
    question:"While cutting, if the plane is at an angle and it cuts all the generators, then the conic formed is called as",
    answers:{
      a: "Circle",
      b: "Ellipse",
      c: "Parabola",
      d: "Hyperbola"
    },
    correctAnswer:"b"
  },
  {
    que_no:19,
    question:"Which of the following has an eccentricity less than one?",
    answers:{
      a: "Circle",
      b: "Parabola",
      c: "Hyperbola",
      d: "Ellipse"
      
    },
    correctAnswer:'d'
  },
  {
    que_no:20,
    question:'If the value of eccentricity is 12, then what is the name of the conic? ',
    answers:{
      a: "Ellipse",
      b: "Hyperbola",
      c: "Parabola",
      d: "Circle"
    },
    correctAnswer:'b'
  },
  {
    que_no:21,
    question:"  The cross-section gives a  when the cutting plane is parallel to axis of cone.",   
    answers:{
      a: "Parabola",
      b: "Hyperbola",
      c: "Circle",
      d: "Ellipse"
      
    },
    correctAnswer:"b"
  },
  {
    que_no:22,
    question:"The commands Donut, Block, Spline, Polygon, and Arc etc belong to which tool bar?",
    answers:{
      a: "Layer tool bar",
      b: "Style tool bar",
      c: "Modify tool bar",
      d: "Draw tool bar"
   },
    correctAnswer:"d"
  },
  {
    que_no:23,
    question:"The command which is used to create a round corner between two lines is",
    answers:{
      a: "Chamfer",
      b: "Fillet",
      c: "Stretch",
      d: "Extend"
    },
    correctAnswer:'b'
  },
  {
    que_no:24,
    question:"For orthographic projection, the engineering custom in the United States dictates the use of:",
    answers:{
      a:" first-angle",
      b:"second-angle ",
      c:" third-angle",
      d:" fourth-angle "
    },
    correctAnswer:"c"
  },
  {
    que_no:25,
    question:'The top and right side views have what common dimension(s)? ', 
       
    answers:{
      a: "height and width",
      b: "width and depth",
      c: "height",
      d: "depth"

      
    },
    correctAnswer:"d"
  },
  {
    que_no:26,
    question:"In orthographic projection, visual rays are __to the projection plane.",
    answers:{
      A: "parallel",
      B: "adjacent",
      C: "perpendicular",
      D: "tangent"
    },
    correctAnswer:"c"
  },
  {
    que_no:27,
    question:"An asymmetric object is usually described by how many views?",
    answers:{
      a: "1",
      b: "2",
      c: "3",
      d: "4"
    },
    correctAnswer:"c"
  },
  {
    que_no:28,
    question:" A sphere can be described in how many views?",
    
    answers:{
      a:"1",
      b:"2",
      c:'3',
      d:"4"
    },
    correctAnswer:"a"
  },
  {
    que_no:29,
    question:" Which is not a principal view?",
    answers:{
      a:"left",
      b:"auxilary",
      c:"front",
      d:"bottom"
    },
    correctAnswer:"b"
  },
  {
    que_no:30,
    question:"What type of sketch incorporates convergence?",
   
    answers:{
      a: "isometric",
      b: "perspective",
      c: "oblique ",
      f: "multi view"
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