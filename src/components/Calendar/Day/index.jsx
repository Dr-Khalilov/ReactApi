import React from 'react';
import PropTypes from 'prop-types';
import { format, isToday, isThisMonth } from 'date-fns';
import cx from 'classnames';
import styles from './Day.module.scss';

const Day = props => {
  const { day } = props;
  const classNames = cx(styles.day, {
    [styles.currentMonthDay]: isThisMonth(day),
    [styles.currentDay]: isToday(day),
  });
  return <td className={classNames}> {format(day, 'd')}</td>;
};

Day.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
};

export default Day;
