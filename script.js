var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deleteBtns = document.getElementsByClassName("delete");

//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}

//from StackOverflow:
function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
  }

// Function to creat the new <li> element with the input value in it
function inputLength() {
	return input.value.length;
}
function creatList() {
	var btn = document.createElement("button");
	btn.setAttribute("class", "btn btn-sm btn-danger delete far fa-trash-alt");
	btn.onclick = removeParent;
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		li.appendChild(btn);
		ul.appendChild(li);
		input.value = "";
}

// Function to creat new <li> element when the user clicks the button <i class="far fa-trash-alt"></i>
function addListAfterClick() {
	if (inputLength() > 0) {
		creatList();
	}
}

// Function to creat new <li> element when the user presses the enter key
function addListAfterEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		creatList();
	}
}

// Function to strike trough the item when the user clicks on it
function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

// Event listener to add a new <li> element when the user clicks the button
button.addEventListener("click", addListAfterClick);

// Event listener to add a new <li> element when the user presses the enter key
input.addEventListener("keypress", addListAfterEnter);

// Event listener to cross <li> element when the user clicks on the element
ul.addEventListener("click", strikeThrough);
