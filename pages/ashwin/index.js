import styles from "../../styles/Ashwins.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  /* runs only during build time */
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      ashwin: data,
    },
  };
};

const Ash = ({ ashwin }) => {
  return (
    <div>
      <h1>All Ashwin</h1>
      {ashwin.map((ash) => (
        <div key={ash.id}>
          <Link href={`/ashwin/${ash.id}`} key={ash.id}>
            <a className={styles.single}>
              <h3>{ash.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Ash;
