import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Checkbox, FormControlLabel } from "@mui/material";

const Filter = () => {
  return (
    <FormGroup>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        sx={{ width: 300 }}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={["item1", "item2", "item3"]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Store" />}
      />
      <FormControlLabel control={<Checkbox />} label="AAA" />
    </FormGroup>
  );
};

export default Filter;
