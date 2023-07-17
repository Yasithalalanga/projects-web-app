import { useState } from "react";

import { Project } from "./Project";
import Grid from '@mui/material/Grid';
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
// import ProjectForm from "./ProjectForm";

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState<Project>(Project.prototype);
    const [openPopup, setOpenPopup] = useState(false);

    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
        setOpenPopup(true);
    }
    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {projects.map((project) => (
                    <ProjectCard project={project} onEdit={handleEdit} key={project.id} />
                ))}
            </Grid>

            <ProjectForm openPopup={openPopup} setOpenPopup={setOpenPopup} project={projectBeingEdited} />
        </>
    );
}

export default ProjectList;