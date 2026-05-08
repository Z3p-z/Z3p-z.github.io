// -----------------------------
// Melo FAQ Webhook System (Secure Version)
// -----------------------------

// TRAGE HIER DEINE CLOUDFLARE WORKER URL EIN
const WORKER_URL = "https://backend.jannik263.workers.dev";

// Toggle FAQ answers
function toggleFAQ(item) {
    const answer = item.querySelector(".faq-answer");
    answer.style.display = answer.style.display === "block" ? "none" : "block";
}

// Submit Question
async function submitQuestion() {
    const name = document.getElementById("qName").value.trim() || "Anonymous";
    const question = document.getElementById("qText").value.trim();
    if (!question) return;

    const payload = {
        target: "faq", // Sagt dem Worker, welchen Webhook er nutzen soll
        username: "Melo FAQ",
        embeds: [
            {
                title: "New Question Submitted",
                color: 0x8b5cf6,
                fields: [
                    { name: "From", value: name, inline: true },
                    { name: "Question", value: question }
                ],
                footer: { text: "Melo FAQ System" },
                timestamp: new Date().toISOString()
            }
        ]
    };

    try {
        await fetch(WORKER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        document.getElementById("qText").value = "";
        document.getElementById("qName").value = "";
        document.getElementById("qSuccess").style.display = "block";

        setTimeout(() => {
            document.getElementById("qSuccess").style.display = "none";
        }, 3000);
    } catch (err) {
        alert("Fehler beim Senden der Frage.");
        console.error(err);
    }
}

// Submit Answer
async function submitAnswer() {
    const name = document.getElementById("aName").value.trim() || "Anonymous";
    const question = document.getElementById("aQuestion").value.trim();
    const answer = document.getElementById("aText").value.trim();
    if (!question || !answer) return;

    const payload = {
        target: "faq", // Auch hier das Ziel FAQ
        username: "Melo FAQ",
        embeds: [
            {
                title: "New Answer Submitted",
                color: 0x3b82f6,
                fields: [
                    { name: "From", value: name, inline: true },
                    { name: "Question", value: question },
                    { name: "Answer", value: answer }
                ],
                footer: { text: "Melo FAQ System" },
                timestamp: new Date().toISOString()
            }
        ]
    };

    try {
        await fetch(WORKER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        document.getElementById("aName").value = "";
        document.getElementById("aQuestion").value = "";
        document.getElementById("aText").value = "";
        document.getElementById("aSuccess").style.display = "block";

        setTimeout(() => {
            document.getElementById("aSuccess").style.display = "none";
        }, 3000);
    } catch (err) {
        alert("Fehler beim Senden der Antwort.");
        console.error(err);
    }
}