function newsLetter() {
  const button = document.getElementById("botao-enviar");

  function validaFormulario() {
    if (
      document.getElementById("nome-da-usuaria").value != "" &&
      document.getElementById("email-da-usuaria").value != ""
    ) {
      alert("Prontinho! Você receberá as novidades por email.");
    } else {
      alert("Por favor, preencha os campos nome e email");
    }
  }

  button.addEventListener("click", validaFormulario);
}

newsLetter();

function initTabNav() {
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
    tabContent.addEventListener("click", activeTab);
  }
}

initTabNav();

function initScrollSmooth() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSmooth();

function initAnimeScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    function animeScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - window.innerHeight * 0.6 < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animeScroll();

    window.addEventListener("scroll", animeScroll);
  }
}

initAnimeScroll();
