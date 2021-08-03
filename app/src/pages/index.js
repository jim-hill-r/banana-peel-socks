import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Typography, Input, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
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
      "answer": "visitor",
      "funfact": "Did you know? The first thing Jim & Meagan ever owned together was a Morton Arboretum membership!"
    },
    {
      "loc": {
        "lat": 41.813916,
        "lon": -88.070328
      },
      "name": "Maze Garden",
      "clue": "What word is next to #3?",
      "answer": "viburnum",
      "funfact": "Exploring the maze? Jim & Meagan also love a hidden lake nearby, but it's very difficult to find. Similarly, they have a special road only they know about in Downer's Grove called Floyd road."
    },
    {
      "loc": {
        "lat": 41.813974,
        "lon": -88.069942
      },
      "name": "Children's Garden",
      "clue": "What is the joke answer?",
      "answer": "palm",
      "funfact": "Fun fact: The Nutcracker in Chicago is performed at the theatre on Ida B Wells, not on the Mag Mile. Meagan brought Jim to see the Nutcracker for the first time ever in 2019."
    },
    {
      "loc": {
        "lat": 41.813310,
        "lon": -88.069033
      },
      "name": "Evergreen Tree Walk",
      "clue": "What is the top word in the red owl?",
      "answer": "northern",
      "funfact": "Have you heard an owl call? Jim & Meagan learned how to make owl calls while visiting Turkey Run state park in Indiana!"
    },
    {
      "loc": {
        "lat": 41.814464,
        "lon": -88.068324
      },
      "name": "Human Nature",
      "clue": "What word is on the bottom of the sign?",
      "answer": "heterolepis",
      "funfact": "Jim & Meagan love alliteration. We once spent an entire week texting with only alliteration!"
    },
    {
      "loc": {
        "lat": 41.817078,
        "lon": -88.065364
      },
      "name": "Human Nature Sentient",
      "clue": "What is the @ on the sign?",
      "answer": "danielpopper",
      "funfact": "Everyone loves some good foreshadowing. One of Jim & Meagan's earliest dates was a fourth of July weekend in an RV. They ended up getting engaged in this same town, Pine Plains."
    },
    {
      "loc": {
        "lat": 41.819684,
        "lon": -88.062924
      },
      "name": "Bald Cypress",
      "clue": "What is the second word down on the sign?",
      "answer": "taxodium",
      "funfact": "The first conversation Jim & Meagan ever had was completely in pirate speak! Yar be scallywags!"
    },
    {
      "loc": {
        "lat": 41.817410,
        "lon": -88.068954
      },
      "name": "Bench",
      "clue": "What word is on the bench?",
      "answer": "graceful",
      "funfact": "Sometimes a place to sit is hard to find. During the pandemic, Jim & Meagan had to use their bathroom as an office space for work calls."
    },
    {
      "loc": {
        "lat": 41.818502,
        "lon": -88.046527
      },
      "name": "Big Rock",
      "clue": "Who wrote the quote in the top right corner?",
      "answer": "muir",
      "funfact": "One week early in Jim & Meagan's relationship, both phones stopped sending texts and they didn't know. They both thought the other was ghosting them. It was the worst week of their relationship. Never underestimate a good phone call!"
    },
    {
      "loc": {
        "lat": 41.820593,
        "lon": -88.081896
      },
      "name": "Human Nature Basillica",
      "clue": "What is the first word on the sign?",
      "answer": "bluebird",
      "funfact": "Want more fun? Find Jim & Meagan's favorite geocache at Waterfall Glen Forest Preserve. It is known as the 'Love Log'."
    }
  ]

const ClueContent = ({index, clue}) => {
  const classes = useStyles();

  const [guess, setGuess] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [correct, setCorrect] = React.useState(false)

  const checkSubmit = (clue) => {
    if(guess.toLowerCase().includes(clue.answer)) {
      setCorrect(true)
    } else {
      setCorrect(false)
    }
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <>
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
          <Input className={classes.action} onChange={(event) => setGuess(event.target.value)} value={clue.guess}></Input> 
          <Button className={classes.action} onClick={() => checkSubmit(clue)} size="small">
            {correct &&             
              "Correct"
            }
            {!correct &&
              "Check answer"
            }
          </Button>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {correct &&             
            "You got it!"
          }
          {!correct &&
            "Nice try..."
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {correct &&             
              clue.funfact
            }
            {!correct &&
              'That is not correct.'
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            {correct &&             
              "Let's find the next one!"
            }
            {!correct &&
              'Try again!'
            }
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const IndexPage = () => { 
  return (
    <Layout>
      <SEO title="Welcome" />
      <h1>Geocaching Scavenger Hunt</h1>
      <p> For each location described below, head over there and answer the clue. Put your answer in the box next to the clue.</p>
      <div style={{ marginBottom: `1.45rem` }}>
          {clues.map((clue, index) =>
            <ClueContent index={index} clue={clue}></ClueContent>
          )}
      </div>
    </Layout>
  )
}

export default IndexPage
