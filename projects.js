const projects = [
  {
    title: "WatchParty Web Application",
    description:
      "Collaborative web application enabling users to video call, chat, watch YouTube videos, and share photos and videos in real time."
  },
  {
    title: "Food Ordering Website with Admin Panel",
    description:
      "Developed a complete food ordering system using PHP, featuring secure authentication and an admin panel for managing orders, users, and menu items."
  },
  {
    title: "Traffic Control System using AI",
    description:
      "Python-based system for dynamic traffic management using vehicle and lane detection, including ambulance priority handling and traffic violation detection."
  },
  {
    title: "Hand Sign Detection using Python",
    description:
      "AI-powered application that detects and interprets hand gestures for real-time interaction and control."
  }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  container.appendChild(card);
});
