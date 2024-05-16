let not_present : string = 'farhan';
let new_guest : string = 'Babar Azam';
let guest_list = ["sarfaraz","shaheen", ]
guest_list[1] = new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam'+ guest_list[i] + '\nWe invited you on dinner tomorrow.\n\nThank you')
}
guest_list.unshift ('shaheen','sarfaraz','rizwan');
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam'+ guest_list[i] + '\nWe invited you on dinner tomorrow.\n\nThank you')
}
