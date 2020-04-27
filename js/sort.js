var m=0;
var n=1;
var arrayOfPref = [];

function prefTaker(count){
    if(m == count - 1){
        ResultDivConstructor();
        return;
    }

    sortDiv.innerHTML = null;
    
    sortDivConstructor(m,n);

    if(n == count-1){
        m++;
    }

    if(n < count-1){
        n++;
    } else {
        n = m+1;
    }
    
};


/* #################### */



function InputBoxCreator(count){
    const inputAreaDiv = document.querySelector(".input-area");
    const inputBoxesDiv = document.createElement("div");
    inputBoxesDiv.classList.add("input-boxes");

    inputAreaDiv.classList.add("input-area-styles");
    let inputAreaDivH1 = document.createElement("h1");
    inputAreaDivH1.textContent = `Fill the ${count} goals in word(s) in random order in the below boxes.`;
    inputAreaDiv.appendChild(inputAreaDivH1);

    for(i =0; i<count; i++){
        let inputBox = document.createElement("input");
        inputBox.setAttribute("type","text");
        inputBox.classList.add("input-box");
        inputBox.required = true;
        inputBoxesDiv.appendChild(inputBox);
    }

    inputAreaDiv.appendChild(inputBoxesDiv);

    const inputBoxNodeList = document.querySelectorAll(".input-box");
    const arrayOfInputBox = Array.from(inputBoxNodeList);
    arrayOfGoals = arrayOfInputBox.map(item => {
            return item.value;
    });
    console.log(arrayOfGoals);

    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add(".submit");
    submitButton.textContent = "Submit";
    //submitButton.disabled = true;
    

    submitButton.addEventListener("click", () => {
        const inputFilled = arrayOfGoals.forEach(item => {
            if(item.length == 0)
            return true;
            else return false;
        });
        if(inputFilled){
            return;
        } else {
            inputAreaDiv.innerHTML = null;
            inputAreaDiv.style.minHeight = 0;
            inputAreaDiv.style.height = 0;
            inputAreaDiv.style.border = "none";
            prefTaker(arrayOfGoals.length);
            return;
        };   
    });

    inputAreaDiv.appendChild(submitButton);
}

const nextButton = document.querySelector("#next");
nextButton.addEventListener("click", () => {
    const numberOfGoals = document.querySelector(".number-of-goals").value;
    if(numberOfGoals >= 3 && numberOfGoals <= 18){
        InputBoxCreator(numberOfGoals);
        const inputInfoDiv = document.querySelector(".input-info");
        inputInfoDiv.innerHTML = null;
        inputInfoDiv.style.height = 0;
        inputInfoDiv.style.border = "none";
        return;
    } else {
        let note = document.querySelector(".note");
        note.style.textDecoration = "underline";
        return;
    }
});

const sortDiv = document.querySelector(".sort");

function sortDivConstructor(i, j){
    let p1 = document.createElement("p");
    p1.textContent = arrayOfGoals[i];
    p1.classList.add("p-for-sorting");
    
    p1.addEventListener("click", () => {
        if(arrayOfPref[i]){
            arrayOfPref[i] = arrayOfPref[i] + 1;
        } else {
        arrayOfPref[i] = 1;
        }
        prefTaker(arrayOfGoals.length);
    });
    sortDiv.appendChild(p1);

    let pVersus = document.createElement("p");
    pVersus.textContent = " Versus ";
    pVersus.classList.add("p-for-sorting");

    sortDiv.appendChild(pVersus);

    let p2 = document.createElement("p");
    p2.textContent = arrayOfGoals[j];
    p2.classList.add("p-for-sorting");

    p2.addEventListener("click", () => {
        if(arrayOfPref[j]){
            arrayOfPref[j] = arrayOfPref[j] + 1;
        } else {
        arrayOfPref[j] = 1;
        }
        prefTaker(arrayOfGoals.length);
    });

    sortDiv.appendChild(p2);
}

const resultDiv = document.querySelector(".result-div");


function ResultDivConstructor(){
    sortDiv.innerHTML = null;
    console.log("sorting Done");
    for(i=0; i<arrayOfPref.length; i++){
        if(!arrayOfPref[i]){
            arrayOfPref[i] = 0;
        }
        //let resultDivH3 = document.createElement
    }
    console.log(arrayOfPref);
}


