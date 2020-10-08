import { v4 as uuidv4 } from "uuid";

export function get_session() {
  if (!localStorage.session) {
    localStorage.setItem("session", uuidv4());
  }
  return localStorage.session;
}
