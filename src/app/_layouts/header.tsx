import styles from './header.module.css';

type Props = {};

export default function Header(props: Props) {
  const {} = props;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1>App</h1>
      </div>
    </header>
  );
}
