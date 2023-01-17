module.exports = app => {
    const recipes = require("../controllers/recipe.controller.js");
    var router = require("express").Router();
    // Create a new Reciper
    router.post("/", recipes.create);

    // Retrieve all recipes
    router.get("/", recipes.findAll);

    // Retrieve a single Recipe with id
    router.get("/:id", recipes.findOne);

    // Update a Recipe with id
    router.put("/:id", recipes.update);

    // Update VISIBILITY a Recipe with id
    router.patch("/visibility/:id", recipes.updateVisibility);

    // Delete a Recipe with id
    router.delete("/:id", recipes.delete);

    // Retrieve a single Recipe with text
    router.get("/cerca/:text", recipes.findString);


    app.use('/api/recipes', router);
  };
