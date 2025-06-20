import dayjs from 'dayjs';
import { Offer } from './types';


const filterByCity = (offers: Offer[], cityName: string) => offers.filter((currOffer) => currOffer.city.name === cityName);
const parseReviewDate = (date: string) => dayjs(date).format('MMMM YYYY');
const parseDateTime = (date: string) => dayjs(date).format('YYYY-MM-DD');

const checkLoginInput = (login: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login);
const checkPasswordInput = (password: string): boolean => /^(?=.*[A-Za-z])(?=.*\d).+$/.test(password);

export {filterByCity, parseReviewDate, parseDateTime, checkLoginInput, checkPasswordInput};
