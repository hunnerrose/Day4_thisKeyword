//1. Defining forEach

// Defining forEach: What do we use the forEach function to do?
// -- To run a callback function for each element in an array

// First,let's define a forEach function, which accepts an array and a callback function, then calls the callback with every element in the array. We saw how this would be defined briefly a few lessons ago. 

function forEach(array, callback){
	for(let i=0;i < array.length; i++){
      let element = array[i]
      callback(element)
  }
}

forEach([ 1, 2, 3 ], function(number){
    console.log('iteration', number)
})




//2. Defining "Object Method"

//What will the following log?

let dog = {
    sound: 'Arrrf!',
    playSound: function(){
        console.log(this.sound)
    }
}

dog.playSound()

//"Arrf!"

// Finish the area method below to return the width of the rectangle times the height of the rectangle. Do not hard-code 10000.

let rectangle = {
    width: 100,
    height: 100, 
    area: function(){
        return this.width * this.height // <-- Replace null
    }
}

console.log(rectangle.area())

// What will the following code log?

let dog = {
    sound: 'Arrrf!',
    playSound: function(){
        console.log(this.sound)
    }
}

let cat = {
    sound: 'Meoowww!',
    playSound: dog.playSound
}

cat.playSound()

// 'Meoowww!'





//3. Using this with forEach

//Now that we know how this works, let's refactor our forEach function to use this keyword to reference the array, instead of a parameter.

let myNumbers = [ 1, 2, 3 ]
myNumbers.forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
}
myNumbers.forEach(function(element){
    console.log(element)
})

//4. Assigning forEach to the Array.prototype

//Add your forEach method from the previous exercise to the Array.prototype below:

Array.prototype.forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
}// Define Array.prototype.forEach here:

// Usage:
let myNumbers = [ 1, 2, 3 ];
myNumbers.forEach(function(number){
    console.log('iteration', number)
})

