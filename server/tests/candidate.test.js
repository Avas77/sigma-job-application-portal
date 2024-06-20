import { expect, test } from "vitest";
import request from "supertest";
import { app } from "..";

test("should create new candidate and save candidate info", async () => {
  const payload = {
    firstName: "Kagaya",
    lastName: "narayan",
    phoneNumber: "9803190991",
    email: "lover@gmail.com",
    timeInterval: "20",
    linkedin: "https://www.linkedin.com/in/avas-bajracharya-640357200/",
    github: "https://github.com/Avas77",
    message: "hello",
  };
  await request(app).post("/api/v1/candidates").send(payload).expect(201);
});

test("should return email if email already exists", async () => {
  const payload = {
    email: "mannu@gmail.com",
  };
  await request(app)
    .post("/api/v1/candidates/check-email")
    .send(payload)
    .expect(200);
});

test("should update candidate info if email already exists", async () => {
  const payload = {
    firstName: "Kagaya",
    lastName: "narayan",
    phoneNumber: "9803190991",
    email: "ricky@gmail.com",
    timeInterval: "20",
    linkedin: "https://www.linkedin.com/in/avas-bajracharya-640357200/",
    github: "https://github.com/Avas77",
    message: "hello",
  };
  await request(app).put("/api/v1/candidates/update").send(payload).expect(200);
});
