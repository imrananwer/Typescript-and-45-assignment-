let guest_list : string [] = ['ali','farhan','raza','ayesha'];
for(let i=0; i<guest_list.length; i++){
    console.log('Repected Sir/Madam '+ guest_list[i]+',\nWe invitd  you on dinner tomorrow.\nThank You\n')
}
let not_present : string = 'farhaan';
let new_guest : string = 'Babar Azam';
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Repected Sir/Madam '+ guest_list[i]+',\nWe invitd  you on dinner tomorrow.\nThank You\n')
}
console.log(`Mr. ${not_present} will not coming tommorrow dinner.`)
