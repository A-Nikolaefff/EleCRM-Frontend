import React, {useState} from 'react';
import {
    Collapse,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from '@mui/system';
import IconModal from "../Modals/IconModal.tsx";
import EditRequestForm from "../Forms/EditRequestForm";

const IconTableCell = styled(TableCell)({
    padding: 0,
    width: 60
})

function Row({row, index, update, remove}) {
    const [showSubTable, setShowSubTable] = React.useState(false);
    const [editingModalVisible, setEditingModalVisible] = useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell align="right" component="th" scope="row">{row.number}</TableCell>
                <TableCell align="right">{row.receiptDate}</TableCell>
                <TableCell align="right">{row.note}</TableCell>
                <IconTableCell align="center">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setShowSubTable(!showSubTable)}
                    >
                        {showSubTable ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </IconTableCell>
                <IconTableCell align="center">
                    <IconModal
                        visible={editingModalVisible}
                        setVisible={setEditingModalVisible}
                        icon={<EditIcon/>}
                    >
                        <h2 id="modal-title">Редактирование заявки № {row.number} от {row.receiptDate}</h2>
                        <EditRequestForm
                            row={row}
                            index={index}
                            update={update}
                            remove={remove}
                            setModalVisible={setEditingModalVisible}/>
                    </IconModal>
                </IconTableCell>
            </TableRow>

            {/*Subtable*/}
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={showSubTable} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                SubTable
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="right">Number</TableCell>
                                        <TableCell align="right">Receipt Date</TableCell>
                                        <TableCell align="right">Note</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="right">{row.number}</TableCell>
                                        <TableCell align="right">{row.receiptDate}</TableCell>
                                        <TableCell align="right">{row.note}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const RequestTable = ({requests, update, remove}) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Номер</TableCell>
                        <TableCell align="right">Дата получения</TableCell>
                        <TableCell align="right">Комментарий</TableCell>
                        <IconTableCell align="center"/>
                        <IconTableCell align="center"/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {requests.map((request, index) => (
                        <Row key={request.id} index={index} row={request} update={update} remove={remove}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RequestTable;