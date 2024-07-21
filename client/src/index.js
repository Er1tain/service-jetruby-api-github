import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import PopularRepos from './components/App/Popularrepos';
import IDrepo from './components/App/IDrepo';
import OwnerRepoName from './components/App/OwnerRepoName';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App/>}></Route>
        <Route path={'/popular_repos'} element={<PopularRepos/>}></Route>
        <Route path={'/repo_id'} element={<IDrepo/>}></Route>
        <Route path={'/repo_name_owner'} element={<OwnerRepoName/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

