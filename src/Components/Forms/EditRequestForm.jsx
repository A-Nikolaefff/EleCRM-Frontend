import React, {useState} from 'react';

import BasicButton from "../UI/BasicButton";
import BasicInput from "../UI/BasicInput";
import {Stack} from "@mui/system";

const EditRequestForm = ({row, index, update, remove, setModalVisible}) => {
    const [requestDto, setRequestDto] = useState({id: row.id, receiptDate: row.receiptDate, note: row.note});
    const handleCloseModal = () => setModalVisible(false);

    const updateRequest = (e) => {
        e.preventDefault();
        update(requestDto, index);
        setModalVisible(false);
        setRequestDto({receiptDate: '', note: ''});
    }

    const removeRequest = (e) => {
        e.preventDefault();
        remove(requestDto.id, index);
        setModalVisible(false);
        setRequestDto({receiptDate: '', note: ''});
    }

    return (
        <div>
            <BasicInput
                value={requestDto.receiptDate}
                onChange={e => setRequestDto({...requestDto, receiptDate: e.target.value})}
                type="date"
                fullWidth={true}
                placeholder="Дата заявки"/>
            <BasicInput
                value={requestDto.note}
                onChange={e => setRequestDto({...requestDto, note: e.target.value})}
                type="text"
                fullWidth={true}
                placeholder="Комментарий"/>
            <Stack spacing={3} direction="row">
                <BasicButton
                    variant="contained"
                    onClick={updateRequest}
                >
                    Обновить заявку
                </BasicButton>
                <BasicButton
                    variant="contained"
                    color="warning"
                    onClick={removeRequest}
                >
                    Удалить заявку
                </BasicButton>
                <BasicButton
                    variant="contained"
                    color="secondary"
                    onClick={handleCloseModal}
                >
                    Отмена
                </BasicButton>
            </Stack>
        </div>
    );
};

export default EditRequestForm;