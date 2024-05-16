let magicians: string[] = [ "Don", "Rameez ","chris"];

function make_great (magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the Great";
    }
}