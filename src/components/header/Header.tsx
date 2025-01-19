import { FC } from 'react';
import { Link } from 'react-router-dom';

import { tabNames } from '@utils/constants';

import { IHeader } from './Header.props';
import styles from './header.module.css';

export const Header: FC<IHeader> = ({ handleTabClick, activeTab }) => {
  return (
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
                    className={`${styles['tab-btn']} ${activeTab === i && styles['tab-btn_active']}`}
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
  );
};
