const {
    Car
} = require("./car_dealership")


describe("car properties", () => {
    
    test("can change car price"), () => {

    car1.setPrice(700000);
    expected = 700000
    actual = car1.getPrice();
    expect(actual).toBe(expected);
    }

    test("can change car manufacturer"), () => {

    car1.setManufacturer("Honda");
    expected = "Honda"
    actual = car1.getManufacturer()
    expect(actual).toBe(expected);
    }

    test("can change car engine type"), () => {
    car1.setEngineType("Petrol");
    expected = "Petrol"
    actual = car1.getEngineType();
    expect(actual).toBe(expected);
    }
})
