var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Repected Sir/Madam ' + guest_list[i] + ',\nWe invitd  you on dinner tomorrow.\nThank You\n');
}
var not_present = 'farhaan';
var new_guest = 'Babar Azam';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Repected Sir/Madam ' + guest_list[i] + ',\nWe invitd  you on dinner tomorrow.\nThank You\n');
}
console.log("Mr. ".concat(not_present, " will not coming tommorrow dinner."));
