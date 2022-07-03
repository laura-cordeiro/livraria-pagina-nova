const { Books } = require("../models"),
  imageFolder = "images/",
  cloudinary = require("../../../config/cloudinary");

const BookController = {
  async create(req, res) {
    const file = req.files[0];
    const uploadPath = await cloudinary.uploads(file.path, "Books");

    const newBook = await Books.create({
      ...req.body,
      //forma de upload na aplicação
      // image: imageFolder + file.filename
      image: uploadPath.imageUrl
    });

    return res.status(201).json({ dadosFinais: newBook });
  }
};

module.exports = BookController;
