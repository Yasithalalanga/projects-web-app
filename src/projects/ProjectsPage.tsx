import { useEffect, useState } from "react";
import { Project } from "./Project";
import ProjectList from "./ProjectList";
import { getProjects } from "../api/projects/get-projects";

function ProjectsPage() {
  const [projctList, setProjectList] = useState<Project[]>([]);
  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

  useEffect(() => {
    getAllProjects();
  }, []);

  async function getAllProjects() {
    getProjects(accessToken).then(res => {
      setProjectList(res.data)

      console.log("Loading Projects from the Server..")
      console.log(res.data)
    }).catch(err => {
      console.error(err);
    })
  }

  return (
    <>
        <h1>Projects</h1>
        <ProjectList projects={projctList} />
    </>
  );
}

export default ProjectsPage;