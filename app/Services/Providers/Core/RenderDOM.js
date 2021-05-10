import {getSystemRoot} from "../../../Utils/getSystemRoot.function.js";
import {ApplicationError} from "../../../Exceptions/ApplicationError.js";

export class RenderDOM {
    static render(viewPath, props) {
        window.viewProps = props;

        let xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let htmlElement = xmlhttp.responseText;

                htmlElement.split('{{').filter(val => val.includes('}}')).map(val => {
                    htmlElement = htmlElement.replace(val.substring(0, val.indexOf('}}')), eval(val.substring(0, val.indexOf('}}'))));
                });

                htmlElement = htmlElement.replace("{{", "");
                htmlElement = htmlElement.replace("}}", "");


                RenderDOM.insertHTML(htmlElement, document.getElementById("root"));

            } else if(this.status === 404) {
                new ApplicationError({
                    message: `View "${getSystemRoot()}/resources/views/${viewPath}" not found!`,
                    stack: '',
                });
            }
        }

        xmlhttp.open('GET', `${getSystemRoot()}/resources/views/${viewPath}`);
        xmlhttp.send();
    }

    static insertHTML(html, dest, append = false) {
        // if no append is requested, clear the target element
        if (!append) dest.innerHTML = '';
        // create a temporary container and insert provided HTML code
        let container = document.createElement('div');
        container.innerHTML = html;
        // cache a reference to all the scripts in the container
        let scripts = container.querySelectorAll('script');
        // get all child elements and clone them in the target element
        let nodes = container.childNodes;
        for (let i = 0; i < nodes.length; i++) dest.appendChild(nodes[i].cloneNode(true));
        // force the found scripts to execute...
        for (let i = 0; i < scripts.length; i++) {
            let script = document.createElement('script');
            script.type = scripts[i].type || 'text/javascript';
            if (scripts[i].hasAttribute('src')) script.src = scripts[i].src;
            script.innerHTML = scripts[i].innerHTML;
            document.head.appendChild(script);
            document.head.removeChild(script);
        }
        // done!
        return true;
    }
}