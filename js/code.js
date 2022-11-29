// ======Math Methods====== //
// console.log("sqrt():",Math.sqrt(36));
// =====Return a middle element(s)======= //
let data = [9,3,1,"Peter",5,10];
// data.splice(3,1);
let onlyNumbers = data.filter( item => {
    if( typeof item != 'string')
        return item;
});
console.log("Max:",Math.max(...onlyNumbers));
// let size =data.length-1;
// console.log("Array size:",size);
// console.log("Element:",data[size]);
// console.log("at():",data.at(-1));
// let middleIndex = Math.trunc((data.length -1)/2);
// console.log("middleIndex:",middleIndex);
// console.log("middle Element:",data.slice(middleIndex, middleIndex +2));
// let middleIndex = Math.trunc((data.length -1)/2);
// if (middleIndex % 2 == 0) {
//     console.log(data.slice(middleIndex, middleIndex +2));
// }else {
//     console.log(data.middleIndex);
// }
// ===========================================================================
// ======String Methods====== //
