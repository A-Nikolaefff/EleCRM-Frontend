import React, {useState} from 'react';

import BasicButton from "../UI/BasicButton";
import BasicInput from "../UI/BasicInput";
import {Stack} from "@mui/system";

const CreateRequestForm = ({create, setModalVisible}) => {
    const [requestDto, setRequestDto] = useState({receiptDate: '', note: ''});
    const handleCloseModal = () => setModalVisible(false);

    const addNewRequest = (e) => {
        e.preventDefault();
        create(requestDto);
        setRequestDto({receiptDate: '', note: ''});
    }

    return (
        <form>
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
                    onClick={addNewRequest}
                >
                    Создать заявку
                </BasicButton>
                <BasicButton
                    variant="contained"
                    color="secondary"
                    onClick={handleCloseModal}
                >
                    Отмена
                </BasicButton>
            </Stack>
        </form>
    );
};

export default CreateRequestForm;