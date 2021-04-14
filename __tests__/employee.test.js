const { TestScheduler } = require("@jest/core");
const Employee = require("../lib/Employee");

test("can create employee instance", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});

test("can create name through constructor function", () => {
  const name = "Jackson";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("can create id through constructor function", () => {
  const id = 1;
  const emp = new Employee("Jackson", id);
  expect(emp.id).toBe(id);
});

test("can create email through constructor function", () => {
  const email = "test@test.com";
  const emp = new Employee("Jackson", 1, email);
  expect(emp.email).toBe(email);
});

test("can get name via the getName function", () => {
  const name = "Jackson";
  const emp = new Employee(name);
  expect(emp.getName()).toBe(name);
});

test("can get id via the getId function", () => {
  const id = 1;
  const emp = new Employee("Jackson", id);
  expect(emp.getId()).toBe(id);
});

test("can get email via the getEmail function", () => {
  const email = "test@test.com";
  const emp = new Employee("Jackson", 1, email);
  expect(emp.getEmail).toBe(email);
});

test("can get role via the getRole function", () => {
  const emp = "Employee";
  const emp = new Employee("Jackson", 1, "test@test.com");
  expect(emp.getRole()).toBe(Employee);
});
