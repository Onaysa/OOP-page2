const Engineer = require("./lib/Engineer");
test("Set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Ani", 1, "email@email.com", testValue);
    expect(e.github).toBe(testValue);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Ani", 1, "email@email.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Ani", 1, "email@email.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
  });