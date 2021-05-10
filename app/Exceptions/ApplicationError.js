import {Exception} from "../Services/Providers/Core/Exception.js";
import {RenderDOM} from "../Services/Providers/Core/RenderDOM.js";

export class ApplicationError extends Exception {
    handle() {
        document.head.insertAdjacentHTML("beforeend", `
            <style type="text/css">
                body {
                    background: #242323 !important;
                }
                .error-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                
                .error-container .__error {
                    height: auto;
                    width: 400px;
                    background: #ea0707;
                    color: #ffffff;
                    border-radius: 3px;
                }
                
                .error-container .__error .__message {
                    padding: 20px;
                    font-weight: bold;
                    font-size: 14px;
                    display: block;
                    word-wrap: break-word;
                }
                
                .error-container .__error .__message h3 {
                    margin: 0;
                    font-size: 20px;
                }
            </style>
        `);

        document.getElementById("root").innerHTML = `
            <div class="error-container">
                <div class="__error">
                    <div class="__message">
                        <h3>Fatal Error</h3>
                        <p>The application has been complied with errors and stopped working!</p>
                        
                        <br/>
                        
                        <div>Body:</div>
                        <div>${this.exception.message}</div>
                        
                        <br/>
                        <br/>
                        
                        <div>Stack:</div>
                        <div>${this.exception.stack}</div>
                    </div>
                </div>
            </div>
        `;
    }
}