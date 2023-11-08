import React from 'react';
import AddProduct from '../components/product/AddProduct';
import AddCategoryModal from '../components/product/AddCategoryModal';
import { Button } from '@mui/material';

const AdminPage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen}>Add Category</Button>
            <AddProduct/>
            <AddCategoryModal open={open} handleClose={handleClose}/>
        </div>
    );
};

export default AdminPage;