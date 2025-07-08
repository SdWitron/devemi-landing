const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")){
    navToggle.setAttribute("aria-lebel", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});


  function toggleInfo(element) {
    const servicios = document.querySelectorAll('.servicio');

    servicios.forEach(servicio => {
      if (servicio !== element) {
        servicio.classList.remove('active');
      }
    });

    element.classList.toggle('active');
  }


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    nombre: this.nombre.value,
    correo: this.correo.value,
    empresa: this.empresa.value,
    telefono: this.telefono.value,
    mensaje: this.mensaje.value,
    fecha: new Date().toLocaleString()
  };

  const contactos = JSON.parse(localStorage.getItem("contactos") || "[]");
  contactos.push(formData);
  localStorage.setItem("contactos", JSON.stringify(contactos));

  alert("Tu mensaje ha sido guardado. ¡Gracias!");
  this.reset();
});

