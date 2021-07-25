import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';

export default function dateCalc(dateFormString, dateToString){
    if(dateFormString < dateToString){
        [dateFormString, dateToString] = [dateToString,dateFormString]//деструктуризация массива
    }


    const dateFrom = DateTime.fromISO(dateFormString);
    const dateTo = DateTime.fromISO(dateToString);

    const diff = dateFrom.diff(dateTo,['years', 'months', 'days' ]).toObject() ;
    return diff;
}