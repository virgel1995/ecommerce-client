import api  from "./admin.js"
import { apiUrl } from "./api.js"
import {
  HERO_Url,
	ABOUT_IMG_Url,
	BRANDS,
	CATEGORIES,
	API_URL
} from "./constans"
import {formatPrice} from "./helpers"




export const HERO_URL =  HERO_Url;
export const ABOUT_IMG_URL =  ABOUT_IMG_Url;
export const BRANDS =  BRANDS;
export const CATEGORIES =  CATEGORIES;
export const API_URL =  API_URL;
export const api = apiUrl
export const adminApi = api;
export const formatPrice = formatPrice;