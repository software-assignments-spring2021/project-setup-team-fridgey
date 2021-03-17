import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./Recommendations.css";
import { useState } from "react";
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { recipes } from "./recommendationDataFake";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingBottom: 20,
    },
    paper: {
      padding: theme.spacing(1),
      margin: 'auto',
      maxWidth: 400,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

const Recommendations = (props) => {
  const classes = useStyles();

  const RecItem = (data) => {
      return(
        <div className={classes.root}>
            <Grid container spacing={0} >
                <Grid item xs = {5}>
                    <ButtonBase>
                        <img className= "imagePreview" alt="complex" src="https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg" />
                    </ButtonBase>
                </Grid>
                <Grid item xs = {6}>
                    <div className = "title">Classic Lasagna</div>
                    <div className = "info">7 Ingredients | 60 Minutes</div>
                    <Button className = "addButton" variant = "outlined" color="primary"> Add Item </Button>
                </Grid> 
            </Grid>
      </div>
      );
  };

  const RecItemTest = (data) => {
    return(
      <div className={classes.root}>
          <Grid container spacing={0} >
              <Grid item xs = {5}>
                  <ButtonBase>
                      <img className= "imagePreview" alt="complex" src={data.image} />
                  </ButtonBase>
              </Grid>
              <Grid item xs = {6}>
                  <div className = "title">{data.title}</div>
                  <div className = "info">{data.ingredients} Ingredients | {data.minutes} Minutes</div>
                  <Button className = "addButton" variant = "outlined" color="primary"> Save Recipe </Button>
              </Grid> 
          </Grid>
    </div>
    );
};

  return(
  <div>
    <NavBar/>
    <header className="App-header">
      <Button className = "usedButton">
        Recipes of the Day
      </Button>
      <Button className = "unusedButton">
        Ready to Make
      </Button>
      <Paper className={classes.paper}>
          <RecItemTest title = "Classic Lasagna" ingredients = "7" minutes = "60" image = "https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg"/>
          <RecItemTest title = "Korean Pork Chops" ingredients = "7" minutes = "60" image = "https://www.jocooks.com/wp-content/uploads/2015/03/korean-style-pork-chops-2.jpg"/>
          <RecItemTest title = "Chicken Marsala" ingredients = "7" minutes = "60" image = "https://www.onceuponachef.com/images/2018/01/Chicken-Marsala.jpg"/>
          <RecItemTest title = "Classic Lasagna" ingredients = "7" minutes = "60" image = "https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg"/>
          <RecItemTest title = "Korean Pork Chops" ingredients = "7" minutes = "60" image = "https://www.jocooks.com/wp-content/uploads/2015/03/korean-style-pork-chops-2.jpg"/>
          <RecItemTest title = "Chicken Marsala" ingredients = "7" minutes = "60" image = "https://www.onceuponachef.com/images/2018/01/Chicken-Marsala.jpg"/>
      </Paper>
    </header>
  </div> 
);
  };

export { Recommendations };