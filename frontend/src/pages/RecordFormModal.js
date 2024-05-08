import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const RecordFormModal = ({ open, handleClose, record, onSave }) => {
    const [formData, setFormData] = useState({
        domainName: record?.domainName || '',
        recordType: record?.recordType || '',
        value: record?.value || ''
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSave = () => {
        onSave(formData);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{record ? 'Edit' : 'Add'} DNS Record</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="domainName"
                    label="Domain Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={formData.domainName}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="recordType"
                    label="Record Type"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={formData.recordType}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="value"
                    label="Value"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={formData.value}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default RecordFormModal;
