
const projectLinks = document.querySelectorAll(".project-card a");

projectLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (!href) {
        link.setAttribute("aria-disabled", "true");
        return;
    }

    if (link.target === "_blank") {
        link.rel = "noopener noreferrer";
    }
});
