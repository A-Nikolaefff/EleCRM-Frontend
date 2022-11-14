import React, {useState} from 'react';

import BasicButton from "./UI/BasicButton";
import BasicInput from "./UI/BasicInput";

const RequestForm = ({create}) => {
    const [requestDto, setRequestDto] = useState({receiptDate: '', note: ''});

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
            <BasicButton
                variant="contained"
                onClick={addNewRequest}
            >
                Создать заявку
            </BasicButton>
        </form>
    );
};

export default RequestForm;