var obj = {
    firstName: "Jeremy",
    lastName: "Appril",
};
//obj.firstName = "Jeremy";
//obj["lastName"] = "Appril";

var firstName = obj["firstName"];
var lastName = obj.lastName;

Object.defineProperty(obj, "country", {
    value : "USA"
});

Object.defineProperties(obj, {
    twitter : {
        value :  "jwmcpeaak"
    },
    email: {
        value : "email@gmail.com"
    }
});

