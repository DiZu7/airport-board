import moment from 'moment';

export const DATE_FORMAT = 'DD-MM-YYYY';
export const DATE_FORMAT_REVERSE = 'YYYY-MM-DD';
export const DATE_FORMAT_SHORT = 'DD/MM';

export const yesterday = moment().subtract(1, 'day');
export const today = moment();
export const tomorrow = moment().add(1, 'day');
