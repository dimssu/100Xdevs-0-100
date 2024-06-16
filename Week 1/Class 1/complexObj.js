const allUsers = [{
    name: "Aryan Singh",
    gender: "male",
    age: 21
}, {
    name: "Prashant Semwal",
    gender: "male",
    age: 21
},{
    name: "Aditi",
    gender: "female",
    age: 20
}];

for(let i = 0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["name"]);
    }
}