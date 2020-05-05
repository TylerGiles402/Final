var inputName = document.body.querySelector(".nameInput");
var inputPass = document.body.querySelector(".passwordInput");
var buttonEle = document.body.querySelector(".submit");
var errorDiv = document.body.querySelector(".error");

var list = [];

buttonEle.addEventListener("click", function () {
  if (validation(inputName) && inputPass.value === "Password") {
    list.push({
      name: inputName.value
    });

    errorDiv.innerHTML = "Success";
  } else {
    if (!validation(inputName) && inputPass.value === "Password") {
      errorDiv.innerHTML = "Name has no text";
    } else if (validation(inputName) && inputPass.value !== "Password") {
      errorDiv.innerHTML = "Success";
    }
  }

  console.log(list);
});

function validation(ele) {
  if (ele.value !== "") {
    return true;
  } else {
    return false;
  }
}

function app(){
  nav();
  initRoot();
  gradeviewPage();
}

function nav(){
  var navEle = document.createElement("nav");
  var gradeviewButton = document.createElement("button");
  gradeviewButton.innerHTML="Grade View";
  gradeviewButton.addEventListener("click", function(){
    gradeviewPage();
  })
  navEle.appendChild(gradeviewButton);
  document.body.appendChild(navEle);
}

function initRoot(){
  var root = document.createElement("div")
  root.classList.add("root");
  root.innerHTML="Stuff"
  document.body.appendChild(root);
}

function gradeviewPage(){
  document.body.querySelector(".root").innerHTML="56, 65, 78, 85, 90, 95"
}

app();


var student = [
  {
    name:"Student 1",
  },
  {
    name:"Student 2",
  },
  {
    name:"Student 3",
  },
  {
    name:"Student 4",
  },
  {
    name:"Student 5",
  },
  {
    name:"Student 6"
  }
]

var wrapperEle = document.body.querySelector(".wrapper");
var nameList = ["Student 1, 56", "Student 2, 65", "Student 3, 78", "Student 4, 85", "Student 5, 90", "Student 6, 95"];
for(var i = 0; i<nameList.length; i++){
  var ele = document.createElement("div");
  ele.innerHTML=nameList[i];
  if (nameList[i] == "Student 1") {
  }
  
  if (nameList[i] == "Student 2") {
  }
  
  if (nameList[i] == "Student 3") {
  }


  wrapperEle.appendChild(ele);
}