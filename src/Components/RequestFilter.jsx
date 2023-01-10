import BasicInput from "./UI/BasicInput";
import BasicSelect from "./UI/BasicSelect";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";
import Button from "@mui/material/Button";
import {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

const RequestFilter = ({filter, setFilter, setLocalRequests, setPage}) => {
    const [searchingText, setSearchingText] = useState("");

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setFilter({...filter, query: searchingText});
                    setPage(1);
                }}
            >
                    <TextField
                        placeholder="Поиск..."
                        value={searchingText}
                        onChange={(e) => {
                            setSearchingText(e.target.value);
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position={'end'}>
                                    <IconButton type="submit">
                                        <SearchIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => {
                                            setFilter({...filter, query: ''});
                                            setSearchingText('');
                                            setPage(1);
                                            setLocalRequests([]);
                                        }}
                                    >
                                        <CancelIcon/>
                                    </IconButton>
                                </InputAdornment>

                            )
                        }}
                    />
            </form>
        </div>
    );
};

export default RequestFilter;