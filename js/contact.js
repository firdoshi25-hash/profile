
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            showFormMessage("Please fill in all fields.", "error");
            return;
        }

        if (!emailInput.validity.valid) {
            showFormMessage("Please enter a valid email address.", "error");
            return;
        }

        showFormMessage(
            "Your form has been validated. Message sending is not connected yet.",
            "success"
        );

        contactForm.reset();
    });
}

function showFormMessage(message, type) {
    let messageElement = document.getElementById("formMessage");

    if (!messageElement) {
        messageElement = document.createElement("p");
        messageElement.id = "formMessage";
        messageElement.setAttribute("role", "status");
        messageElement.setAttribute("aria-live", "polite");

        const form = document.getElementById("contactForm");

        if (form) {
            form.appendChild(messageElement);
        }
    }

    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;
}
