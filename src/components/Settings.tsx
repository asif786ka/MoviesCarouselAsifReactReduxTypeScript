import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/slices/themeSlice';
import { RootState } from '../redux/store';
import './Settings.css';

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={`settings-container ${theme}`}>
      <h1>Settings</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Switch to {theme === 'dark' ? 'light' : 'dark'} theme
      </button>
    </div>
  );
};

export default Settings;
