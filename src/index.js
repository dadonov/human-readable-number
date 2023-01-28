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
    let indices = number.toString().split("");
    if (indices.length === 1) {
        return ones[indices[0]];

        // 11- 19
    } else if (number > 10 && number < 20) {
        return teens[indices[1]];
    }
    // whole tens
    else if (indices.length === 2 && number % 10 == 0) {
        return tens[indices[0]];
    }
    // non whole tens
    else if (indices.length === 2 && number % 10 !== 0) {
        return tens[indices[0]] + " " + ones[indices[1]];
    }
    // whole hundreds
    else if (indices.length === 3 && number % 100 == 0) {
        return `${ones[indices[0]]} hundred`;
    }
    // 103 204 504 etc
    else if (indices.length === 3 && indices[1] == 0) {
        return `${ones[indices[0]]} hundred ${ones[indices[2]]}`;
    }

    else if (indices.length === 3 && indices[1] == 1) {
        return `${ones[indices[0]]} hundred ${teens[indices[2]]}`;
    }
    // 150 250 560 etc
    else if (indices.length === 3 && number % 100 !== 0 && number % 10 == 0) {
        return `${ones[indices[0]]} hundred ${tens[indices[1]]}`;
    }

    // 154 345 234 etc
    else if (indices.length === 3 && number % 100 !== 0 && number % 10 !== 0) {
        return `${ones[indices[0]]} hundred ${tens[indices[1]]} ${
            ones[indices[2]]
        }`;
    }
};

