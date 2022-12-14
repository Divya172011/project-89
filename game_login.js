function add_user(){
    player_1 = document.getElementById("player_input1").value;
    player_2 = document.getElementById("player_input2").value;

    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);

    window.location="game_page.html";
}