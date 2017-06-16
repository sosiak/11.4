function Phone(brand, price, color, RAM, display, camera) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.RAM = RAM;
	this.display = display;
	this.camera = camera;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + ", has " + this.RAM + " RAM" + ", has " + this.display + " display" + ", and has " + this.camera + " camera.");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "2GB", "4,7\"", "12Mpx");
var SamsungGalaxyS6 = new Phone("Samsung", 1800, "silver", "3GB", "5,1\"", "16Mpx");
var OnePlusOne = new Phone("OnePlus", 1300, "black", "3GB", "5,5\"", "13Mpx");
var LGK8 = new Phone("LG", 500, "white", "1,5GB", "5\"", "8Mpx");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
LGK8.printInfo();


