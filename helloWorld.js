function hello(name) {
    if (name.length > 2) {
    console.log("Hello " + name);// put your code here
    } else {
        console.log("Hello, World!!!!");
    }
}
  hello('Mustache');
  hello('Mary');
  hello('Junior');
  hello('');


//   Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.