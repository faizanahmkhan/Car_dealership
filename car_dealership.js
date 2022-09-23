
    const Car = function(manufacturer, price, engine_type){
    let _manufacturer = manufacturer;
    let _price = price;
    let _engine_type = engine_type;

    this.getManufacturer = () => _manufacturer;
    this.setManufacturer = (manufacturer) => _manufacturer = manufacturer;
    this.getPrice = () => _price;
    this.setPrice = (price) => _price = price;
    this.getEngineType = () => _engine_type;
    this.setEngineType = (engine_type) => _engine_type = engine_type;
}

const car1 = new Car("Vauxhall", 6000, "Diesel");
const car2 = new Car("Seat", 3500, "Petrol");
const car3 = new Car("Tesla", 6000, "Electric");

module.exports = {
    Car
}

const Dealership = function(){
    add.cars(car3)
}
