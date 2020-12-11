// call(), apply(), bind() methods
// functions have access to these methods and are useful when using the 'this' keyword
// the 'this' keyword sometimes points to the global object and other times it points to the function that contains them. To control what 'this' points to or ends up being, you can use the following methods: call, apply, and bind. All functions have access to these special methods.

let person = {
    firstName:'Miguel',
    lastName: 'Venegas',
    getFullName: function(){
        let fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

// in the example above, 'this' points to the 'person' object.

let logName = function(lang1, lang2){
    console.log('Logged: ' + this.getFullName());
    console.log('Languages: ' + lang1 + ', ' + lang2);
    console.log('=============================')
};

// when you log the below code, you get an error

// **  console.log(logName()); **// 

//output: Uncaught TypeError: this.getFullName is not a function


// the error above occurs because 'this' refers to the global object and getFullName() does not live in the global object. To gain access to the getFullName method you can use call(), bind(), or apply(). Here's an example of using bind()

// the bind() method takes a first parameter that sets the 'this' keyword to the intended object. in this case, I am setting it to 'person', as I want to have access to its method


let logPersonName = logName.bind(person);

// now when you call logPersonName(), it utilizes person's method, getFullName and outputs: Logged: Miguel Venegas

// the bind() method creates a copy of the function its referencing

logPersonName(); // Logged: Miguel Venegas

logPersonName('English', 'Spanish'); // same example above, but we pass in arguments

// here's a call() method example

// call() method works like bind, but it allows you to invoke it immediately and pass in arguments

logName.call(person, 'CALL method: english', 'spanish');


// here's a apply() method example
// the apply method works the same as the call method, except that it using brackets when passing in parameters

logName.apply(person, [' APPLY method: English', 'Spanish']);

// WHY IS THIS USEFUL?
// these methods can be used during 'function borrowing' and 'function currying'

// function borrowing
    // below we have a similar object as the person object above, but different data
    // notice that the object below does not have the getFullName method. 
    // To borrow it from the person object, you can use the apply method

let person2  = {
    firstName: 'Jane',
    lastName: 'Doe'
}

person.getFullName.apply(person2);

console.log(person.getFullName.apply(person2)); // output: Jane Doe

// function currying
    // this uses bind() and passes parameters
    // when you pass it parameters it permanently sets them as their value

    function multiply(a, b){
        return a * b;
}

let multiplyByTwo = multiply.bind(this, 2); // here we are setting parameter 'a' to the value 2

multiplyByTwo(3); // now when you call the function and pass it a 2nd parameter it will multiply it by the permanent value of 2.

console.log(multiplyByTwo(3)); // so the output here is the number 6

