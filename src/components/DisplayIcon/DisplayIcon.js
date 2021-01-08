import React from 'react';

import * as Fi from 'react-icons/fi';

const DisplayIcon = (props) => {
  const { icon, handlePickerState } = props;
  const allIcons = Object.values(Fi);

  const handleIconClick = () => {
    handlePickerState(true);
  };

  const getIcon = () => {
    console.log(icon);
    console.log(allIcons);
    const Icon = allIcons.find((fi) => fi.name === icon);
    if (Icon) {
      return <Icon />;
    }
    return <h1 className='tap'>Tap</h1>;
  };

  return (
    <button type='button' className='iconbutton' onClick={handleIconClick}>
      <div className='displayicon'>{icon && getIcon()}</div>
    </button>
  );
};

export default DisplayIcon;
