export const getItems = (req, res) => {
  res.send("Item");
};

export const getItem = (req, res) => {
  res.status(500).json({
    status: "error",
    data: null,
  });
};
