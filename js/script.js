const textInput01 = document.querySelector(".text-input01")
const message = document.querySelector(".text-input02")

function encryptbutton() {
    const encryptedText = encrypt(textInput01.value)
    message.value = encryptedText
}

function encrypt(stringEncrypted) {
    let arrayOfCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncrypted = stringEncrypted.toLowerCase()

    for (let i = 0; i < arrayOfCode.length; i++) {
        if (stringEncrypted.includes(arrayOfCode[i][0])) {
            stringEncrypted = stringEncrypted.replaceAll(arrayOfCode[i][0], arrayOfCode[i][1])
        }
    }
    return stringEncrypted
}

function decryptbutton() {
    const decryptedText = decrypt(textInput01.value)
    message.value = decryptedText

}

function decrypt(stringDecrypted) {
    let arrayOfCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDecrypted = stringDecrypted.toLowerCase()

    for (let i = 0; i < arrayOfCode.length; i++) {
        if (stringDecrypted.includes(arrayOfCode[i][1])) {
            stringDecrypted = stringDecrypted.replaceAll(arrayOfCode[i][1], arrayOfCode[i][0])
        }
    }
    return stringDecrypted
}

function copy() {
    var copyText = document.querySelector(".text-input02")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand('copy')
    alert("O texto copiado é: " + copyText.value)
}