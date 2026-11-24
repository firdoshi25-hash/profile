const externalProjectLinks = document.querySelectorAll(
    ".projects-container a[href^='http'], .more-projects a[href^='http']"
);

externalProjectLinks.forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
});
