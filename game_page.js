player_1 = localStorage.getItem("player_1");
player_2 = localStorage.getItem("player_2");

player1_score =0;
player2_score =0;

document.getElementById("player_1").innerHTML = player_1 + ":";
document.getElementById("player_2").innerHTML = player_2 + ":";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question turn : " + player_1;
document.getElementById("player_answer").innerHTML = "Answer turn : " + player_2;

function send(){
   Number1 = document.getElementById("Number1").value;
   Number2 = document.getElementById("Number2").value;
   actual_answer = parseInt(Number1)*parseInt(Number2);
   console.log(actual_answer);

    question_number = "<h4>" + Number1 + "X" + Number2 + "</h4>"
    input_box = "<br>Answer: <input type = 'text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick = 'check()'> Check </button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    
   

    if (get_answer == actual_answer)
    {
        if (answer_turn == "player1"){

        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }

    else {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}

if (question_turn == "player1"){
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Question turn: " + player_2;
}

else {
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "Question turn: " + player_1;
}

if (answer_turn == "player1"){
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "Answer turn: " + player_2;
}

else {
    answer_turn = "player1"
    document.getElementById("player_answer").innerHTML = "Answer turn: " + player_1;
}

document.getElementById("output").innerHTML = "";
}

