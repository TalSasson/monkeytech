import store from '../store'

const calcLetterFromPinDigits = (digArray) => String.fromCharCode(
    digArray.reduce((acc, num, index) => {
    if (index % 2 === 0) {
      return acc + +num
    }
    let sum = +num * 2
      if (sum >= 10) {
        return acc + [...sum.toString()].reduce((digitsSum, n) => digitsSum + +n, 0)
      }
      return acc + sum
    }, 0) % 26 + 65)

function pinCodeValidation() {
    const regex = /^JN-(\d{4})-(\d{4})-([A-Z]{2})$/
    const errorMsg = 'Invalid Pin Code, Please try again'
    const pinCodeParts = store.getState().pinCode.match(regex)

    if (!pinCodeParts) {
        return errorMsg
    }

    const letterPart1 = calcLetterFromPinDigits([...pinCodeParts[1]])
    const letterPart2 = calcLetterFromPinDigits([...pinCodeParts[2]])

    if (`${letterPart1}${letterPart2}` !== pinCodeParts[3]) {
        return errorMsg
    }
    return ''
}

export default pinCodeValidation