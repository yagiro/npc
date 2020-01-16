export const createArray = (length, item) => {
    let arr1 = [ item ],
        arr2 = [];
    while (length > 0) {
        if (length & 1) arr2 = arr2.concat(arr1);
        arr1 = arr1.concat(arr1);
        length >>>= 1;
    }
    return arr2;
}

export const createArray2 = (length, item) => {
   return Array(length).fill(item);
};

export const hexToRgb = (hex) => {
    const bigint = parseInt(hex.substr(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    const result = r + "," + g + "," + b;
    return result;
};