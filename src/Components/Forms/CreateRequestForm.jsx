import React, {useState} from 'react';

import BasicButton from "../UI/BasicButton";
import BasicInput from "../UI/BasicInput";
import {Stack} from "@mui/system";

const CreateRequestForm = ({create, setModalVisible}) => {
    const [requestDto, setRequestDto] = useState({receipt: '', note: ''});
    const handleCloseModal = () => setModalVisible(false);

    const addNewRequest = (e) => {
        e.preventDefault();
        create(requestDto);
        setRequestDto({receipt: '', note: ''});
    }

    return (
        <form>
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