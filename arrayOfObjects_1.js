function Person(name,age,street,city,state,country){
    this.name = name
    this.age = age
    this.address = {
        street:street,
        city:city,
        state:state,
        country:country
    }
}
//extracting individual key value pairs of nested objects
function printProps(obj){
    if (typeof obj != 'object')return true
    for(let prop in obj){
        if (printProps(obj[prop])){
            console.log(prop+": ",obj[prop])
        }
    }
    return false
}
var people = []
//populating with sample data 
for(let i=1;i<=5;i++){
    people.push(new Person(`person_${i}`,20+i,`street_${i}`,`city_${i}`,`state_${i}`,`country_${i}`))
}
//iterating array of objects
for(let p of people){
    printProps(p)
    console.log("--------------------------------------------")
}
