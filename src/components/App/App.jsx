import Feedback from 'components/Feedback/Feedback';
import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <Feedback />
        <h2>Statistics</h2>
        <Statistics />
      </>
    );
  }
}
