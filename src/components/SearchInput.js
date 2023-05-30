import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Container, InputAdornment, TextField } from "@mui/material";

const SearchInput = (props) => {
  return (
    <div className="search-container">
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <TextField
          type="search"
          label="Search"
          value={props.value}
          onChange={(event) => props.setSearchInputValue(event.target.value)}
          InputLabelProps={{
            style: {
              color: "#C0B3C2",
            },
          }}
          sx={{
            width: 600,
            "& .MuiInputBase-root": {
              color: "#C0B3C2",
              "& fieldset": {
                border: 3,
                borderColor: "#C0B3C2",
              },
              "&:hover fieldset": {
                color: "#white",
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiInputAdornment-root svg": {
                color: "#C0B3C2",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Container>
    </div>
  );
};

export default SearchInput;
