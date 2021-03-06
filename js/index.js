// Challenge 1 write a function that returns a sum of two numbers



function addNumbers(){
    let number1 = parseInt(document.querySelector("#number1").value);
    let number2 = parseInt(document.querySelector("#number2").value);
    result = number1 + number2;
    let number = numberWithCommas(result);
    document.querySelector('#result').value = number;

    // document.querySelector("#number1").value = "";
    // document.querySelector("#number2").value = "";
}

// displayResult(){
//     document.querySelector("challenge1").appendChild()
// }



// Challenge 2 convert minuts to seconds
// Given the user input the display should be displayed in seconds

function convertMinutesToSeconds() {
    let minutes = parseInt(document.querySelector("#minutes").value);
    let seconds = minutes * 60;
    let secondsResult = numberWithCommas(seconds);
    document.querySelector("#resultSecs").value = secondsResult;
}

// Challenge 3 Your age in seconds
function convertYearsToSeconds(){
    let years = parseInt(document.querySelector("#years").value);
    let yearsInSeconds = years * 365 * 24 * 60 * 60;
    let numberResult = numberWithCommas(yearsInSeconds);
    document.querySelector("#resultYearsInSecs").value = numberResult;
    
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Challenge 4, Print first element of array, first creating a fruit array
let fruitArray = [];

function addFruitsToArray(){
    let fruit = document.querySelector("#fruitElement").value;
    fruitArray.push(fruit);
    document.querySelector("#fruitElement").value = "";
    console.log(fruitArray);
    printList();
}

function printFirstElementOfArray(){
    if(fruitArray[0]){
        document.querySelector("#resultElement").value = fruitArray[0];
    } else {
        document.querySelector("#resultElement").value = "Please fill the array first";
    }     
}

function printLastElementOfArray(){
    if(fruitArray[0]){
        document.querySelector("#resultElement").value = fruitArray[fruitArray.length-1]; 
    } else {
        document.querySelector("#resultElement").value = "Please fill the array first";
    }    
}

function printList(){
    const listOfFruits = document.querySelector("#menu");
    listOfFruits.innerHTML = fruitArray;
}

// Challenge 5 Rate Movie
function rateMovie(){
    let rating = parseFloat(document.querySelector("#rating").value);
    if(rating > 10 || rating <= 0){
        document.querySelector("#resultRating").value = "Enter a valid rating";
    } else if (rating >= 7) {
        document.querySelector("#resultRating").value = "The movie is good!";
    } else {
        document.querySelector("#resultRating").value = "The movie is bad!";
    }
}

// Challenge 6 Check if a string is empty
function isTheStringEmpty(){
    let string = document.querySelector("#string").value;
    if(string){
        resultEvaluation = "The string is not empty";
    } else {
        resultEvaluation = "The string is empty";
    }

    document.querySelector("#resultString").value = resultEvaluation;
}

// Challenge 7 and 8, find maximum and minimum of an array
let arrayOfNumbers = [];

function createArray(){
    let number = parseInt(document.querySelector("#arrayOfNumbers").value);
    document.querySelector("#arrayOfNumbers").value="";
    arrayOfNumbers.push(number);
    printArray();
}

function printArray(){
    const listOfNumbers = document.querySelector("#numbers");
    listOfNumbers.innerHTML = arrayOfNumbers;
}

function minOfArray(){
    let currentMin = arrayOfNumbers[0];
    for (let i = 0; i <= arrayOfNumbers.length; i++){
    if( currentMin > arrayOfNumbers[i+1]){
        currentMin = arrayOfNumbers[i+1];
        }
    }
    document.querySelector("#resultNumbers").value = currentMin;
}

function maxOfArray(){
    let currentMax = arrayOfNumbers[0];
    for (let i = 0; i <= arrayOfNumbers.length; i++){
    if( currentMax < arrayOfNumbers[i+1]){
        currentMax = arrayOfNumbers[i+1];
        }
    }
    document.querySelector("#resultNumbers").value = currentMax;
}

// Challenge 9 Sort information
let arrayToSort = [];
function createArrayToSort(){
    let numberElement = parseInt(document.querySelector("#arrayToSort").value);
    arrayToSort.push(numberElement);
    document.querySelector("#arrayToSort").value = "";
    document.querySelector("#arrayToSortShow").value = arrayToSort;
}

function sortBestRatingsFirst(numbers){
// sort the array [5,8,9,3,10]
// know MAX and it's index
    for (let j = 0; j < numbers.length - 1; j++){
        let maximum = numbers[j];
        let maxLocation = j;

        for(let i = j; i < numbers.length; i++){
            if( numbers[i] > maximum){
                maximum = numbers[i];
                maxLocation = i;
            }
        }
        // Swap the max number with first element
        numbers[maxLocation] = numbers[j];
        numbers[j] = maximum;        
    }
    document.querySelector("#showResultArray").value = numbers;
    return numbers;
}



