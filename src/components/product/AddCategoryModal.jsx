import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useProducts } from '../../contexts/ProductContextProvider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddCategoryModal(props) {
   const {open, handleClose} = props
   const [category, setCategory] = React.useState()
    const {createCategory} = useProducts()

    const handleAdd = () => {
        const newCategory = {name: category}
        createCategory(newCategory)
        handleClose()
    }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавить новую категорию
          </Typography>
          <TextField fullWidth variant='outlined' required onChange={(e) => setCategory(e.target.value)}/>
          <Button onClick={handleAdd}>Добавить</Button>
          <Button onClick={handleClose}>Отменить</Button>
        </Box>
      </Modal>
    </div>
  );
}