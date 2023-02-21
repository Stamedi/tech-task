import React, { useContext, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import { AppContext } from '../App';

const Filters = () => {
  const [colorVal, setColorVal] = useState<string>('');
  const context = useContext(AppContext);
  const { handleColorFilter, handleOrientationFilter } = context;

  const handleReset = (event: any) => {
    const colorFilterResetVal = '';
    handleColorFilter(colorFilterResetVal, event);
    setColorVal(colorFilterResetVal);
  };

  return (
    <Container>
      {window.location.pathname.slice(1) !== '' && (
        <Box mt={4} display="flex" justifyContent="flex-end" alignItems="center">
          <Box>
            <Typography variant="h6" component="h6" sx={{ fontWeight: '600' }}>
              {window.location.pathname.slice(1) === 'search' ? 'Filters:' : 'Filter:'}
            </Typography>
            <form
              style={{ display: 'flex', alignItems: 'center' }}
              noValidate
              onSubmit={(event) => handleColorFilter(colorVal, event)}
            >
              <TextField
                id="standard-basic"
                label="Color/Hex Color Without #"
                variant="standard"
                value={colorVal}
                onChange={(event) => setColorVal(event.target.value)}
              />
              {colorVal.length !== 0 && (
                <IconButton sx={{ mt: 1 }} onClick={handleReset}>
                  <ReplayIcon />
                </IconButton>
              )}
            </form>

            {window.location.pathname.slice(1) === 'search' && (
              <FormControl sx={{ mt: 4 }} fullWidth>
                <InputLabel id="demo-simple-select-label">Orientation</InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="All Orientation"
                  onChange={handleOrientationFilter}
                >
                  <MenuItem value="">
                    <em>All Orientation</em>
                  </MenuItem>
                  <MenuItem value="landscape">Horizontal</MenuItem>
                  <MenuItem value="portrait">Vertical</MenuItem>
                  <MenuItem value="square">Square</MenuItem>
                </Select>
              </FormControl>
            )}
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Filters;
