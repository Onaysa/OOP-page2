const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
test("Set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Ani", 1, "email@email.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Ani", 1, "emailt@email.com", 100);
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Ani", 1, "email@email.com", testValue);
    expect(e.getOffice()).toBe(testValue);
  });