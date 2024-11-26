const a = "soleil";
const b = a.charAt(0);
console.log(b);

//endsWith
//sert a verifier si une chaine
//de caractères se termine par ce qui est recherché
const c = "je suis le Soleil";
const d = c.endsWith("eil");
console.log(d);

// startsWith
// sert a verifier si une chaine
// de caractères commence par ce qui est recherché
const e = "je suis le Soleil";
const f = e.startsWith("je");
console.log(f);

// indexOf
// sert a trouver la position d'un caractère
// dans une chaine de caractères
const g = "je suis le Soleil";
const h = g.indexOf("suis");
console.log(h);

//replace
// sert a remplacer un caractère
// dans une chaine de caractères
const i = "je suis le Soleil";
const j = i.replace("le", "pas le");
console.log(j);

//search
// sert a trouver une chaine de caractères
// dans une autre chaine de caractères
const k = "je suis le Soleil";
const l = k.search("le");
console.log(l);

//slice
// sert a extraire une portion de la chaine
// de caractères
const m = "je suis le Soleil";
const n = m.slice(0, m.length);
console.log(n);

//trim
// sert a supprimer les espaces
// à gauche et à droite d'une chaine
const o = "je    suis le Soleil";
const p = o.trim();
console.log(p);

//toUpperCase
// sert a transformer une chaine
// de caractères en majuscules
const q = "je suis le Soleil";
const r = q.toUpperCase();
console.log(r);

//toLowerCase
// sert a transformer une chaine
// de caractères en minuscules
const s = "je suis le Soleil";
const t = s.toLowerCase();
console.log(t);

//split
// sert a séparer une chaine
// de caractères en plusieurs chaines
const u = "je suis le Soleil";
const v = u.split(" ");
console.log(v);
