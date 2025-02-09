function validateString(value, explain = 'value') {
    if (typeof value !== 'string') throw new Error(`${explain} is not a string`)
}

function validateNumber(number, explain = 'number') {
    if (typeof number !== 'number') throw new Error(`${explain} is not a number`)
}

function validateRangeNumber(number, explain = 'number') {
    if (number < 1 || number > 10) throw new Error(`${explain} is not a number between 1 and 10`)
}

const validate = {
    string: validateString,
    number: validateNumber,
    number1to10: validateRangeNumber
}

export default validate