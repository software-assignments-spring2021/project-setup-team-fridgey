import Button from "@material-ui/core/Button";
import "./Recommendations.css";
import { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { CreatePage } from "./Recommendations";
import { fetchCurrentUser } from "./Recommendations";

const ReadyToMake = (props) => {
  const [recipeData, setRecipeData] = useState([]);
  const user = useRef();
  useEffect(async () => {
    user.current = await fetchCurrentUser();
    axios
      .get("http://157.245.131.216:3001/Recommendations/ReadyToMake",{
        params: { userId: user.current },
      })
      .then((response) => {
        setRecipeData(response.data);
      });
  }, []);

  function handleSave(item, setButtonText) {
    axios
      .post("http://157.245.131.216:3001/Recommendations/SaveRecipe", {
        item: item,
        userId: user.current,
      })
      .then(
        (response) => {
          console.log("success " + item);
        },
        (error) => {
          console.log("error");
        }
      );
    setButtonText("Saved!");
  }

  const GenerateButton = (title) => {
    const [buttonText, setButtonText] = useState("Save Recipe");
    return (
      <Button
        className="recommendations-addButton"
        variant="outlined"
        color="primary"
        onClick={() => handleSave(title, setButtonText)}
      >
        {" "}
        {buttonText}{" "}
      </Button>
    );
  };

  return (
    <CreatePage
      page={2}
      recipeData={recipeData}
      buttonGenerator={GenerateButton}
    />
  );
};

export { ReadyToMake };
