
const resumeDownload = document.getElementById("resumeDownload");

if (resumeDownload) {
    resumeDownload.addEventListener("click", (event) => {
        const resumePath = resumeDownload.getAttribute("href");

        if (!resumePath) {
            event.preventDefault();
            return;
        }

        console.log("Resume download requested:", resumePath);
    });
}