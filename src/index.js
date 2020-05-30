import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let f = e.filter(number => number % 2 === 0); 
console.log(f);
//Koristio sam funkcionalnu programsku paradigmu, jer je najkraca za napisati, a i rjesenje najljepse izgleda
