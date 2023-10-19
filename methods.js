const sumRange = (num) => {
    return (num == 1) ? 1 : num += sumRange(num - 1)
}


const power = (base, exp) => { 
    return (exp == 0 ) ? 1 : base * power(base, exp - 1)
}

const factorial = (num) => { 
    return (num === 1) ? 1 : num *= factorial(num - 1);
}

const all = (arr, cb) => { 
    if (arr.length === 0) {return true};
    if (cb(arr[0])) {
        arr.shift();
        return all(arr, cb);
    }
    else {
        return false;
    }
}

const productOfArray = (arr) => { 
    if (arr.length > 1) {
        arr[arr.length -1] *= arr[0];
        arr.shift()
        return productOfArray(arr);
    }
    else 
    {
        return arr[0];
    }
}

const contains = (obj, val) => {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            return contains(obj[key], val);
        }

        if (obj[key] === val) {
            return true
        }
    }
    return false;
}

//'Code-golfing' version of above solution, bad readability, but kinda fun. 
const contains2 = (obj, val) => { 
    for (const key in obj) {
        return (typeof obj === 'object') ? contains(obj[key], val) : (obj[key] === val) ? true : false;
    }
}

const totalIntegers = (arr) => { 
    if (arr.length === 0) return 0;

    let total = 0;
    let ele = arr.shift();

    if (Array.isArray(ele)) {
        total += totalIntegers(ele);
    }
    else if (Number.isInteger(ele)) {
        total += 1;
    }

    return total + totalIntegers(arr);
}

const sumSquares = (arr) => { 
    if (arr.length === 0) return 0;

    let total = 0;
    let ele = arr.shift();

    if (Array.isArray(ele)) {
        total += sumSquares(ele);
    }
    else if (Number.isInteger(ele)) {
        total += (ele ** 2);
    }

    return total + sumSquares(arr);
}

const replicate = (mult, num) => {
    if (mult <= 0) { return [] };
    return [num].concat(replicate(--mult, num));
}
