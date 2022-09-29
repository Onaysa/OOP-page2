const Employee = require("../lib/Employee");
test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set name via constructor arguments", () => {
    const name = "Maria";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });+
  
  test("Set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Ani", testValue);
    expect(e.id).toBe(testValue);
  });
  
  test("Set email via constructor argument", () => {
    const testValue = "email@email.com";
    const e = new Employee("Ani", 1, testValue);
    expect(e.email).toBe(testValue);
  });
  
  test("Get name via getName()", () => {
    const testValue = "Maria";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
  test("Get id via getId()", () => {
    const testValue = "100";
    const e = new Employee("Ani", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("Get email via getEmail()", () => {
    const testValue = "email@email.com";
    const e = new Employee("Ani", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Maria", 1, "email@email.com", testValue);
    expect(e.getRole()).toBe(testValue);
  });