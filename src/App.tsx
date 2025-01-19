import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { FavoriteCatsContext, tabNames } from '@utils/constants';
import { Header } from '@components/header/Header';

import styles from './App.module.css';

function App() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    tabNames.findIndex((tab) => tab.url === location.pathname),
  );

  const [favoriteCats, setFavoriteCats] = useState<string[]>(
    JSON.parse(localStorage.getItem('favoriteCats') ?? '[]') as string[],
  );

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <Header handleTabClick={handleTabClick} activeTab={activeTab} />
      <main className={styles.main}>
        <FavoriteCatsContext.Provider value={{ favoriteCats, setFavoriteCats }}>
          <Outlet />
        </FavoriteCatsContext.Provider>
      </main>
    </>
  );
}

export default App;
