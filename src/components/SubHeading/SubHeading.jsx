import React from 'react';

// Assets
import images from '../../constants/images'

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant" style={{color:'#fff',marginBottom:'0.5rem'}}>{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
