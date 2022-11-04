import React from 'react';
import Table from "./UI/Table";
import {TableWrapper} from "../styles/components";

const RequestList = ({requests}) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Date',
                accessor: 'date',
            },
            {
                Header: 'Note',
                accessor: 'note',
            },
        ],
        []
    )

    return (
        <div>
            <TableWrapper>
                <Table columns={columns} data={requests} />
            </TableWrapper>
        </div>
    );
};

export default RequestList;