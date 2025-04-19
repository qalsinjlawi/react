import React from 'react';

function Navbar() {
  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0 }}>🎥 YouTube Mock</h2>
      <input type="text" placeholder="Search" style={inputStyle} />
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#202020',
  color: 'white',
  padding: '10px 20px',
  fontFamily: 'Arial'
};

const inputStyle = {
  padding: '6px 10px',
  borderRadius: '4px',
  border: 'none',
  width: '300px',
  fontSize: '14px'
};

export default Navbar;
