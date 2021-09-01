import {
  Card,
  Container,
  Typography,
  CardContent,
  Button,
  CardActions,
} from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import React from 'react';

const Rules: React.FC<RulesProps> = ({ updateStatus }) => {
  return (
    <>
      <Container maxWidth="xs">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Where is Waldo - Game Rules
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              - Search for the characters on the picture <br />- Click when you
              find a character and choose his name at the pop-up window <br />-
              Do the same for all the characters <br />- Try to find them all as
              fast as possible
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              startIcon={<PlayCircleOutlineIcon />}
              variant="contained"
              color="secondary"
              onClick={updateStatus}
            >
              Start Game
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

interface RulesProps {
  updateStatus: () => void;
}

export default Rules;
