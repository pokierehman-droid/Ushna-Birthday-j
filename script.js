let pass = "";

function add(num){
    pass += num;
    document.getElementById("display").value = "•".repeat(pass.length);
}

function clearPass(){
    pass = pass.slice(0, -1);
    document.getElementById("display").value = "•".repeat(pass.length);
}

function showHint(){
    alert("Passkey : 25-10");
}

function check(){
    if(pass == "2510"){
        window.location.href = "page2.html";
    }
    else{
        alert("Wrong Password!");
        pass = "";
        document.getElementById("display").value = "";
    }
}

// Page 5 ke liye
function nextPage() {
    window.location.href = "page4.html";
}

function openLetter() {
    window.location.href = "letter.html";
}

// Letter Page
function openMessage() {
    document.getElementById("letterBox").style.display = "flex";
}

// Birthday Celebration
function celebrate() {

    alert("🎉 Happy Birthday! 🎂❤️");

    const duration = 5000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            spread: 70,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Restart
function restart() {
    window.location.href = "index.html";
}