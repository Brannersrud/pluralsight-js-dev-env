import numeral from 'numeral';
import './index.css';
const coursevalue = numeral(1000).format('$0,0.00')
console.log(`I would pay ${coursevalue} for this course`)