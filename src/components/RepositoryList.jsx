// RepositoryList.js
import React from 'react';

function RepositoryList({ repositories }) {
  return (
    <div className="repository-list">
      <h3>Repositories:</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;
