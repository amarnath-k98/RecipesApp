import { Router } from "express";
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from "../controllers/recipeController.js";


const recipeRouter = Router();

recipeRouter.post("/", createRecipe);
recipeRouter.get("/", getAllRecipes);
recipeRouter.get("/:id", getRecipeById);
recipeRouter.patch("/:id", updateRecipe);
recipeRouter.delete("/:id", deleteRecipe);



export default recipeRouter;
