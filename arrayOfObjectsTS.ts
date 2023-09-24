interface Address {
    street:string,
    city:string,
    state:string,
    country:string
}
class Person{
    name:string;
    age:number;
    address:Address
    constructor(name:string,age:number,street:string,city:string,state:string,country:string){
        this.name = name
        this.age = age
        this.address = {
            street:street,
            city:city,
            state:state,
            country:country
        }
    }
}
function printProps(obj:any):boolean{
    if (typeof obj != 'object')return true
    for(let prop in obj){
        if (printProps(obj[prop] as object)){
            console.log(prop+": ",obj[prop])
        }
    }
    return false
}
var people:Person[] = []
//populating with sample data 
for(let i=1;i<=5;i++){
    people.push(new Person(`person_${i}`,20+i,`street_${i}`,`city_${i}`,`state_${i}`,`country_${i}`))
}
//iterating array of objects
for(let p of people){
    printProps(p)
    console.log("--------------------------------------------")
}
var a:Address = {
    street:"string",
    city:"string",
    state:"string",
    country:"string"
}
console.log(typeof a)