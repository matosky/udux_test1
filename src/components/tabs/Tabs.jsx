import React from 'react';
import './tabs.scss';

const Tabs = () => {
  return (
    <div className="tabs">
      <button className="tab active">Music</button>
      <button className="tab">Artist</button>
      <button className="tab">Playlist</button>
      <button className="tab">Favourite</button>
    </div>
  );
};

export default Tabs;
