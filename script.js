
    
// const ids = [...document.querySelectorAll('.number')].map(el => el.id);
// console.log(ids);
// ids.forEach(element => {
// let number = document.getElementById(element);
// let counter = 0;

// if(element === 'number0' || element === 'number1'){
// setInterval(() => {
//     if(counter == 85){
//         clearInterval();
//     } else{
//         counter += 1;
//         number.innerHTML = counter + "%";
//     }
// },25 * 1000);

// }
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const top = document.getElementsByClassName('top');
