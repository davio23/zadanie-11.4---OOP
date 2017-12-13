function Phone(brand, price, color, software) {
    this.brand = brand;
	this.price = price;
    this.color = color;
    this.software = software
};

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " dollars and has software of " + this.software + ".");
}

var samsungGalaxyS6 = new Phone('Samsung Galaxy S6', 2100, 'black', 'Android');
samsungGalaxyS6.printInfo();

var iPhone6S = new Phone("Apple", 2250, "silver", "iOS");
iPhone6S.printInfo();

var onePlusOne = new Phone("OnePlus One", 1300, "gray", "Android");
onePlusOne.printInfo();

var  nokia3310 = new Phone("Nokia 3310", 400, "blue", "Series 30+");
nokia3310.printInfo();

var nokiaN70 = new Phone("Nokia N70", 320, "gray", "Symbian");
nokiaN70.printInfo();
