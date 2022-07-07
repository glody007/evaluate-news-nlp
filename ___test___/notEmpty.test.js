// Import the js file to test
import { notEmpty } from "../src/client/js/textChecker";

describe("Testing the text is not empty functionality", () => {
test("Testing the notEmpty() function", () => {
    // Define the input for the function, if any, in the form of variables/array
    const inputs = ['www.goo', '', '.com']
    // Define the expected output, if any, in the form of variables/array
    const outputs = [true, false, true]
    // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    expect(notEmpty).toBeDefined();
    expect(notEmpty(inputs[0])).toEqual(true)
    expect(notEmpty(inputs[1])).toEqual(false)
    expect(notEmpty(inputs[2])).toEqual(true)
})});