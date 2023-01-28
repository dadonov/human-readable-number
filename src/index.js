let ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
let teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
let tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

module.exports = function toReadable(number) {
    let digits = number.toString().split("");

    // one, two, three...nine
    if (digits.length === 1) {
        return ones[digits[0]];

        // eleven, twelve...nineteen
    } else if (number > 10 && number < 20) {
        return teens[digits[1]];
    }
    // ten, twenty, thirty...ninety
    else if (digits.length === 2 && number % 10 == 0) {
        return tens[digits[0]];
    }
    // twenty one, twenty two...ninety nine
    else if (digits.length === 2 && number % 10 !== 0) {
        return `${tens[digits[0]]} ${ones[digits[1]]}`;
    }
    // one hundred, two hundred...nine hundred
    else if (digits.length === 3 && number % 100 == 0) {
        return `${ones[digits[0]]} hundred`;
    }
    // one hundred one, one hundred two...nine hundred nine
    else if (digits.length === 3 && digits[1] == 0) {
        return `${ones[digits[0]]} hundred ${ones[digits[2]]}`;
    }
    //one hundred ten, one hundred eleven...nine hundred nineteen
    else if (digits.length === 3 && digits[1] == 1) {
        return `${ones[digits[0]]} hundred ${teens[digits[2]]}`;
    }
    // one hundred twenty, one hundred thirty...nine hundred ninety
    else if (digits.length === 3 && number % 100 !== 0 && number % 10 == 0) {
        return `${ones[digits[0]]} hundred ${tens[digits[1]]}`;
    }

    // one hundred twenty one, one hundred twenty two...nine hundred ninety nine
    else if (digits.length === 3 && number % 100 !== 0 && number % 10 !== 0) {
        return `${ones[digits[0]]} hundred ${tens[digits[1]]} ${
            ones[digits[2]]
        }`;
    }
};
