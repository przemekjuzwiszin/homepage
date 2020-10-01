console.log('siema');


const name = 'Maciek Korsan';
const age = 31;

let maciek = null;

console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat`);

console.log('witaj przybyszu')


const about = document.querySelector('.about__paragraph--js');
console.log(about.innerHTML);
about.innerHTML = `<strong>Nazywam</strong> się ${name} i mam ${age} lat`;


const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[3]);

if ('javascript' != 'java') {
    console.log('to prawda !')
}