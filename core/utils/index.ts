import JsonStorage from "./json-storage";

const localStorage = new JsonStorage(process.client ? window.localStorage : undefined);
const sessionStorage = new JsonStorage(process.client ? window.sessionStorage : undefined);

export { localStorage, sessionStorage };
