alert(Number("   123   ")); // 123
alert(Number("123z")); // NaN (error reading a number at "z")
alert(Number(true)); // 1
alert(Number(false)); // 0

alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("hello")); // true
alert(Boolean("")); // false

alert(Boolean("0")); // true
alert(Boolean(" ")); // spaces, also true (any non-empty string is true)

// https://javascript.info/type-conversions#summary

alert(5 % 2); // 1, the remainder of 5 divided by 2
alert(8 % 3); // 2, the remainder of 8 divided by 3
alert(8 % 4); // 0, the remainder of 8 divided by 4

alert(2 ** 2); // 2² = 4
alert(2 ** 3); // 2³ = 8
alert(2 ** 4); // 2⁴ = 16

alert(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
alert(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)

alert("1" + 2); // "12"
alert(2 + "1"); // "21"

//left to ----> right

alert(2 + 2 + "1"); // "41" and not "221"

alert("1" + 2 + 2); // "122" and not "14"

//Numeric conversion, unary +

// No effect on numbers
let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

// Converts non-numbers
alert(+true); // 1
alert(+""); // 0

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert(+apples + +oranges); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0

// let n = 2;
// n = n + 5;
// n = n * 2;
// This notation can be shortened using the operators += and *=:

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert(n); // 14

// let n = 2;

// n *= 3 + 5; // right part evaluated first, same as n *= 8

// alert(n); // 16

let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
alert(counter); // 3

// let counter = 2;
// counter--; // works the same as counter = counter - 1, but is shorter
// alert(counter); // 1

// let counter = 1;
// let a = ++counter; // (*)

// alert(a); // 2

// let counter = 1;
// let a = counter++; // (*) changed ++counter to counter++

// alert(a); // 1

// let counter = 0;
// counter++;
// ++counter;
// alert( counter ); // 2, the lines above did the same

// let counter = 0;
// alert(++counter); // 1

// let counter = 0;
// alert(counter++); // 0

// let counter = 1;
// alert( 2 * ++counter ); // 4

// let counter = 1;
// alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

// let counter = 1;
// alert( 2 * counter );
// counter++;

//----------------------------------------------------------------

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )

//Comma
// let a = (1 + 2, 3 + 4);

// alert(a); // 7 (the result of 3 + 4)

alert("2" > 1); // true, string '2' becomes a number 2
alert("01" == 1); // true, string '01' becomes a number 1

alert(true == 1); // true
alert(false == 0); // true

// let a = 0;
// alert( Boolean(a) ); // false

// let b = "0";
// alert( Boolean(b) ); // true

// alert(a == b); // true!

alert(0 == false); // true

alert("" == false); // true

//----------------------------------------------------------------

alert(0 === false); // false, because the types are different
alert(null === undefined); // false
alert(null == undefined); // true

alert(null > 0); // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true

// Mathematically, that’s strange. The last result states that “null is greater than or equal to zero”, so in one of the comparisons above it must be true, but they are both false.

// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)

// Why does it dislike zero so much? Always false!

// We get these results because:

// Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
// The equality check (3) returns false because undefined only equals null, undefined, and no other value.
