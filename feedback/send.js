// -----------------------------
//  Melo Feedback Webhook Sender
// -----------------------------

const WEBHOOK_URL = "https://discord.com/api/webhooks/1487719376072474814/TQdlnkl-aoXBFVlt7s8WkmB-D_tvWmFqkptP5NZ3xGVSN6iGA4HO0Jiz8Aanm_3i0SdV";

async function sendFeedback() {
    const name = document.getElementById("name").value.trim() || "Anonymous";
    const message = document.getElementById("message").value.trim();

    if (!message) return;

    const payload = {
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
        await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

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
        alert("Error sending feedback.");
        console.error(err);
    }
}