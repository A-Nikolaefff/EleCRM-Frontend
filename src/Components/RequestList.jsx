import React from 'react';
import Table from "./Table/Table";
import StyledTableWrapper from "./Table/StyledTableWrapper";

const RequestList = ({requests}) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
                show: false,
            },
            {
                Header: 'Номер',
                accessor: 'number',
            },
            {
                Header: 'Дата поступления',
                accessor: 'receiptDate',
            },
            {
                Header: 'Комментарий',
                accessor: 'note',
            },
        ],
        []
    )

    return (
        <div>
            <StyledTableWrapper>
                <Table columns={columns} data={requests} />
            </StyledTableWrapper>
        </div>
    );
};

export default RequestList;