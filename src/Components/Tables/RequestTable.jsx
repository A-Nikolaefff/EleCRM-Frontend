import React from 'react';
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
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="right">{row.number}</TableCell>
                <TableCell align="right">{row.receiptDate}</TableCell>
                <TableCell align="right">{row.note}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
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

const RequestTable = ({requests}) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>

                        <TableCell>ID</TableCell>
                        <TableCell align="right">Number</TableCell>
                        <TableCell align="right">Receipt Date</TableCell>
                        <TableCell align="right">Note</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {requests.map((request) => (
                        <Row key={request.id} row={request} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RequestTable;