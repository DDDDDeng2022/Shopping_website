/* eslint-disable react/prop-types */
import { IconButton, OutlinedInput, InputAdornment, FormControl } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/userSlice"

const SearchBar = (props) => {
    const { isSearchWrap, searchInput, setSearchInput } = props;
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setSearchInput(e.target.value);
        if (e.target.value) {
            dispatch(setFilter(""));
        }
    }
    return (
        <FormControl
            sx={{
                flexGrow: 1,
                display: { xs: isSearchWrap ? "block" : "none", sm: isSearchWrap ? "none" : "block" },
            }}
        >
            <OutlinedInput
                sx={{
                    backgroundColor: "white", width: "100%", color: "grey",
                    '& .MuiInputBase-input': {
                        padding: { xs: "5px", sm: "10px" },
                        fontSize: { xs: "15px", sm: "20px" }
                    }
                }}
                id="search"
                type={"text"}
                size="small"
                placeholder="Search"
                value={searchInput}
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => dispatch(setFilter(searchInput))}
                            edge="end"
                        >
                            <SearchOutlinedIcon sx={{
                                color: "grey",
                                fontSize: { xs: "20px", sm: "30px" }
                            }} />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};
export default SearchBar;
