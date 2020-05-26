var colorCode = '#FFFFFF';
function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    
    // Changing the value
    colorCode = inputVal;
    var a = document.getElementsByClassName("ba-square-content");
    a[0].style.backgroundColor = colorCode;
}