import api  from "./admin.js"
import { apiUrl } from "./api.js"
import {
  HERO_Url,
	ABOUT_IMG_Url,
	BRANDs,
	CATEGORIEs,
	API_Url
} from "./constans"
import {formatPricE} from "./helpers"




export const HERO_URL =  HERO_Url;
export const ABOUT_IMG_URL =  ABOUT_IMG_Url;
export const BRANDS =  BRANDs;
export const CATEGORIES =  CATEGORIEs;
export const API_URL =  API_Url;
export const api = apiUrl
export const adminApi = api;
export const formatPrice = formatPricE;