/**
 * Remove the starting slash character from a string
 * @param string {string}
 * @function
 */
export function removeStartingSlash(string) {
    if(string.indexOf('/') === 0) {
        return string.replace('/','');
    }

    return string;
}