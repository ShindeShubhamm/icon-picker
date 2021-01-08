import React, { useState } from 'react';

import Layout from './components/Layout/Layout';
import IconPicker from './components/IconPicker/IconPicker';
import DisplayIcon from './components/DisplayIcon/DisplayIcon';

import './styles/global.scss';

const App = () => {
  const [picker, setPicker] = useState(false);
  const [icon, setIcon] = useState('Tap');

  const handlePickerState = (state) => {
    setPicker(state);
  };

  const handleSetIcon = (pickedIcon) => {
    if (pickedIcon) {
      setIcon(pickedIcon);
    }
    setPicker(false);
  };

  return (
    <Layout>
      <DisplayIcon icon={icon} handlePickerState={handlePickerState} />
      <IconPicker open={picker} handleSetIcon={handleSetIcon} />
    </Layout>
  );
};

export default App;
