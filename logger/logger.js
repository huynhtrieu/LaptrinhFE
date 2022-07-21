import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from '../.vscode/constants.js';


function logger(log, type = TYPE_LOG) {
    console.log(log);
}



export default logger;
