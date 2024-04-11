import ChampsList from "../resources/ChampsList";
import Selector from "../components/RoleSelector";
import styles from "../styles/Champions.module.css";
import { useStore } from "@nanostores/react";
import { currentRole, searchFor } from "../stores/roleStores";
import { Helmet } from "react-helmet-async";

function Champions() {
  const URL = "https://wildrift.leagueoflegends.com/en-us/champions/";
  const selectedRole = useStore(currentRole);
  const searchTerm = useStore(searchFor);

  const filteredChamps = ChampsList.filter((champion) => {
    const roleMatch = selectedRole === "All" || champion.role === selectedRole;
    const searchMatch = champion.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return roleMatch && searchMatch;
  });

  return (
    <>
      <Helmet>
        <title>Wild Rift | Champions</title>
        <meta name="description" content="Wild Rift updated champions list" />
      </Helmet>
      <div className={styles.championsContainer}>
        <Selector />
        <ul className={styles.championsList}>
          {filteredChamps.map((champion, index) => (
            <li key={index} className={styles.borderShow}>
              <a
                href={URL + champion.name}
                target="_blank"
                className={styles.linkShow}
              >
                <img
                  src={champion.portrait}
                  alt={champion.name}
                  className={styles.portraitShow}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Champions;
