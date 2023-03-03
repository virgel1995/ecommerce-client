import api  from "./admin.js"
import { apiUrl } from "./api.js"
import {
  HERO_URL,
	ABOUT_IMG_URL,
	BRANDS,
	CATEGORIES,
	API_URL
} from "./constans"
import {formatPrice} from "./helpers"




export const HERO_URL =  HERO_URL;
export const ABOUT_IMG_URL =  ABOUT_IMG_URL;
export const BRANDS =  BRANDS;
export const CATEGORIES =  CATEGORIES;
export const API_URL =  API_URL;
export const api = apiUrl
export const adminApi = api;
exports const formatPrice = formatPrice;