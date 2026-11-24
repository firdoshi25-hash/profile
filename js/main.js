const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeNavigation({ returnFocus = false } = {}) {
    if (!menuToggle || !navLinks) {
        return;
    }

    navLinks.classList.remove("show");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");

    if (returnFocus) {
        menuToggle.focus();
    }
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");

        menuToggle.classList.toggle("open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => closeNavigation());
    });

    document.addEventListener("click", (event) => {
        if (
            event.target instanceof Node &&
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeNavigation();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navLinks.classList.contains("show")) {
            closeNavigation({ returnFocus: true });
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeNavigation();
        }
    });
}

const themeToggle = document.getElementById("themeToggle");
const themeLabel = themeToggle?.querySelector(".theme-label");

if (themeToggle && themeLabel) {
    themeToggle.addEventListener("click", () => {
        const nextTheme =
            document.documentElement.dataset.theme === "light" ? "dark" : "light";

        document.documentElement.dataset.theme = nextTheme;
        themeLabel.textContent = nextTheme === "light" ? "Dark" : "Light";
        themeToggle.setAttribute(
            "aria-label",
            `Switch to ${nextTheme === "light" ? "dark" : "light"} theme`
        );
    });
}

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
}

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

if (sections.length && navigationLinks.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                navigationLinks.forEach((link) => {
                    const isActive =
                        link.getAttribute("href") === `#${entry.target.id}`;

                    link.classList.toggle("active", isActive);

                    if (isActive) {
                        link.setAttribute("aria-current", "location");
                    } else {
                        link.removeAttribute("aria-current");
                    }
                });
            });
        },
        { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
}
