import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी' }
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLang, setSelectedLang] = useState('en'); // Default to Hindi

  useEffect(() => {
    i18n.changeLanguage(selectedLang);
  }, [selectedLang, i18n]);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (langCode) => {
    setSelectedLang(langCode);
    handleClose();
  };

  return (
    <>
      <Tooltip title="Select Language">
        <IconButton onClick={handleOpen} color="inherit">
          <LanguageIcon sx={{color:'black'}} />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === selectedLang}
            onClick={() => handleChangeLanguage(lang.code)}
          >
            <ListItemIcon>
              {lang.code === selectedLang && <span style={{ fontSize: 14 }}>✅</span>}
            </ListItemIcon>
            <ListItemText primary={lang.label} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageDropdown;
