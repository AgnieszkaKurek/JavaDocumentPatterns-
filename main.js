
function Coffee() {
    
}
Coffee.prototype.cost = function () {
    return 5;
};
Coffee.small = function(coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj = function () {
    return cost - 1;
   };
};

Coffee.medium = function(coffeeObj) {};

Coffee.large = function(coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj = function () {
    return cost + 1;
    };
};

Coffee.sugar = function(coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj = function () {
    return cost + .15;
   };
};

Coffee.creamer = function(coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj = function () {
    return cost + .15;
   };
};

Coffee.whippedCreamer = function(coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj = function () {
    return cost + .15;
   };
};

Coffee.chocolate = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj = function () {
    return cost + .15;
   };
};

Coffee.mocha = function (coffeeObj) {
   
        Coffee.milk(coffeeObj);
        Coffee.foam(coffeeObj);
        Coffee.chocolate(coffeeObj);
        
       var cost = coffeeObj.cost();
       coffeeObj.cost = function () {
           return cost;
       };

};


var coffee = new Coffee();
var mocha = new Coffee();