let myLaptop = {
  operatingSystem: "Windows 10",
  manufacturer: "Lenovo",
  purchaseYear: 2019,
  sayYear: function() {
    console.log(this.purchaseYear)
  }
};
console.log(myLaptop.manufacturer);
myLaptop.sayYear();
