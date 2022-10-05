import styles from './App.module.scss';
import data from './data/team';
import EmployeeCard from './components/EmployeeCard';
import NavBar from './components/NavBar';

const App = () => {

  return (
    <>
    <nav className={styles.nav}>
    < NavBar />
    </nav>
    <section className={styles.content}>
      < EmployeeCard />
    </section>
    </>
  );
};

export default App;

// pseudo-code plan
// need to create a card element
// mechanism to iterate over employee list using props
// useState for the counter component