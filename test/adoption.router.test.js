import { expect } from "chai";
import supertest from "supertest";
import app from "../src/app.js";

const requester = supertest(app);

describe("Testing Adoption Router", () => {

  describe("GET /api/adoptions", () => {

    it("Debe devolver status 200", async () => {

      const response = await requester.get("/api/adoptions");

      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal("success");

    });

  });

  describe("GET /api/adoptions/:id", () => {

    it("Debe devolver una adopción por ID", async () => {

      const response = await requester.get("/api/adoptions/123");

      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Adopción 123");

    });

  });

  describe("POST /api/adoptions", () => {

    it("Debe crear una adopción correctamente", async () => {

      const mockAdoption = {
        pet: "Firulais",
        owner: "Dylan"
      };

      const response = await requester
        .post("/api/adoptions")
        .send(mockAdoption);

      expect(response.status).to.equal(201);
      expect(response.body.status).to.equal("success");
      expect(response.body.payload.pet).to.equal("Firulais");

    });

    it("Debe devolver error 400 si faltan datos", async () => {

      const mockAdoption = {
        pet: "Firulais"
      };

      const response = await requester
        .post("/api/adoptions")
        .send(mockAdoption);

      expect(response.status).to.equal(400);
      expect(response.body.status).to.equal("error");

    });

  });

  describe("PUT /api/adoptions/:id", () => {

    it("Debe actualizar una adopción", async () => {

      const response = await requester.put("/api/adoptions/50");

      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Adopción 50 actualizada");

    });

  });

  describe("DELETE /api/adoptions/:id", () => {

    it("Debe eliminar una adopción", async () => {

      const response = await requester.delete("/api/adoptions/99");

      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Adopción 99 eliminada");

    });

  });

});