module.exports = function check(str, bracketsConfig) {
    // your solution
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let element = checkIt(bracketsConfig, str[i], false);
        if (element) {
            if (element[0] === element[1]) {
                if (arr.length) {
                    if (arr[arr.length - 1] === str[i]) arr.pop();
                    else arr.push(element[0]);
                } else arr.push(element[0]);
            } else arr.push(element[1]);
        } else {
            element = checkIt(bracketsConfig, str[i], true);
            if (element) {
                if (!arr.length) return false;
                if (str[i] !== arr.pop()) return false;
            } else return false;
        }
    }

    if (arr.length) return false;
    else return true;
};

function checkIt(arr, item, isCloseBrack) {
    let Pos = Number(isCloseBrack);
    for (let i = 0; i < arr.length; i++)
        if (arr[i][Pos] === item) {
            return arr[i];
        }
    return false;
}
