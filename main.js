function BeveRage(name, temperature) {
    this.name = name;
    this.temperature = temperature;
}

BeveRage.prototype.drink = function () {
    console.log("I'm drinking" + " " + this.name);
};

function Coffee(type) {
    BeveRage.call(this, "coffee", "hot");
    this.type = type;
}

Coffee.prototype = Object.create(BeveRage.prototype);
Coffee.prototype.sip = function () {
    console.log("Sipping some awesome" + " " + this.type + " " + this.name);
};

var water = new BeveRage("water", "cold");
var coffee = new Coffee("bold dark roast");

