function Person(name,age,street,city,state,country,langs){
    this.name = name
    this.age = age
    this.address = {
        street:street,
        city:city,
        state:state,
        country:country
    }
    this.languagesKnown = langs
}
//extracting individual key value pairs of nested objects and listing items in Arrays
function printProps(space,obj){
    if(obj instanceof Array){
        for(let item of obj){
            if(typeof item == 'object'){
                //console.log(space+prop+":")
                printProps(space+"     ",item)
            }
            else console.log(space+"* "+item)
        }
    }
    else{
    for(let prop in obj){
        if(typeof obj[prop] == 'object'){
            console.log(space+prop+":")
            printProps(space+"     ",obj[prop])
        }
        else console.log(space+prop+": "+obj[prop])
    }
}
}
var people = []
//populating with sample data 
for(let i=1;i<=5;i++){
    var lang1 = {}
    lang1[`lang_${i}`] = {proficiency:['read','speak']}
    var lang2 = {}
    lang2[`lang_${i+1}`] = {proficiency:['read','speak','write']}
    var langs = [lang1,lang2]
    people.push(
        new Person(`person_${i}`,20+i,`street_${i}`,`city_${i}`,`state_${i}`,`country_${i}`,langs)
        )
}
//iterating array of objects
for(let p of people){
    printProps("",p)
    console.log("--------------------------------------------")
}