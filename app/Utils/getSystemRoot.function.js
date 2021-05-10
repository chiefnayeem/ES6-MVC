import {SystemConfig} from "../../Config/system.config.js";

export function getSystemRoot() {
    return SystemConfig.production ? (SystemConfig.productionRoot) : SystemConfig.developmentRoot;
}