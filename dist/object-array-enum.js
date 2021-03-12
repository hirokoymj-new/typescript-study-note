"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role[Role["AUTHOR"] = 300] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "hiroko",
    age: 30,
    hobbies: ["Sport", "Cooking", "Watch TV"],
    role: Role.READ_ONLY,
};
console.log(person);
