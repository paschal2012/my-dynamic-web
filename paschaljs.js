// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = 
        document.body.classList.contains("dark-mode") ? "Toggle Light Mode" : "Toggle Dark Mode";
});

// Skill info
const skills = {
    HTML: "HTML is the standard language for creating web pages. I use it to build accessible and semantic websites.",
    CSS: "CSS styles and beautifies the web. I use modern layouts like Flexbox and Grid for responsive designs.",
    "C++": "C++ is a powerful programming language. I use it for problem-solving, algorithms, and systems programming.",
    JavaScript: "JavaScript adds interactivity to web pages. I use it for dynamic content, animations, and full-stack apps."
};

document.querySelectorAll(".skill-btn").forEach(button => {
    button.addEventListener("click", () => {
        const skill = button.dataset.skill;
        document.getElementById("skill-description").textContent = skills[skill];
    });
});

// Example project list
const projects = [
    {
        title: "Secure Login System",
        description: "A login system with hashed passwords and authentication tokens.",
        link: "#"
    },
    {
        title: "Network Scanner",
        description: "A Python-based tool for scanning local network devices and ports.",
        link: "#"
    },
    {
        title: "Portfolio Website",
        description: "This very site! Designed and built from scratch using HTML, CSS, and JS.",
        link: "#"
    }
];

const projectContainer = document.getElementById("project-container");
projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectContainer.appendChild(card);
});
