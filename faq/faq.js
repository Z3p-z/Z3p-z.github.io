// -----------------------------
// Melo FAQ Webhook System
// -----------------------------

const WEBHOOK_URL = "https://discord.com/api/webhooks/1487902721825570906/om_PC-CGePFNZZpNTptOeD3WIFSvgogFlzkul0Sdya5Wep8AMyXFVy_CRMzZhh2dfVs1";

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

    await fetch(WEBHOOK_URL, {
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
}

// Submit Answer
async function submitAnswer() {
    const name = document.getElementById("aName").value.trim() || "Anonymous";
    const question = document.getElementById("aQuestion").value.trim();
    const answer = document.getElementById("aText").value.trim();
    if (!question || !answer) return;

    const payload = {
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

    await fetch(WEBHOOK_URL, {
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
}