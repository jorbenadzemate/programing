const  me = {
    name:"mate",
    surname:"jorbenadze",
    age:13,
    getName: function(){
        return me.name
    },
    bank:3747856257862357    //fake ofc
}

const you ={
    name:"Luka",
    surname:"cxvaradze",
    age:17,
    getName : function(){
        return you.surname
    },

}




console.log(me.getName())
console.log(you.getName())