//import logo from './logo.svg';
import './App.css';

function App() {
  /*const user = {}
  user.name = "limber"
  console.log(user);

  const arr = ["orange"]
  arr.push("apple")
  console.log(arr); 

  function fruitColor(fruit) {
    switch (fruit) {
      case "apple":{
        let color = "red"
        return color
      }
      case "banana":{
          let color = "yellow"
        return color
      }

      default:
        return "other colors";
    }
  }

  console.log(fruitColor("apple"));
  console.log(fruitColor("banana"));
  console.log(fruitColor("orange"));
  console.log(fruitColor("berry"));
  console.log("something")
  const name = "mike"
  console.log('I\'m '+name+'. Nice to meet you');
  console.log(`I'm ${name}. Nice to meet you`);

  function sayMyName(name) {
    return `my name is ${name}`
  }
  console.log(sayMyName("limber"))

  const sayMyName2 = (name) => {
    return `my name is ${name}`
  }

  const sayMyName3 = name => `my name is ${name}`

  console.log(sayMyName("limber"))
  console.log(sayMyName2("limber mc"))
  console.log(sayMyName3("limber mcx"))

  //----------CLASS----------
  class Animal{
    eat = () => console.log('I am eating');
  }
  class Dog extends Animal{
    weight = 20;
    age = 8;
    bark = () => console.log('bark bark bark')
  }

  const puppy = new Dog()
  puppy.bark()
  console.log(puppy.bark());
  console.log(puppy.eat());

  //----------SPREAD OPERATOR----------
  //...
  var oldArr = [1, 3, 5]
  var newArr = [...oldArr, 2, 4]
  console.log(newArr);

  var oldObj = {
    name: "Peter",
    height: 175
  }

  var newObj = {
    ...oldObj, age:18
  }
  console.log(newObj);

  const showValues = (...args) =>{
    //console.log(...args);
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
      
    }
  }

  console.log(showValues("apple", "orange", "banana"));

  //----------DESTRUCTURING----------
  var person = {
    firstName: "Alan",
    lastName: "Smith",
    age: 50,
    eyeColor: "blue"
  }

  const {firstName, age} = person
  console.log(firstName);
  console.log(age);
  var [a,b] = [1,2]
  console.log(a);
  var [a,b,...remain] = [1,2,3, 5,6,7, 5,6,7, 5,6,7]
  console.log(...remain);

  var [,,c] = [1,2,3]
  console.log(c)

  //----------PRIMITIVE VS REFERENCE----------
  //primitive :the value is stored with assign-by-value 
  //reference :the value is stored with assign-by-refence
  
  var name = "Sam"
  var namecopy = name
  console.log('name', name);
  console.log('namecopy', namecopy);
  name = "Mary"
  console.log('name', name);
  console.log('namecopy', namecopy);

  const user = {
    name: "Mike"
  }
  const usercopy = {...user}
  console.log('user', user);
  console.log('usercopy', usercopy);
  user.name = "Mary"
  console.log('user', user);
  console.log('usercopy', usercopy);

  //----------ARRAY FUNCTION----------

  var numbers = [1, 2, 3]
  const plus3 = numbers.map(num=>num+3)

  console.log(plus3);

  const plus4function = num => num+4
  const plus4 = numbers.map(plus4function)

  console.log(plus4);*/

  //----------FOR IN \ FOR OF----------
  const fruitArray = ["apple", "orange", "banana"]

  for (let value of fruitArray) {
    console.log(value);
  }

  const fruitsObject = {
    apple: 13,
    orange: 17,
    banana: 15
  }

  for (let key in fruitsObject) {
   console.log(key);
   console.log(fruitsObject[key]);
  }

  return (
    <div className="App">
      <h1>Hello this is my first app</h1>

    </div>
  );
}

export default App;
