"use client"

import { useState } from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CreateOrganization() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return (
    <div className='createFormContainer'>
        <form action="" className='createForm'>
          <h1>Create Organization</h1>
          <TextField id="outlined-basic" label="Name" variant="outlined" required />
          <TextField id="outlined-basic" label="Acronym" variant="outlined" />
           <div className="flex gap-5">
           <FormControl fullWidth>
           <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
            </Select>
           </FormControl>

           <FormControl fullWidth>
           <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
            </Select>
           </FormControl>
           </div>
          <TextField id="outlined-basic" label="Phone Number" variant="outlined"  />
          <TextField id="outlined-basic" label="Website" variant="outlined" />
          <TextField id="outlined-basic" label="Year" variant="outlined" />

          <div className="createBtnWrapper">
             <button>Save</button>
             <button>Cancel</button>
          </div>
        </form>
    </div>
  )
}
