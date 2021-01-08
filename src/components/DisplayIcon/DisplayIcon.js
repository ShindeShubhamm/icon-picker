import React from 'react';

import * as Fi from 'react-icons/fi';

const DisplayIcon = (props) => {
  const { icon, handlePickerState } = props;

  const handleIconClick = () => {
    handlePickerState(true);
  };

  const getIcon = () => {
    const Icon = Fi[icon];
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
