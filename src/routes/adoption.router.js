import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Listado de adopciones",
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    status: "success",
    message: `Adopción ${id}`,
  });
});

router.post("/", (req, res) => {
  const adoption = req.body;

  if (!adoption.pet || !adoption.owner) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos",
    });
  }

  res.status(201).json({
    status: "success",
    payload: adoption,
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    status: "success",
    message: `Adopción ${id} actualizada`,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    status: "success",
    message: `Adopción ${id} eliminada`,
  });
});

export default router;