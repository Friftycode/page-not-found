import MoonImage from '../assets/MoonImage.tsx';
import RocketImage from '../assets/RocketImage.tsx';
import WorkingAstronautImage from '../assets/WorkingAstronautImage.tsx';
import styles from './NotFoundPage.module.less';

const NotFoundPage = () => {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>
          Well, this isn’t where we were supposed to end up
        </h1>
        <p className={styles.pageParagraph}>
          Looks like we took a wrong turn somewhere and landed on this empty
          page. Not exactly what you were hoping for, right? Hit the button
          below, and we’ll whisk you away to the comfort of the homepage.
        </p>
        <button
          className={styles.button}
          onClick={() => {
            // TODO: Replace with navigation logic, e.g., navigate('/');
          }}
        >
          Let’s pretend this never happened and take me to the homepage
        </button>
      </div>

      <MoonImage className={styles.moon} aria-label="Moon" />
      <RocketImage className={styles.rocket} aria-label="Rocket" />
      <WorkingAstronautImage
        className={styles.astronaut}
        aria-label="Astronaut"
      />
    </main>
  );
};

export default NotFoundPage;
