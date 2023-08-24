import { USER } from "../const";

let parse = JSON.parse(localStorage.getItem(USER))?.role;
let parseId = JSON.parse(localStorage.getItem(USER))?._id;

export const ROLE = parse;
export const USER_ID = parseId;
