import React, { Component } from 'react';
import './App.css';
import Navpills from "./components/Navpills"; // This connects the Nav.js file in the Components folder to the App.js file
import Title from "./components/Title" // This connects the Title.js file in the Components folder to the App.js file
import Container from "./Container"
import FriendCard from "./components/FriendCard"; // This connects the FriendCard.js file in the Components folder to the App.js file
import friends from "./friends.json"
import { Grid, Row, Col } from 'react-flexbox-grid';

var containerStyle = {
"background": "url(https://timedotcom.files.wordpress.com/2017/08/game-of-thrones-the-wall-history-03.jpg) no-repeat center center fixed",
"background-size": "cover"
};

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    message:"Click an image to begin!",
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Glaven!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
      <Grid fluid>
        <Navpills
          message={this.state.message}
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          <p>Click on each character no more than once, or we'll release the hounds!!!</p>
        </Title>

        <Container style={containerStyle}>

          <Row>

            {this.state.friends.map(friend => (
              <Col size="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                  />
              </Col>
            ))}

          </Row>

        </Container>

      </Grid>
    );
  }
}


export default App;



