// -----------------------------
// Maintenance Admin Logic
// -----------------------------

function login() {
    const input = document.getElementById("password").value;

    if (input === ADMIN_PASSWORD) {
        document.getElementById("loginBox").classList.add("hidden");
        document.getElementById("panel").classList.remove("hidden");
        updateStatus();
    } else {
        document.getElementById("error").style.display = "block";
    }
}

function enableMaintenance() {
    MAINTENANCE_MODE = true;
    localStorage.setItem("maintenance", "true");
    updateStatus();
}

function disableMaintenance() {
    MAINTENANCE_MODE = false;
    localStorage.setItem("maintenance", "false");
    updateStatus();
}

function updateStatus() {
    document.getElementById("status").innerText =
        "Maintenance Mode: " + (MAINTENANCE_MODE ? "ON" : "OFF");
}