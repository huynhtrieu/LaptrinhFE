// 1. Let, const
// 2. Template Literals
// 3. Multi-line String
// 4. Arrow funciton
// 5. Classes
// 6. Default parameter
// 7. Destructuring
// 8. Rest parametters
// 9. Spread
// 10. Enhanced object literals
// 11. Tagged template literal
// 12. Modules

import logger from '../logger/logger.js';
import * as constants from './constants.js';

console.log(constants);

logger('Test Message...', constants.TYPE_LOG);

// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

var name = 'Javascript';
var price = 1000;

var course = {
    name,
    price,
    getName() {
        return name;
    }
};

console.log(course);

