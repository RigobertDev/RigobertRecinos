"use strict";

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("responsive", !menuVisible);
  menuVisible = !menuVisible;
}

function seleccionar() {
  const nav = document.getElementById("nav");
  nav.classList.remove("responsive");
  menuVisible = false;
}

function efectoHabilidades() {
  const skills = document.getElementById("skills");
  const distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distanciaSkills >= 300) {
    const habilidades = Array.from(document.getElementsByClassName("progreso"));
    habilidades.forEach((habilidad, i) => {
      const clase = ["javascript", "htmlcss", "gitgithub", "photoshop", "linux", "comunicacion", "trabajo", "creativo", "responsabilidad", "liderazgo"][i];
      habilidad.classList.add(clase);
    });
  }
}

window.onscroll = function () {
  efectoHabilidades();
};
