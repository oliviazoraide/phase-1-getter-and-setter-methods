class Circle {
    constructor(radius) {
        this.radius = radius
    }
    get diameter() {
        return this.radius * 2
    }
    get circumference() {
        return Math.PI * this.diameter
    }
    get area() {
        return Math.PI * (this.radius * this.radius)
    }
    set diameter(newRadius) {
        this.radius = newRadius/2
    }
    set circumference(newRadius) {
        this.radius = newRadius / (Math.PI * 2)
    }
    set area(newRadius) {
        this.radius = Math.sqrt(newRadius/Math.PI)
    }
}