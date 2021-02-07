function echoInputValue() {
    let message = document.getElementById("name").value + "\n";
    message += document.getElementById("date").value + "\n";
    message += document.getElementById("work").value + "\n";

    alert(message);
}