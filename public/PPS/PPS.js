const myQuestions = [
  {
    que_no:1,
    question: "Which one of the following is the correct extension of the Python file?",
    answers: {
      a: ".py",
      b: ".python",
      c: ".p",
      d: "None of these"  
    },
    correctAnswer: "a"
  },
  {
    que_no:2,
    question: "Who developed the Python language?",
    answers: {
      a: "Zim Den",
      b: "Guido van Rossum",
      c: "Niene Stom",
      d: "Wick van Rossum"
     
    },
    correctAnswer: "b"
  },
  {
    que_no:3,
    question: "Which statement will check if a is equal to b?",
    answers: {
      a: "if a = b:",
      b: "if a == b:",
      c: "if a === c:",
      d: "if a == b"
      
      
    },
    correctAnswer: "b"
  },
  {
    que_no:4,
    question: "Which of the following is not used as loop in Python?",
    answers: {
      a: "for loop",
      b: "while loop",
      c: "do-while loop",
      d: "None of the above"
      
    },
    correctAnswer: "c"
  },
  {
    que_no:5,
    question: "Which one of the following is immutable data type?",
   
    answers: {
      a: "list",
      b: "set",
      c: "int",
      d: "dict"
      
    },
    correctAnswer: "c"
  },
  {
    que_no:6,
    question:"Which one of the following is mutable data type?",
    answers:{
      a: "set",
      b: "inr",
      c: "ste",
      d: "tuple"
    },
    correctAnswer:'a'
  },
  {
    que_no:7,
    question:"Which of the following statements is true?",
    answers:{
      a: "Python is high level language",
      b: "It is interpreted language",
      c: "It is Object oriented language",
      d: "All of the above"
      
    },
    correctAnswer:"d"
  },
  {
    que_no:8,
    question:"Which of the following is not a complex number?",
    answers:{
      a: "k = 2 + 3j",
      b: "k = complex(2, 3)",
      c: "k = 2 + 3l",
      d: "k = 2 + 3J"
    },
    correctAnswer:"c"
  },
  {
    que_no:9,
    question:"What is the output of the following program :print 0.1 + 0.2 == 0.3",
    answers:{
      a: "True",
      b: "False",
      c: "Machine dependent",
      d: "Error"
      
    },
    correctAnswer:"d"
  },
  {
    que_no:10,
    question:`What is the output of the following program :print "Hello World"[::-1]`,
    answers:{
      a: "dlroW olleH",
      b: "Error",
      c: "d",
      d: "Hello World"
      
    },
    correctAnswer:'a'
  },
  {
    que_no:11,
    question:"Which of the following is an invalid statement?",
    
    answers:{
      a: "abc=1,000,000",
      b: "a b c =1000 2000 3000",
      c: "a,b,c= 1000,2000,3000",
      d: "a_B_C = 1,000,000"
    },
    correctAnswer:"b"
  },
  {
    que_no:12,
    question:"Is Python case sensitive?",
    answers:{
      a: "Yes",
      b: "NO",
      c: "Depends on Python Version",
      d: "none"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:13,
    question:" What is the output of this expression, 3*1**3?",
    answers:{
      a: "27",
      b: "9",
      c: "9",
      d: "1"
    },
    correctAnswer:"c"
  },
  {
    que_no:14,
    question:"What will be the output of 7^10 in python?",
    answers:{
      a: "13",
      b: "2",
      c: "15",
      d: "none of above:"
    },
    correctAnswer:"a"    
  },
  {
    que_no:15,
    question:"Which of these is not a core data type?",
    answers:{
      a: "List",
      b: "Dictionary",
      c: "Tuple",
      d: "Class"
      
    },
    correctAnswer:"d"
  },
  {
    que_no:16,
    question:"What is the output for − 'python ' [-3]?",
    answers:{
      a: "o",
      b: "t",
      c: "h",
      d: "Negative Index error."
      
    },
    correctAnswer:"c"
  },
  {
    que_no:17,
    question:"Which of the following symbols are used for comments in Python?",
    answers:{
      a: "//",
      b: `""`,
      c: "/**/",
      d: "#"
      
    },
    correctAnswer:"d"
  },
  {
    que_no:18,
    question:" Which of the following data types is not supported in python?",
    answers:{
      a: "Slice",
      b: "List",
      c: "String",
      d: "Number"
      
    },
    correctAnswer:"a"
  },
  {
    que_no:19,
    question:"What's the value of this Python expression: 11 % 5?",
    answers:{
      a: "2.2",
      b: "2",
      c: "1",
      d: "0"
      
    },
    correctAnswer:'c'
  },
  {
    que_no:20,
    question:'  Select the expression(s) that evaluates to an int value',
    answers:{
      a: "8 % 6",
      b: "3 / 4",
      c: "3 // 4",
      d: "8.0 % 4"
    },
    correctAnswer:'c'
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