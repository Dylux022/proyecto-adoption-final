const getAllAdoptions = () => {
  return {
    status: "success",
    message: "Listado de adopciones",
  };
};

const getAdoptionById = (id) => {
  return {
    status: "success",
    message: `Adopción ${id}`,
  };
};

const createAdoption = (adoption) => {

  if (!adoption.pet || !adoption.owner) {
    throw new Error("Faltan datos");
  }

  return {
    status: "success",
    payload: adoption,
  };
};

const updateAdoption = (id) => {
  return {
    status: "success",
    message: `Adopción ${id} actualizada`,
  };
};

const deleteAdoption = (id) => {
  return {
    status: "success",
    message: `Adopción ${id} eliminada`,
  };
};

export default {
  getAllAdoptions,
  getAdoptionById,
  createAdoption,
  updateAdoption,
  deleteAdoption,
};