// class Hamster {
//     constructor(name="John"){
//         this.owner = ""
//         this.name = name
//         this.price = 15
//     }

//     wheelRun() {
//         console.log("squeak squeak")
//     }
//     eatFood() {
//         console.log("nibble nibble")
//     }

//     getPrice(){
//         return this.price
//     }
// }

// const hamster = new Hamster()
// console.log(hamster.owner)
// console.log(hamster.name)
// console.log(hamster.price)
// hamster.wheelRun()
// hamster.eatFood()
// console.log(hamster.getPrice())


// class Person extends Hamster{
//     constructor(name="John") {
//         super(name)
//         // this.name = name
//         this.age = 0
//         this.height = 0
//         this.weight = 0
//         this.mood = 0
//         this.hamsters = []
//         this.bankAccount = 0
//     }

//     getName(){
//         return this.name
//     }
//     getAge(){
//         return this.age
//     }
//     getWeight(){
//         return this.weight
//     }
//     greet(){
//         console.log("Hello " + this.name)
//     }
//     eat(){
//         this.weight += 1
//         this.mood += 1
//     }
//     exercise(){
//         this.weight -= 1
//     }

//     ageUp(){
//         this.age += 1
//         this.height += 1
//         this.weight += 1
//         this.mood  -= 1
//         this.bankAccount += 10
//     }

//     buyHamster(hamster){
//     this.hamsters.push(hamster)
//     this.mood += 10
//     this.bankAccount -= this.getPrice()
// }

// }
// const Timmy = new Person("Timmy")

// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()

// Timmy.eat()
// Timmy.eat()
// Timmy.eat()
// Timmy.eat()
// Timmy.eat()


// Timmy.exercise()
// Timmy.exercise()
// Timmy.exercise()
// Timmy.exercise()
// Timmy.exercise()


// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()





// const Gus = new Hamster("Gus") 
// Gus.owner = "Timmy"
// Timmy.buyHamster("Gus")



// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()
// Timmy.ageUp()



// Timmy.eat()
// Timmy.eat()
// Timmy.exercise()
// Timmy.exercise()

// Timmy.greet()
// console.log("Age: " + Timmy.getAge())
// console.log("Weight: " + Timmy.getWeight())
// console.log(Timmy.hamsters)

// class Dinner {
//     constructor(appetizer, entree, dessert) {
//         this.appetizer = appetizer
//         this.entree = entree
//         this.dessert = dessert
//     }
// }
// class Chef extends Dinner {
//     constructor(appetizer, entree, dessert) {
//         super(appetizer, entree, dessert)
//     }



//     food() {
//         console.log("Appetizer: " + this.appetizer + " Entree: " + this.entree + " Dessert: " + this.dessert)
//     }

// }

// const dinner1 = new Chef("Nachos", "Cheeseburger", "Strawberry Ice Cream")
// const dinner2 = new Chef("Artichoke Dip", "Steak", "Chocolate Cake")
// const dinner3 = new Chef("Crab Cakes", "Ravioli", "Cheesecake")

// dinner1.food()
// dinner2.food()
// dinner3.food()

