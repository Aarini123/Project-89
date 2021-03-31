function login_game() {
    var player_1=document.getElementById("username_input1").value;
    var player_2=document.getElementById("username_input2").value;
    localStorage.setItem("player1_name",player_1);
    localStorage.setItem("player2_name",player_2);

    window.location="quiz_game.html";
}

var score=0;
function update_score(){
score= score+1;
document.getElementById("show_score").innerHTML="Score:" + score;
}

function save_score(){
    localStorage.setItem("game",score);
}

function next_page(){
    window.location="2index.html";
}

function back(){
    window.location="1index.html";
}

function get_score(){
    game=localStorage.getItem("game");
    document.getElementById("buttons_div").innerHTML="<h1>Score:"+ game+  "</h1>";
}

