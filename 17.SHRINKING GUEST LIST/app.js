var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
var not_present = 'farhan';
var new_guset = 'Babar Azam';
guest_list[1] = new_guset;
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
console.log('\nUnfortuntely we can not arrange big table, Only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam.".concat(remove_guest, " you are not invited for dinner ."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\n\Yes you are still invited on tommorw dinner\nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
