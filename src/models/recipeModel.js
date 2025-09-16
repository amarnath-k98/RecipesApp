import { model, Schema } from "mongoose";


const recipeSchema = Schema({
    title: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Recipe = model("Recipe", recipeSchema);

export default Recipe;
