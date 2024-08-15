//your JS code here. If required.
const codeContainer= document.querySelector(".code-container")
const numberOfInputs = 6;
let lastEnteredInputElement = null;

function onInput(event){
	const currentElement =event.target;
	if(currentElement.value){
		currentElement.nextSibling&&currentElement.nextSibling.focus();
	}
}

function onBackSpace(e){
	if(e.key === "Backspace" ){
		e.target.value="";
		e.target.previousElementSibling && e.target.previousElementSibling.focus();
	}
}
	
for(let i=1; i<=numberOfInputs; i++){
	const input = document.createElement("input");
	input.className = "code";
	input.maxLength="1";
	input.addEventListener("input" , onInput);
	input.addEventListener("keyup", onBackSpace);
	codeContainer.appendChild(input);
}

	
