import React from 'react';
import Table from "./Table/Table";
import TableWrapper from "./Table/TableWrapper";

const RequestList = ({requests}) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
                show: false,
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