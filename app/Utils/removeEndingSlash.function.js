/**
 * Remove the ending slash character from a string
 * @param string {string}
 * @function
 */
export function removeEndingSlash(string) {
    return string.replace(/\/$/, "");
}