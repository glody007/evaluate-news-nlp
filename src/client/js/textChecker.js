function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

function notEmpty(inputText) {
    console.log("Checking if input is not empty")
    if(inputText) return true
    return false
}

export { checkForName, notEmpty }
