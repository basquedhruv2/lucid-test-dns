import React, { useState } from 'react';
import { Container, Paper, Table, TableBody, TableCell, TableHead, TableRow, Button, TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RecordFormModal from './RecordFormModal';

const initialRecords = [
    { id: 1, domainName: 'example.com', recordType: 'A', value: '192.168.1.1' },
    
];

const recordTypes = [
    "A", "AAAA", "CNAME", "MX", "NS", "PTR", "SOA", "SRV", "TXT", "DNSSEC"
];

const Dashboard = () => {
    const [records, setRecords] = useState(initialRecords);
    const [filter, setFilter] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [currentRecord, setCurrentRecord] = useState(null);

    const handleOpen = (record = null) => {
        setCurrentRecord(record);
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const handleSave = (newRecord) => {
        if (currentRecord) {
            setRecords(records.map(r => r.id === currentRecord.id ? { ...r, ...newRecord } : r));
        } else {
            setRecords([...records, { ...newRecord, id: records.length + 1 }]);
        }
    };

    const handleDelete = (recordId) => {
        setRecords(records.filter(r => r.id !== recordId));
    };

    const filteredRecords = records.filter(record =>
        record.domainName.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Container>
            <Button variant="contained" color="primary" onClick={() => handleOpen()}>
                Add Record
            </Button>
            <TextField
                label="Search by Domain Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Domain Name</TableCell>
                            <TableCell>Record Type</TableCell>
                            <TableCell>Value</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRecords.map((record) => (
                            <TableRow key={record.id}>
                                <TableCell>{record.domainName}</TableCell>
                                <TableCell>
                                    <FormControl fullWidth>
                                        <InputLabel>Record Type</InputLabel>
                                        <Select
                                            value={record.recordType}
                                            label="Record Type"
                                            onChange={(e) => handleSave({ ...record, recordType: e.target.value })}
                                        >
                                            {recordTypes.map(type => (
                                                <MenuItem key={type} value={type}>{type}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell>{record.value}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleOpen(record)}>Edit</Button>
                                    <IconButton onClick={() => handleDelete(record.id)} color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <RecordFormModal
                open={modalOpen}
                handleClose={handleClose}
                record={currentRecord}
                onSave={handleSave}
            />
        </Container>
    );
};

export default Dashboard;
