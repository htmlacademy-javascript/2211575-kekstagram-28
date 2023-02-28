let stringLength = function (string, maxLenght) {
    let stringLength = (string.length)
    if (stringLength <= maxLenght) {
        return true
    }

    return false
}

stringLength('привет', 6);

let palindrome = function (string) {
    let reverseString = string.split('').reverse().join('');
    if (string === reverseString) {
        return true
    }
    return false
}

palindrome('шалаш')

let onlyNumber = function (number) {
    let onlyNumber = (parseInt(number,10))
    console.log(onlyNumber)
    return
}

onlyNumber('56 корова')


let veryScary = function (string,minLength,symbol) {
    let actualPad = minLength - string.length;
    if (actualPad <= 0) {
        return string;
    }

    return symbol.slice(0, actualPad % symbol.length) + symbol.repeat(actualPad / symbol.length) + string;
}

console.log(veryScary('q', 4 , 'we'))
