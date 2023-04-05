
class Polygon {
    constructor (arr){
        this._arrEdge = arr
    }

    //get methods
    get countSides (){
        return this._arrEdge.length
    }

    get perimeter (){
        return this._arrEdge.reduce ((total, current) => total + current, 0)
    }

}

class Triangle extends Polygon {

    //get methods
    get isValid (){
        if (this.countSides > 3)
            return false
        if (this._arrEdge[0] + this._arrEdge[1] <= this._arrEdge[2])
            return false
        else if (this._arrEdge[0] + this._arrEdge[2] <= this._arrEdge[1])
            return false
        else if (this._arrEdge[1] + this._arrEdge[2] <= this._arrEdge[0])
            return false
        return true
    }
}

class Square extends Polygon {
    
    // get methods
    get isValid (){
        if (this.countSides > 4)
            return false
        if(this._arrEdge.find( current => current !== this._arrEdge[0]) === undefined)
            return true
        return false
    }

    get area (){
        if (this.isValid){
            return Math.pow (this._arrEdge[0], 2)
        }
        return "square is not valid"
    }
}
