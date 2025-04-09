import RsvpForm from './components/RsvpForm';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>You're Invited!</h1>
          <p className={styles.subtitle}>
            Join us to celebrate the upcoming arrival with love and laughter 💙
          </p>
        </section>
        <RsvpForm />
      </main>
      <footer className={styles.footer}>
        <p>© 2025 Baby Shower Celebration | Designed with 💙</p>
      </footer>
    </div>
  );
}
