let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

let greatMagicians: string[] = make_great(magicians.slice());

console.log("Original magicians:");
show_magicians(magicians);

console.log("Great magicians:");
show_magicians(greatMagicians);
