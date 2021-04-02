playerName_1= localStorage.getItem("player1_name");
playerName_2= localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("name_player1").innerHTML=playerName_1 + "-" ;
document.getElementById("name_player2").innerHTML=playerName_2 + "-";

document.getElementById("score_player1").innerHTML=player1_score;
document.getElementById("score_player2").innerHTML=player2_score;

document.getElementById("question1").innerHTML="Question Turn-" + playerName_1;
document.getElementById("answer1").innerHTML="Answer Turn-" + playerName_2;

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


question_turn = "player1";
answer_turn = "player2";

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("score_player1").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("score_player2").innerHTML = player2_score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2";
		document.getElementById("question1").innerHTML = "Question Turn - " + playerName_2 ;
	}
	else 
	{
		question_turn = "player1";
		document.getElementById("question1").innerHTML = "Question Turn - " + playerName_1 ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2";
		document.getElementById("answer1").innerHTML = "Answer Turn - " + playerName_2 ;
	}
	else 
	{
		answer_turn = "player1";
		document.getElementById("answer1").innerHTML = "Answer Turn - " + playerName_1 ;
	}

    document.getElementById("output1").innerHTML = "";
}

