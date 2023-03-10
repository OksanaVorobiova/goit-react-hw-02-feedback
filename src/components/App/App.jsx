import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: (prevState[e.target.name] += 1),
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return good === 0
      ? 0
      : ((good * 100) / this.countTotalFeedback()).toFixed(2);
  };

  isFeedbackNotEmpty = () => {
    return Object.values(this.state).some(value => value > 0);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleBtnClick}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {this.isFeedbackNotEmpty() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
