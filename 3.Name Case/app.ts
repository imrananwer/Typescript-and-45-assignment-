// lowre case
let personName = "Imran";
console.log("lowercase:",personName.toLowerCase());
// upper case
console.log("uppecase:",personName.toLocaleUpperCase())
// Tite case
console.log("titlecase",personName.replace(/\bw/g,c => c.toUpperCase()));