var not_present = 'farhan';
var new_guest = 'Babar Azam';
var guest_list = ["sarfaraz", "shaheen",];
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + '\nWe invited you on dinner tomorrow.\n\nThank you');
}
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + '\nWe invited you on dinner tomorrow.\n\nThank you');
}
