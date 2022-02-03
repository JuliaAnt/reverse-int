module.exports = function reverse(n) {
    let str = String(Math.abs(n));
    let arr = str.split("");
    let revArr = arr.reverse();
    let newStr = revArr.join("");
    return +newStr;
};
