let person={
    name:"mate",
    age:13,
    city:"batumi",
    greet:function(){
        console.log(this.name+"hello")
    }
}


let friend={
    name:"mate",
    age:13,
    city:"batumi",
    greet:function(){
        console.log(this.name+"hello")
    }
}

console.log(person.name)

person.age=20

person.country="georgia"
person.greet()
console.log(person===friend)


let school={

}




let calculator={
    plus:function(num1,num2){
       console.log( num1+num2)
    },
    minus:function(num1,num2){
        console.log( num1-num2)
     },
    multiply:function(num1,num2){
        console.log( num1*num2)
     },
    divide:function(num1,num2){
        console.log( num1/num2)
     }
}