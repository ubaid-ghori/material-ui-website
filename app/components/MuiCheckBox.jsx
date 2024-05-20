"use client"
import React, { useState } from 'react';
import { Box, FormControlLabel, Checkbox } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const MuiCheckBox = () => {
    const [accept, setAccept] = useState(false);

    const handleChange = (e) => {
        setAccept(e.target.checked);
    };

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label='I accept terms and conditions'
                    control={<Checkbox checked={accept} onChange={handleChange} />}
                />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={accept}
                    onChange={handleChange}
                />
            </Box>
        </Box>
    );
};

export default MuiCheckBox;
