//import { Component } from 'react';
import { StatisticsList } from './Statics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <li key={good}>
        <p>Good: {good}</p>
      </li>

      <li key={neutral}>
        <p>Neutral: {neutral}</p>
      </li>

      <li key={bad}>
        <p>Bad: {bad}</p>
      </li>

      <li key={total}>
        <p>Total: {total}</p>
      </li>

      <li key={positivePercentage}>
        <p>Positive feedback: {positivePercentage}%</p>
      </li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
