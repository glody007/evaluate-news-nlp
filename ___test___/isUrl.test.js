// Import the js file to test
import { isUrl } from "../src/client/js/formHandler";

describe("Testing the text is not empty functionality", () => {
test("Testing the isUrl() function", () => {
    // Define the input for the function, if any, in the form of variables/array
    const inputs = ['https://medium.com/@antoine.champion/how-to-generate-music-using-code-c0413909f02', 'www.goo', '', '.com']
    // Define the expected output, if any, in the form of variables/array
    const outputs = [true, false, false, false]
    // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    expect(isUrl).toBeDefined();
    expect(isUrl(inputs[0])).toEqual(outputs[0])
    expect(isUrl(inputs[1])).toEqual(outputs[1])
    expect(isUrl(inputs[2])).toEqual(outputs[2])
    expect(isUrl(inputs[2])).toEqual(outputs[3])
})});