/**
 * This class processes the output we receive from the JOBE backend, looking for the string "&lt;img".
 * This is replaced with "<img", so that when the output is injected underneath the ActiveCode
 * element, an image shows up.
 */
export default class ImageTagParser {
    constructor(output, _parentId) {
        this.textResults = "";
        // do not mess up this next line, it is THE hack that makes turtle graphics and images work
        output = output.replaceAll("&lt;img", "<img");
        this.stdout = output || "";
    }
}
