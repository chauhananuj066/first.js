const single={ name: 'John' ,mobileNo:9923432356,email:'chahananuj@gmail.com'}; 
console.log(single.name); // John
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Anuj Chauhan",
    [mySym]: "mykey1",
    age: 28,
    location: "Aligarh",
    email: "anuj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
 console.log(JsUser[mySym])

JsUser.email = "@chatgpt.com"
 Object.freeze(JsUser)
JsUser.email = "@microsoft.com"
console.log(JsUser);

/*JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
*/