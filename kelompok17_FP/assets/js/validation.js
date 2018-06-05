function phnNumber2() {
    var x, text;
    var x = int;

    // Get the value of the input field with id="numb"
    x = document.getElementById("phn_number").value;

    if(x === a){
      text = "Input ok";
    }else{
      text = "Input valid";
    }

    document.getElementById("phn_number1").innerHTML = text;
}
