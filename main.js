function adduser() {
    p1=document.getElementById("player1_name").value
    p2=document.getElementById("player2_name").value
    localStorage.setItem("player1", p1)
    localStorage.setItem("player2", p2)
    window.location="iindex.html"}
p1=localStorage.getItem("player1")
p2=localStorage.getItem("player2")
score1=0
score2=0
document.getElementById("name1").innerHTML=p1 + " : "
document.getElementById("name2").innerHTML=p2 + " : "
document.getElementById("player1_score").innerHTML=score1
document.getElementById("player2_score").innerHTML=score2
document.getElementById("player_question").innerHTML="Question Turn : " + p1
document.getElementById("player_answer").innerHTML="Answer Turn : " + p2
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
    document.getElementById("Number2").value=""}
qT=p2
aT=p1
function check() {
    console.log(document.getElementById("input_check_box").value)
    console.log(actual_answer)
    console.log(actual_answer.toString() == "NaN")
    console.log(actual_answer==parseInt(document.getElementById("input_check_box").value))
    if (actual_answer.toString() == "NaN") {
        document.getElementById("nothing").innerHTML="no really"}
    else {
        if (actual_answer==parseInt(document.getElementById("input_check_box").value)) {
            if (aT == "p1") {
                score1 += 1
                document.getElementById("player1_score").innerHTML = score1}
            else {
                score2 += 1
                document.getElementById("player2_score").innerHTML = score2}}
        if (aT == "p1") {
            aT = "p2"
            qT = "p1"
            document.getElementById("player_question").innerHTML="Question Turn : " + p2
            document.getElementById("player_answer").innerHTML="Answer Turn : " + p1}
        else {
            aT = "p1"
            qT = "p2"
            document.getElementById("player_question").innerHTML="Question Turn : " + p1
            document.getElementById("player_answer").innerHTML="Answer Turn : " + p2}
        document.getElementById("nothing").innerHTML="Solve"}
    document.getElementById("output").innerHTML=""}