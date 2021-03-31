playerName_1= localStorage.getItem("player1_name");
playerName_2= localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("name_player1").innerHTML=playerName_1 + "-" ;
document.getElementById("name_player2").innerHTML=playerName_2 + "-";

document.getElementById("score_player1").innerHTML=player1_score;
document.getElementById("score_player2").innerHTML=player2_score;

document.getElementById("question").innerHTML="Question Turn-" + playerName_1;
document.getElementById("answer").innerHTML="Answer Turn-" + playerName_2;

function Send(){
	number1 = document.getElementById("text_input1").value;
	number2 = document.getElementById("text_input2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output1").innerHTML = row;
	document.getElementById("text_input1").value = "";
	document.getElementById("text_input2").value = "";
}


question_turn = "playerName_1";
answer_turn = "playerName_1";