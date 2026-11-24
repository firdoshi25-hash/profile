const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const contactSubmit = document.getElementById("contactSubmit");

if (contactForm && formMessage && contactSubmit) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = "Please enter your name, a valid email, and a message.";
            formMessage.className = "form-message error";
            formMessage.hidden = false;
            return;
        }

        const subject = encodeURIComponent(`Portfolio message from ${name}`);
        const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

        formMessage.textContent =
            "Opening your email app. Your message is not sent until you review and send the draft.";
        formMessage.className = "form-message";
        formMessage.hidden = false;
        contactSubmit.disabled = true;
        contactSubmit.setAttribute("aria-busy", "true");

        window.location.href =
            `mailto:firdoshik555@gmail.com?subject=${subject}&body=${body}`;

        window.setTimeout(() => {
            contactSubmit.disabled = false;
            contactSubmit.removeAttribute("aria-busy");
            formMessage.textContent =
                "If your email app did not open, send your message to firdoshik555@gmail.com.";
        }, 1200);
    });
}
