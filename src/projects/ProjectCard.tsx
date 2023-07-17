import { Project } from "./Project";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Grid from "@mui/material/Grid";
import EditIcon from '@mui/icons-material/Edit';

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

interface ProjectCardProps {
    project: Project,
    onEdit: (project: Project) => void;
}

function ProjectCard(props: ProjectCardProps) {
    const { project, onEdit } = props;
    const handleEditClick = (projectBeingEdited: Project) => {
        onEdit(projectBeingEdited)
    }

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, minHeight: 340 }}>
                <CardMedia
                    component="img"
                    alt={project.name}
                    height="140"
                    image={project.imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {formatDescription(project.description)}
                    </Typography>
                    <Typography variant="subtitle2" color="text.primary" pt={2}>
                        Budget : {project.budget.toLocaleString()}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="outlined" endIcon={<EditIcon />} onClick={() => { handleEditClick(project) }}>Edit</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default ProjectCard;