
// get active link on click
const links = document.querySelectorAll('.nav-link');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}

// start skills animation when is visible

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
      const circle0 = entry.target.querySelectorAll('.circle0');
      const circle1 = entry.target.querySelectorAll('.circle1');
      const circle2 = entry.target.querySelectorAll('.circle2');
      if (entry.isIntersecting) {
        circle0.forEach( el => {
            el.classList.add('circle-transition');
        }),    
        circle1.forEach( el => {
            el.classList.add('circle-transition1');
        }),   
        circle2.forEach( el => {
            el.classList.add('circle-transition2');
        })   
        return; // if we added the class, exit the function
      } 
      // We're not intersecting, so remove the class!
      circle0.forEach( el => {
        el.classList.remove('circle-transition');
    }),
    circle1.forEach( el => {
        el.classList.remove('circle-transition1');
    }),    
    circle2.forEach( el => {
        el.classList.remove('circle-transition2');
    })   
    });
  });

  
observer.observe(document.querySelector('.skills'));

//   smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


