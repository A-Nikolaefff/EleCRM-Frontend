import React, {useState} from 'react';

import BasicButton from "../UI/BasicButton";
import BasicInput from "../UI/BasicInput";
import {Stack} from "@mui/system";

const EditRequestForm = ({row, index, update, remove, setModalVisible}) => {
    const [requestDto, setRequestDto] = useState({id: row.id, receipt: row.receipt, note: row.note});
    const handleCloseModal = () => setModalVisible(false);

    const updateRequest = (e) => {
        e.preventDefault();
        update(requestDto, index);
        setModalVisible(false);
        setRequestDto({receipt: '', note: ''});
    }

    const removeRequest = (e) => {
        e.preventDefault();
        remove(requestDto.id, index);
        setModalVisible(false);
        setRequestDto({receipt: '', note: ''});
    }

    return (
        <div>
            <BasicInput
                value={requestDto.receipt}
                onChange={e => setRequestDto({...requestDto, receipt: e.target.value})}
                type="datetime-local"
                fullWidth={true}
                placeholder="Дата и время заявки"/>
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