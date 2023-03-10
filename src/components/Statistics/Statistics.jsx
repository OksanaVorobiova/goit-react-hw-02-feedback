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
      <li key={1}>
        <p>Good: {good}</p>
      </li>

      <li key={2}>
        <p>Neutral: {neutral}</p>
      </li>

      <li key={3}>
        <p>Bad: {bad}</p>
      </li>

      <li key={4}>
        <p>Total: {total}</p>
      </li>

      <li key={5}>
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
