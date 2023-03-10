//import { Component } from 'react';
import { FeedbackList } from './Feedback.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackList onClick={onLeaveFeedback}>
      {options.map(option => (
        <li key={option}>
          <button type="button" name={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};

/*
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

*/
