import {getSystemRoot} from "./getSystemRoot.function.js";
import {removeEndingSlash} from "./removeEndingSlash.function.js";

export function includeStyleSheet(path) {
    const cssPath = removeEndingSlash(getSystemRoot()) + "/resources/css/" + path;

    document.querySelector('head').innerHTML += '<link rel="stylesheet" href="' + cssPath + '" type="text/css"/>';
}