let filterOutOdds = (...args) => args.filter(v => v % 2 ===0);


// let findMin = (...args) => args.reduce((min,val) =>
//     min < val ? min : val);

const findMin = (...args) => Math.min(...args);

//due to using the arrow function you need to put parenthesis for the return object
const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});

// const doubleAndReturnArgs = (arr,...args) => {
//     let doubled = args.map(val => val *2);
//     return [...arr, ...doubled];
// };
const doubleAndReturnArgs = (arr,...args) => [...arr,...args.map(val => val *2)];

items = [1,7675,4764,'yy'];

const removeRandom = items => {
    let indexRemove = Math.floor(Math.random()*items.length);
    return [...items.slice(0,indexRemove),...items.slice(indexRemove+1)]
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1,...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObject = {...obj};
    newObject[key] = val;
    return newObject;
}


/** Return a new object with a key removed. */

const removeKey= (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val; 
    return newObj;
};