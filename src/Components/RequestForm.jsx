import React, {useState} from 'react';
import Input from "./UI/Input";
import Button from "./UI/Button";

const RequestForm = ({create}) => {
    const [requestDto, setRequestDto] = useState({receiptDate: '', note: ''});

    const addNewRequest = (e) => {
        e.preventDefault();
        create(requestDto);
        setRequestDto({receiptDate: '', note: ''});
    }

    return (
        <form>
            <Input
                value={requestDto.receiptDate}
                onChange={e => setRequestDto({...requestDto, receiptDate: e.target.value})}
                type="date"
                placeholder="Дата заявки"/>
            <Input
                value={requestDto.note}
                onChange={e => setRequestDto({...requestDto, note: e.target.value})}
                type="text"
                placeholder="Комментарий"/>
            <Button onClick={addNewRequest}>Создать пост</Button>
        </form>
    );
};

export default RequestForm;