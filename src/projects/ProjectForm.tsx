import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { Project } from './Project';
import { useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
};

interface ProjectFormProps {
  project: Project,
  openPopup: boolean,
  setOpenPopup: (status: boolean) => void
}

function ProjectForm(props: ProjectFormProps) {
  const [project, setProject] = useState<Project>(props.project);
  const handleClose = () => {
    props.setOpenPopup(false);
  }

  const updateProject = () => {

    handleClose();
  }

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    let updatedValue = type === 'checkbox' ? checked : value;

    //if input type is number convert the updatedValue string to a +number
    if (type === 'number') {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;
    // need to do functional update b/c
    // the new project state is based on the previous project state
    // so we can keep the project properties that aren't being edited +like project.id
    // the spread operator (...) is used to
    // spread the previous project properties and the new change
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
  };

  return (
    <>
      <Modal
        open={props.openPopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ pb: 2 }}>
            Edit Project
          </Typography>

          <FormGroup>
            <TextField
              sx={{ pb: 4 }}
              id="filled-basic"
              label="Project Name"
              variant="filled"
              onChange={handleChange}
              defaultValue={project.name} />

            <TextField
              sx={{ pb: 4 }}
              id="outlined-multiline-static"
              label="Project Description"
              multiline
              rows={4}
              onChange={handleChange}
              defaultValue={project.description}
            />

            <TextField
              sx={{ pb: 4 }}
              id="filled-basic"
              label="Project Budget"
              variant="filled"
              onChange={handleChange}
              defaultValue={project.budget} />

            <FormControlLabel
              control={<Checkbox defaultChecked={project.isActive} />}
              label="Active"
              sx={{ pb: 2 }}
              onChange={handleChange} />
            <Button onClick={updateProject} variant="contained">Update</Button>
          </FormGroup>
        </Box>
      </Modal>
    </>
  );
}

export default ProjectForm;