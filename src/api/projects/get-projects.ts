import { AxiosResponse } from "axios";
import { projectsInstance } from "./instance";
import { Project } from "../../projects/Project";

export async function getProjects(accessToken: string) {
    const headers = {
        Authorization: `Bearer ${accessToken}`
    };

    const response = await projectsInstance().get("/projects", {
        headers: headers
    });
    return response as AxiosResponse<Project[]>;
}