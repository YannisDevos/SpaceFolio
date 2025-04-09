document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetElement = document.querySelector(this.getAttribute('href'));
  
      // Calculer la hauteur de la navbar
      const navbarHeight = document.querySelector('nav').offsetHeight + 80;
  
      // Scroller avec un offset pour éviter que la navbar cache la section
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    });
  });