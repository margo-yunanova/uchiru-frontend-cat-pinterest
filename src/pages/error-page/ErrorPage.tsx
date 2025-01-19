import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

import styles from './error-page.module.css';

export default function ErrorPage() {
  const error = useRouteError();

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    errorMessage = error.statusText || error.data;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div id="error-page" className={styles['error-page']}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
