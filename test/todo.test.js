const app = require("../app");
const request = require("supertest");

describe("Todo Unit Test", () => {
  test("add todo succes", (done) => {
    const newTodo = {
      title: "todo new",
    };
    request(app)
      .post("/api/v1/todo/add")
      .send(newTodo)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.body.message).toBe("Created");
        done();
      })
      .catch(done);
  });
});
