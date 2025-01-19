import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { FavoriteCatsContext } from '@utils/constants';

import styles from './App.module.css';

const tabNames = [
  { name: 'Все котики', url: '/' },
  { name: 'Любимые котики', url: '/favorites' },
];

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
      <header className={styles.header}>
        <div className={styles.tabs}>
          <nav className="tab-nav">
            <ul
              className={styles['tab-list']}
              role="tablist"
              aria-orientation="horizontal"
            >
              {tabNames.map((tabName, i) => (
                <li className={styles['tab-item']} key={i}>
                  <Link to={tabName.url}>
                    <button
                      onClick={() => handleTabClick(i)}
                      role="tab"
                      id={`tab-${i}`}
                      aria-controls={`panel-${i}`}
                      aria-selected="false"
                      className={`${styles['tab-btn']} ${
                        activeTab === i && styles['tab-btn_active']
                      }`}
                    >
                      {tabName.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <FavoriteCatsContext.Provider value={{ favoriteCats, setFavoriteCats }}>
          <Outlet />
        </FavoriteCatsContext.Provider>
      </main>
    </>
  );
}

export default App;
