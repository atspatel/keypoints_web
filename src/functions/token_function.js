import { v4 as uuidv4 } from "uuid";

export function get_session(refresh) {
  if (!localStorage.session || refresh) {
    localStorage.setItem("session", uuidv4());
  }
  return localStorage.session;
}
