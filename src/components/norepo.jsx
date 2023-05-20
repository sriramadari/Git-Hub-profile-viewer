// RepositoryList.js
import React from 'react';

function Norepo({ Userdata }) {
  return (
    <div className="repository-list">
    {Userdata.name ?(<h3> {Userdata.name} has no Repositories </h3>) : (<h3>No Repositories Found !!</h3>)}
    </div>
  );
}

export default Norepo;
