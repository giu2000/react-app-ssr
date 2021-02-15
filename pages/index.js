import styles from '../styles/Home.module.css'
import {Counter} from '../components/Counter';

export default function Home() {
  return (
    <div className={styles.container}>
      <Counter />
    </div>
  )
}
