import { expect } from "chai";
import supertest from "supertest";
import sinon from "sinon";

import app from "../src/app.js";
import adoptionService from "../src/services/adoption.service.js";

const requester = supertest(app);

describe("Testing Adoption Router", () => {

  afterEach(() => {
    sinon.restore();
  });

  describe("GET /api/adoptions", () => {

    it("Debe devolver status 200", async () => {

      sinon.stub(adoptionService, "getAllAdoptions").returns({
        status: "success",
        message: "Listado de adopciones",
      });

      const response = await requester.get("/api/adoptions");

      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal("success");
      expect(response.body.message).to.equal("Listado de adopciones");

    });

  });

  describe("GET /api/adoptions/:id", () => {

    it("Debe devolver una adopción por ID", async () => {

      sinon.stub(adoptionService, "getAdoptionById").returns({
        status: "success",
        message: "Adopción 123",
      });

      const response = await requester.get("/api/adoptions/123");

      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal("success");
      expect(response.body.message).to.equal("Adopción 123");

    });

  });

  describe("POST /api/adoptions", () => {

    it("Debe crear una adopción correctamente", async () => {

      const mockAdoption = {
        pet: "Firulais",
        owner: "Dylan",
      };

      sinon.stub(adoptionService, "createAdoption").returns({
        status: "success",
        payload: mockAdoption,
      });

      const response = await requester
        .post("/api/adoptions")
        .send(mockAdoption);

      expect(response.status).to.equal(201);
      expect(response.body.status).to.equal("success");
      expect(response.body.payload.pet).to.equal("Firulais");
      expect(response.body.payload.owner).to.equal("Dylan");

    });

    it("Debe devolver error 400 si faltan datos", async () => {

      sinon.stub(adoptionService, "createAdoption").throws(
        new Error("Faltan datos")
      );

      const response = await requester
        .post("/api/adoptions")
        .send({
          pet: "Firulais",
        });

      expect(response.status).to.equal(400);
      expect(response.body.status).to.equal("error");
      expect(response.body.message).to.equal("Faltan datos");

    });

  });

  describe("PUT /api/adoptions/:id", () => {

    it("Debe actualizar una adopción", async () => {

      sinon.stub(adoptionService, "updateAdoption").returns({
        status: "success",
        message: "Adopción 50 actualizada",
      });

      const response = await requester
        .put("/api/adoptions/50")
        .send({
          pet: "Firulais actualizado",
          owner: "Dylan",
        });

      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal("success");
      expect(response.body.message).to.equal("Adopción 50 actualizada");

    });

  });

  describe("DELETE /api/adoptions/:id", () => {

    it("Debe eliminar una adopción", async () => {

      sinon.stub(adoptionService, "deleteAdoption").returns({
        status: "success",
        message: "Adopción 99 eliminada",
      });

      const response = await requester.delete("/api/adoptions/99");

      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal("success");
      expect(response.body.message).to.equal("Adopción 99 eliminada");

    });

  });

});