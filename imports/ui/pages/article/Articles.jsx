import React from 'react';

import ArticleList from './ArticleList';
import ArticleCreate from './ArticleCreate';
import Header from './Header';

export default () => {
  return (
    <div>
      <Header title="All Offers"/>
      <div className="page-content">
        <ArticleCreate />
        <ArticleList />
      </div>
    </div>
  );
};
