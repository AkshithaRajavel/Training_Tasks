var Person = /** @class */ (function () {
    function Person(name, age, street, city, state, country) {
        this.name = name;
        this.age = age;
        this.address = {
            street: street,
            city: city,
            state: state,
            country: country
        };
    }
    return Person;
}());
function printProps(obj) {
    if (typeof obj != 'object')
        return true;
    for (var prop in obj) {
        if (printProps(obj[prop])) {
            console.log(prop + ": ", obj[prop]);
        }
    }
    return false;
}
var people = [];
//populating with sample data 
for (var i = 1; i <= 5; i++) {
    people.push(new Person("person_".concat(i), 20 + i, "street_".concat(i), "city_".concat(i), "state_".concat(i), "country_".concat(i)));
}
//iterating array of objects
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var p = people_1[_i];
    printProps(p);
    console.log("--------------------------------------------");
}
var a = {
    street: "string",
    city: "string",
    state: "string",
    country: "string"
};
console.log(typeof a);
