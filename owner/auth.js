
const OWNER_PASSWORD = "//\\";

function attemptLogin() {
    const input = document.getElementById("password-input").value;

    if (input === OWNER_PASSWORD) {
        localStorage.setItem("melo_owner_auth", "true");
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("owner-panel").style.display = "block";
    } else {
        alert("Wrong password");
    }
}

window.onload = () => {
    if (localStorage.getItem("melo_owner_auth") === "true") {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("owner-panel").style.display = "block";
    }
};