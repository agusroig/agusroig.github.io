// const ids = [...document.querySelectorAll('.number')].map(el => el.id);
// console.log(ids);
// ids.forEach(element => {
// let number = document.getElementById(element);
// let counter = 0;

// setInterval(() => {
//     if(counter == 90){
//         clearInterval();
//     } else{
//         counter += 1;
//         number.innerHTML = counter + "%";
//     }
// },25);
// },);

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


