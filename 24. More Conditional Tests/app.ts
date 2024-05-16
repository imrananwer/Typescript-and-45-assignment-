let car: string = 'subaru';
let age: number = 25
let number: number[] = [1,2,3,4];

// **String Tests**

// Test 1: Equality (True)
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru'); // Ture (case-insensitive)

// Test 2: Stric equality (False)
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False (case-insensitive)

// Test 3: Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); // Ture 

// Test 4: Inequality (False)
console.log("Is car !== 'Subaru'? I predict False.");
console.log(car !== 'Subaru'); // False (case-insensitive)

// **Lowercase Function Tests**

// Test 5: Lowercase coversion (True)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True (converted to lowercase)

// Test 6: Lowercase coversion (False)
console.log("Is car === car.toLowerCase()? predict False.");
console.log(car === car.toLowerCase()); // False (original value remains uppercase)

// **Numeical Tests**

// Test 7: Equality (Ture)
console.log("Is age == 25? I predict True.");
console.log(age == 25); // Ture

// Test 8: Inequality (False)
console.log("Is age != 30? I predict True.");
console.log(age != 30); // Ture

// Test 9: Greater than (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False

// Test 10: Less than or equal (True)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // True

// **Logical Operators**

// Test 11:AND (True)
console.log("Is age > 20 && age < 30? I predict Ture.");
console.log(age > 20 && age < 30 ); // True (both conditions met)

// Test 12:OR (False)
console.log("Is age > 30 || age < 18? I predict False.");
console.log(age > 30 || age < 18 ); // False (neither conditions met)

// **Array Tests**

// Test 13: In array (True)
console.log("Is 3 in numbers? I predict True.");
console.log(3 in number); // True (checks for index existence)

// Test 14:Not in array (False)
console.log("Is 5 not in number? I predict True.");
console.log(!(5 in number)); // True (negation of "in" operator)









