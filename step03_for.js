// console.log("1번");
// 구구단
// function gob(a) {
//     for (var i = 1; i <= 9; i++) {
//         console.log(a + " * " + i + " = " + a * i);
//     }
// }
// console.log(gob(2));
// console.log("");

// console.log("2번");
// 합구하기라 패스
// console.log("");

// console.log("3번");
// a까지 합구하기
// function addAll(a) {
//     var sum = 0;
//     for (var i = 1; i <= a; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }
// console.log(addAll(4));
// console.log("");

// console.log("4번");
// 합구하기 패스
// console.log("");

// console.log("5번");
// a까지 찍기
// function pickN(a) {
//     for (var i = 1; i <= a; i++) {
//         console.log(i);
//     }
// }
// console.log(pickN(5));
// console.log("");

// console.log("6번");
// a까지 거꾸로 찍기
// function printAll(a) {
//     for (var i = a; i >= 1; i--) {
//         console.log(i);
//     }
// }
// console.log(printAll(5));
// console.log("");

// console.log("7번");
// 입력값이 3가지
// Case #i : a+b
// function caseNumber(a) {
//     for (var i = 1; i <= a; i++) {
//         console.log("Case " + "#" + i + ":");
//     }
// }
// console.log(caseNumber(5));
// console.log("");

// console.log("8번");
// 7번 확장형이라 패스
// Case #i : a + b = (a+b);
// console.log("");

// console.log("9번");
// 별 찍기 1
// function printStar(a) {
//     var star = "";
//     for (var i = 1; i <= a; i++) {
//         star += "*";
//         console.log(star);
//     }
// }
// console.log(printStar(5));
// console.log("");

console.log("for문//2439//10번");
//별 찍기 2
function printStarReverse(a) {
    var star = "";
    var space = "";
    for (var i = 1; i <= a; i++) {
        star += "*";
        for (var j = 0; j < a - i; j++) {
            space += " ";
        }
        console.log(space + star);
        space = "";
    }
}
console.log(printStarReverse(5));
// console.log("");

// console.log("11번");
// x보다 작은수
// console.log("");
