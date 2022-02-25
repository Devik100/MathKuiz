function adduser() {
    player1name=document.getElementById("player1_name").value
    player2name=document.getElementById("player2_name").value
    localStorage.setItem("player1", player1name)
    localStorage.setItem("player2", player2name)
    window.location="iindex.html"
}
player1=localStorage.getItem("player1")
player2=localStorage.getItem("player2")
score1=0
score2=0
document.getElementById("name1").innerHTML=player1 + " : "
document.getElementById("name2").innerHTML=player2 + " : "
document.getElementById("player1_score").innerHTML=score1
document.getElementById("player2_score").innerHTML=score2
document.getElementById("player_question").innerHTML="Question Turn : " + player1
document.getElementById("player_answer").innerHTML="Answer Turn : " + player2
function send(){
    Num1=document.getElementById("Number1").value
    Num2=document.getElementById("Number2").value
    console.log(Num1 + " " + Num2)
    actual_answer=parseInt(Num1)*parseInt(Num2)
    question_prompt_code="<h4 id='question'>Q. " + Num1 + "x" + Num2 + "</h4>"
    text_input_code="<br> Answer: <input type='text' id='input_check_box' placeholder='Put your answer here'>"
    button_check_code="<br><br><button class='btn btn-success' onclick='check()'>Check answer</button>"
    row=question_prompt_code+text_input_code+button_check_code
    document.getElementById("output").innerHTML=row
    document.getElementById("Number1").value=""
    document.getElementById("Number2").value=""
}
/*function check() {
    if (actual_answer==document.getElementById("input_check_box")) {
        //I don't know what goes here, probably defining ansTurn and quesTurn or something.
    }
}*/