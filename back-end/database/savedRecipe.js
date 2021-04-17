const mongoose = require("mongoose");

const savedRecipeSchema = new mongoose.Schema(
  {
    ids: { type: Array, required: true }
  },
  { timestamps: true }
);

const SavedRecipe = mongoose.model("SavedRecipe", savedRecipeSchema);

module.exports = SavedRecipe;
