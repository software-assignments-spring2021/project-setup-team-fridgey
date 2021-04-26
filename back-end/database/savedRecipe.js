const mongoose = require("mongoose");

const savedRecipeSchema = new mongoose.Schema(
  {
    userId: {type: String, required: true},
    ids: { type: Array, required: true }
  },
  { timestamps: true }
);

const SavedRecipe = mongoose.model("SavedRecipe", savedRecipeSchema);

module.exports = SavedRecipe;
