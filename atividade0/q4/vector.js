export default class Vector{
    constructor(coordX, coordY, coordZ){
        this.x = coordX
        this.y = coordY
        this.z = coordZ
    }
    
    setX(coordX) {
        this.x = coordX
    }

    setY(coordY){
        this.y = coordY
    }

    setZ(coordZ){
        this.z = coordZ
    }

    getX(){
        return this.x
    }

    getY(){
        return this.y;
    }
    getZ(){
        return this.z;
    }
}