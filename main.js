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
    console.log('to prawda !');
}

if (age < 20) {
    console.log('masz mniej niż 20 lat');
} else if ((age >= 20) && (age <= 30)) {
    console.log('masz więcej niż 20 lat ale mniej niż 30');
} else {
    console.log('jesteś 31+');
}