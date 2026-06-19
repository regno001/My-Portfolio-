const projects = [
  {
    title: "WatchParty Web Application",
    type: "Real-time web app",
    description: "A collaborative application where people can video call, chat, watch YouTube together, and share media in real time.",
    stack: ["JavaScript", "Real-time", "Full-stack"],
    url: "https://watchers-watchparty-web-application.onrender.com/"
  },
  {
    title: "Food Ordering Platform",
    type: "Commerce system",
    description: "A complete ordering experience with secure authentication and an admin panel for managing users, orders, and menu items.",
    stack: ["PHP", "MySQL", "Admin panel"]
  },
  {
    title: "AI Traffic Control System",
    type: "Applied AI",
    description: "A dynamic traffic management system using lane and vehicle detection, with ambulance priority and violation detection.",
    stack: ["Python", "Computer vision", "AI"]
  },
  {
    title: "Hand Sign Detection",
    type: "Computer vision",
    description: "A real-time application that detects and interprets hand gestures for natural interaction and control.",
    stack: ["Python", "Machine learning", "Real-time"]
  },
  {
    title: "DoCode",
    type: "Interactive classroom",
    description: "A real-time coding classroom where teachers can host rooms and students can join to practice together.",
    stack: ["JavaScript", "Education", "Real-time"],
    url: "https://docode-e4jc.onrender.com/"
  }
];

const container = document.getElementById("projects-container");

projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.setAttribute("data-reveal", "");

  const tags = project.stack.map((item) => `<span class="tag">${item}</span>`).join("");
  const liveLink = project.url
    ? `<a class="project-live-link" href="${project.url}" target="_blank" rel="noreferrer" aria-label="Open ${project.title} live application">View live <span aria-hidden="true">&nearr;</span></a>`
    : "";
  card.innerHTML = `
    <div class="project-card-top">
      <span class="project-type">${project.type}</span>
      <span class="project-card-index">${String(index + 1).padStart(2, "0")}</span>
    </div>
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <div class="project-tags">${tags}</div>
    ${liveLink}
  `;

  container.appendChild(card);
});
