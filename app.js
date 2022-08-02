const pwdOutput = document.querySelector('#password')
const pwdLength = document.querySelector('#length')
const pwdLengthTxt = document.querySelector('#lengthText')
const incSymbols = document.querySelector('#symbols')
const incNumbers = document.querySelector('#numbers')
const incLower = document.querySelector('#lowercase')
const incUpper = document.querySelector('#uppercase')
const incSimilar = document.querySelector('#similar')
const copyBtn = document.querySelector('.copy')

let symbols = ['@', '#', '$', '%']
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

const characterCodes = Array.from(Array(26)).map((_, i) => i + 97)

const lowerCase = characterCodes.map(lower => String.fromCharCode(lower))

const upperCase = lowerCase.map(upper => upper.toUpperCase())

const passwordGenerator = (length, hasNumbers, hasSymbols, hasUpperCase, hasLowerCase) => {

  hasSymbols = incSymbols.checked
  hasNumbers = incNumbers.checked
  hasLowerCase = incLower.checked
  hasUpperCase = incUpper.checked
  const availableCharacters = [
    ...(hasSymbols ? symbols : []),
    ...(hasNumbers ? numbers : []),
    ...(hasLowerCase ? lowerCase : []),
    ...(hasUpperCase ? upperCase : []),
  ]
  let password = '';

  if (availableCharacters.length === 0) return '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length)

    password += availableCharacters[randomIndex]
  }
  return password

}

pwdLength.oninput = (length, symbCheck, numCheck, lowerCheck, upperCheck) => {
  pwdLengthTxt.innerText = pwdLength.value

  length = pwdLength.value
  // symbCheck = incSymbols.checked

  pwdOutput.value = passwordGenerator(length, true, true, true, true)

  copyBtn.onclick = () => {
    pwdOutput.select()
    pwdOutput.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(pwdOutput.value)

    alert("Password copied!")
  }

}


