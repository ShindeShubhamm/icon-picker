import React, { Fragment, useState, useEffect } from 'react';

import {
  Dialog,
  DialogActions,
  Button,
  DialogTitle,
  DialogContent,
} from '@material-ui/core';
import * as FiIcons from 'react-icons/fi';

const IconPicker = (props) => {
  const allIcons = Object.values(FiIcons);

  const [page, setPage] = useState(0);
  const [icons, setIcons] = useState([]);

  const {
    open,
    handleSetIcon,
    rowsInOnePage,
    columnsInOnePage,
    iconHeight,
    iconWidth,
    pickerHeight,
    pickerWidth,
  } = props;

  const maxIcons = allIcons.length;
  const maxPages = Math.ceil(maxIcons / (rowsInOnePage * columnsInOnePage));
  const totalIconsOnPage = rowsInOnePage * columnsInOnePage;

  useEffect(() => {
    const newIcons = allIcons.slice(
      page * totalIconsOnPage,
      (page + 1) * totalIconsOnPage
    );
    setIcons(newIcons);
    //eslint-disable-next-line
  }, [page]);

  const iconStyle = {
    height: `${iconHeight}px`,
    width: `${iconWidth}px`,
  };

  const pickerStyle = {
    maxHeight: `${pickerHeight}px`,
    width: `${pickerWidth}px`,
  };

  const handlePagination = (type) => {
    if (type === 'next') {
      if (page < maxPages - 1) {
        setPage(page + 1);
      }
    } else if (type === 'prev') {
      if (page > 0) {
        setPage(page - 1);
      }
    }
  };

  const handleClose = () => {
    handleSetIcon();
  };

  return (
    <Fragment>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
        <DialogTitle>Select Icon</DialogTitle>
        <DialogContent>
          <div className='paginator'>
            <button
              className='p-button'
              disabled={page === 0}
              onClick={() => handlePagination('prev')}>
              <FiIcons.FiChevronLeft />
            </button>
            <h3 className='p-text'>
              Page {page + 1} of {maxPages}
            </h3>
            <button
              className='p-button'
              disabled={page === maxPages - 1}
              onClick={() => handlePagination('next')}>
              <FiIcons.FiChevronRight />
            </button>
          </div>
          <div className='icons-container' style={pickerStyle}>
            {icons.map((Icon, index) => {
              return (
                <button
                  key={index}
                  type='button'
                  className='pick-button'
                  onClick={() => handleSetIcon(Icon.name)}>
                  <Icon className='fi-icon' style={iconStyle} />
                </button>
              );
            })}
          </div>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

IconPicker.defaultProps = {
  open: false,
  rowsInOnePage: 12,
  columnsInOnePage: 10,
  iconHeight: 20,
  iconWidth: 20,
  pickerHeight: 500,
  pickerWidth: 500,
};

export default IconPicker;
