import {Vector} from './vector.js';

let vector1 = new Vector(1,2,1);
let vector2 = new Vector(0,1,0);

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


export function norma(vector) {
    return Math.sqrt(vector.getX()**2 + vector.getY()**2 + vector.getZ()**2);
}


export function crossProduct(vector1,vector2){
    let vector = new Vector(1,1,1);
    vector[0] = (vector1[1] * vector2[2]) - (vector1[2] * vector2[1])
    vector[1] = (-vector1[0] * vector2[2]) + (vector1[2] * vector2[0])
    vector[2] = (vector1[0] * vector2[1]) - (vector1[1] * vector2[0])

    return norma(vector)
}

export function scalarProduct(vector1,vector2){
    let vector = new Vector(1,1,1);

}

console.log(norma(vector1,vector2))

