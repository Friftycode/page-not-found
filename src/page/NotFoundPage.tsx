import MoonImage from '../assets/MoonImage.tsx';
import RocketImage from '../assets/RocketImage.tsx';
import WorkingAstronautImage from '../assets/WorkingAstronautImage.tsx';
import styles from './NotFoundPage.module.less';

const NotFoundPage = () => {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Well, this isn’t where we were supposed to end up
        </h1>
        <p className={styles.paragraph}>
          Looks like we took a wrong turn somewhere and landed on this empty
          page. Not exactly what you were hoping for, right? Hit the button
          below, and we’ll whisk you away to the comfort of the homepage.
        </p>
        <button
          className={styles.button}
          onClick={() => {
            window.alert('Remember to add functionality to the button');
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
