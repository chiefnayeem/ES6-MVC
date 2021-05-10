/**
 * Get the url query parameters
 * @param Param {string}
 * @function
 */
export function getParam(Param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(Param);
}