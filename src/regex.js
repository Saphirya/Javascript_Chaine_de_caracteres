//utilisation de regex
//regex est un langage de programmation
//utilisé pour décrire des expressions
//complexes

const a = "je suis le 645soleil";
const evaluate = /\d{3}[A-Z]?/.test(a);

console.log(a);
console.log(evaluate);

//extraire les parties qui match avec .exec
const b = "je suis le 645soleil";
const c = /\d{3}[A-Z]?/.exec(b);
console.log(c);

//replacer les parties qui match avec .replaceAll
const d = "maphoto_26556.jpg";
//const evaluate = .test(a);

console.log(d.replaceAll(/\d/g, "a"));

console.log(d);
