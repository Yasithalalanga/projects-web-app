import { initInstance } from "../instance";

export const projectsInstance = () => {
    return initInstance(import.meta.env.VITE_SERIVCE_BASE_URL);
}