import { Component } from 'react';

class Feedback extends Component {
  render() {
    return (
      <ul>
        <li>
          <button type="button" name="good">
            Good
          </button>
        </li>
        <li>
          <button type="button" name="neutral">
            Neutral
          </button>
        </li>
        <li>
          <button type="button" name="bad">
            Bad
          </button>
        </li>
      </ul>
    );
  }
}

export default Feedback;
