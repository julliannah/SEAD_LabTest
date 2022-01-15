import React from 'react';
import { Spinner } from 'reactstrap';

const Spinner = ({ color = 'primary' }) => {
    return (
        <div
            className="cr-page-spinner"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}
        >
            <Spinner color={color} />
            <span
                style={{
                    marginLeft: '10px',
                    fontSize: '20px'
                }}
            >
          Loading...
      </span>
        </div>
    );
};

export default Spinner;
