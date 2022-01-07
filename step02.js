// console.log("1번");
// function comparison(a, b) {
//     if (a > b) {
//         console.log(">");
//     } else if (a < b) {
//         console.log("<");
//     } else {
//         console.log("==");
//     }
// }
// console.log(comparison(1, 2));

// console.log("2번");
// function testScore(a) {
//     if (a >= 90) {
//         console.log("A");
//     } else if (90 > a && a >= 80) {
//         console.log("B");
//     } else if (80 > a && a >= 70) {
//         console.log("C");
//     } else if (70 > a && a >= 60) {
//         console.log("D");
//     } else {
//         console.log("F");
//     }
// }
// console.log(testScore(100));
// console.log("");

// console.log("3번");
// function leapYear(b) {
//     if (b % 4 == 0 && b % 100 != 0) {
//         console.log(1);
//     } else if (b % 4 == 0 && b % 400 == 0) {
//         console.log(1);
//     } else {
//         console.log(0);
//     }
// }
// console.log(leapYear(2012));
// console.log("");

// console.log("4번");
// function quadrant(a, b) {
//     if (a > 0 && b > 0) {
//         console.log("Quadrant 1");
//     } else if (a < 0 && b > 0) {
//         console.log("quadrant 2");
//     } else if (a < 0 && b < 0) {
//         console.log("Quadrant 3");
//     } else {
//         console.log("Quadrant 4");
//     }
// }
// console.log(quadrant(-1, 2));
// console.log("");

console.log("5번");
function alarm(a, b) {
    if (b >= 45) {
        console.log(a + "시" + (b - 45) + "분");
    } else if (a < 1 && b < 45) {
        console.log(24 - 1 + "시" + (60 + b - 45) + "분");
    } else console.log(a + "시" + (60 + b - 45) + "분");
}
console.log(alarm(23, 44));
console.log("");
