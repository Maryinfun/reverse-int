module.exports = function reverse(n) {
    let arr = n.toString();
    s = "";
    if (arr[0] === "-") {
      arr = arr.slice(1);
    }
    i = arr.length - 1;
    while (i >= 0) {
      s += arr[i];
      i--;
    }
    return Number(s);
};
