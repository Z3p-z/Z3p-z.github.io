// -----------------------------
// Melo Feedback Webhook Sender (Secure Version)
// -----------------------------

// TRAGE HIER DEINE CLOUDFLARE WORKER URL EIN
const WORKER_URL = "https://backend.jannik263.workers.dev";

async function sendFeedback() {
    const name = document.getElementById("name").value.trim() || "Anonymous";
    const message = document.getElementById("message").value.trim();

    if (!message) return;

    const payload = {
        target: "feedback", // Sagt dem Worker: Nutze den Feedback-Webhook
        username: "Melo Feedback",
        embeds: [
            {
                title: "New Feedback Received",
                color: 0x8b5cf6,
                fields: [
                    { name: "From", value: name, inline: true },
                    { name: "Message", value: message }
                ],
                footer: { text: "Melo Feedback System" },
                timestamp: new Date().toISOString()
            }
        ]
    };

    try {
        const response = await fetch(WORKER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error("Worker Error");

        // Show success message
        const success = document.getElementById("success");
        success.style.display = "block";

        // Clear fields
        document.getElementById("message").value = "";
        document.getElementById("name").value = "";

        // Hide after 3 seconds
        setTimeout(() => {
            success.style.display = "none";
        }, 3000);

    } catch (err) {
        alert("Error sending feedback. Make sure the Worker is configured correctly.");
        console.error(err);
    }
}