import app from './component1.js'
//import {banana as bana, orange} from './component2.js'
import * as fruits from './component2.js'
console.log('export default', app);

//console.log('export banana', banana);
//console.log('export orange', orange);

console.log('export * banana', fruits.banana);
console.log('export * orange', fruits.orange);