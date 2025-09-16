import Recipe from "../models/recipeModel.js";

export const createRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;
    const newRecipe = new Recipe({ title, ingredients, instructions });
    const recipe = await newRecipe.save();
    res.status(201).json({
      status: "Success",
      message: "Recipe created successfuly",
      data: recipe,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Recipe fetch error",
      err: err.message,
    });
  }
};

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({
      status: "Success",
      message: "Recipes fetched successfully",
      data: recipes,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Recipe fetch error",
      err: err.message,
    });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({
        status: "Failed",
        message: "Recipe not found",
        data: null,
      });
    }
    res.status(200).json({
      staus: "Success",
      message: "Recipe fetched successfully",
      data: recipe,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Recipe fetch error",
      err: err.message,
    });
  }
};


export const updateRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, ingredients, instructions } = req.body;
        const recipe = await Recipe.findByIdAndUpdate(id, { title, ingredients, instructions }, { new: true });
        if (!recipe) {
            return res.status(404).json({
                status: "Failed",
                message: "Recipe not found",
                data: null
            });
        } else {
             res.status(200).json({
               status: "Success",
               message: "Recipe updated successfully",
               data: recipe,
             });
        }
       
    } catch (err) {
         res.status(400).json({
           status: "error",
           message: "Recipe fetch error",
           err: err.message,
         });
    }
}


export const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByIdAndDelete(id);
        if (!recipe) {
            return res.status(404).json({
                status: "Failed",
                message: "Recipe not found",
                data: null
            });
        }
         res.status(200).json({
                status: "Success",
                message: "Recipe deleted successfully",
                data: recipe
            });
    } catch (err) {
        res.status(400).json({
          status: "error",
          message: "Recipe fetch error",
          err: err.message,
        });
    }
}
