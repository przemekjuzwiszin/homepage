console.log('siema');

const name = 'Maciek Korsan';
const age = 35;

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


switch (age) {
    case 20:
        console.log('masz równo 20 lat');
        break;
    case 30:
        console.log('masz równo 30 lat');
        break;
    default:
        console.log(`masz ${age} lat`);
        break;
}


let oldIndicator;

if (age > 70) {
    oldIndicator = 'yes 2';
} else {
    oldIndicator = 'no 2';
}
console.log(oldIndicator);


const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);

const zmienna = 'hura';
console.log(zmienna);

function calculate(x) {
    x = x + 3;
    console.log(`tradycyjnie ${x}`);
    return x * 7
}

console.log(calculate(2));


const calculateFat = x => (x + 3) * 7;

console.log(calculateFat(2));

const myName = 'Przemek';
const myAge = 34;

const welcome = (myName,myAge) => {
    console.log(`Witaj ${myName} masz ${myAge} lata:)`);
}