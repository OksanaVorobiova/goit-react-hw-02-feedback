import { NotifStyled } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <NotifStyled>{message}</NotifStyled>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
