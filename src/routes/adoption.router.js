import { Router } from "express";
import adoptionService from "../services/adoption.service.js";

const router = Router();

router.get("/", (req, res) => {

  const result = adoptionService.getAllAdoptions();

  res.status(200).json(result);

});

router.get("/:id", (req, res) => {

  const { id } = req.params;

  const result = adoptionService.getAdoptionById(id);

  res.status(200).json(result);

});

router.post("/", (req, res) => {

  try {

    const adoption = req.body;

    const result = adoptionService.createAdoption(adoption);

    res.status(201).json(result);

  } catch (error) {

    res.status(400).json({
      status: "error",
      message: error.message,
    });

  }

});

router.put("/:id", (req, res) => {

  const { id } = req.params;

  const result = adoptionService.updateAdoption(id);

  res.status(200).json(result);

});

router.delete("/:id", (req, res) => {

  const { id } = req.params;

  const result = adoptionService.deleteAdoption(id);

  res.status(200).json(result);

});

export default router;