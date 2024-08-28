import React from 'react';
import './section.scss';

const Section = ({ title, showAllLink, children }) => {
  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <a href={showAllLink} className="section-show-all">Show All</a>
      </div>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default Section;
