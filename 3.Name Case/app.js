// lowre case
var personName = "Imran";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppecase:", personName.toLocaleUpperCase());
// Tite case
console.log("titlecase", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
