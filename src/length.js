const a = "terre";
//affiche le caractère à la position 1
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

console.log(a.length);

if (a && a.length >= 5) {
  console.log("a est plus long que 5");
}

//recuperer le dernier caractère
console.log(a[a.length - 1]);

const b = new String("terre");
console.log(b);
