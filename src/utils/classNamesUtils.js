import classNames from 'classnames';
import moment from 'moment';

import { DATE_FORMAT } from './dateUtils';

export const setClassNamesDate = (calendarValue, date) =>
  classNames('date', {
    date_active: moment(calendarValue).format(DATE_FORMAT) === date.format(DATE_FORMAT),
  });

export const setClassNamesNavLink = (url, navLinkType) =>
  classNames('flights-nav__btn btn', { active: url === navLinkType });
