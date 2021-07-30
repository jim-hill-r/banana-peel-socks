import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Typography, Input, Dialog, DialogTitle, DialogContent, DialogContentActions, DialogContentText, DialogActions } from '@material-ui/core';
import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  action: {
    margin: "auto"
  }
});

const clues = [
    {
      "loc": {
        "lat": 41.813693,
        "lon": -88.071119
      },
      "name": "Ground Cover Garden",
      "clue": "What is the first word in the bottom left of the sign?",
      "answer": "visitor"
    },
    {
      "loc": {
        "lat": 41.813916,
        "lon": -88.070328
      },
      "name": "Maze Garden",
      "clue": "What word is next to #3?",
      "answer": "viburnum"
    }
  ]

const IndexPage = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const checkSubmit = (clue) => {
    if(clue.guess && clue.guess.toLowerCase().includes(clue.answer)) {
      clue.correct = true
      setOpen(true)
    }
  }

  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <Layout>
      <SEO title="Welcome" />
      <h1>Geocaching Scavenger Hunt</h1>
      <p> For each location described below, head over there and answer the clue. Put your answer in the box next to the clue.</p>
      <div style={{ marginBottom: `1.45rem` }}>
          {clues.map((clue, index) =>
            <Card key={index}> 
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {index+1}) {clue.name}
                </Typography>
                <Typography variant="h5" component="h2">
                  {clue.loc.lat}, {clue.loc.lon}
                </Typography>
                <Typography variant="body2" component="p">
                  {clue.clue}
                </Typography>
                <Input className={classes.action} onChange={(event) => clue.guess = event.target.value} value={clue.guess}></Input> 
                <Button className={classes.action} onClick={() => checkSubmit(clue)} size="small">I found it!</Button>
              </CardContent>
            </Card>
          )}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"You found it!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are the best. Here is a fun fact about Meagan and me!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Let's try the next one!
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  )
}

export default IndexPage
