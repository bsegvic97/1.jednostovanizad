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
var f = [];
for (var i = 0; i < e.length; i++) {
  if (e[i] % 2 === 0) f.push(e[i]);
}
console.log(f);
//Kao što vidimo korištena je imperativna programska paradigma, koristio sam je jer smatram da nema potrebe za izmisljanjem tople vode(prejednostavan zadatak)
//s obzirom da ima samo jedna radnja, nema potrebe pravit ovu paradigmu proceduralnom 
//koristit objektnu za ovakav zadatak mi izgleda suludo
