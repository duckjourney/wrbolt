/* eslint-disable react/prop-types */
import styles from "../styles/TierCard.module.css";
import ChampsList from "../resources/ChampsList";
import { useStore } from "@nanostores/react";
import { currentRole } from "../stores/roleStores";

function TierCard(props) {
  const URL = "https://wildrift.leagueoflegends.com/en-us/champions/";
  const selectedRole = useStore(currentRole);

  const filteredChamps = ChampsList.filter((champion) => {
    const roleMatch =
      champion.tier === props.tier &&
      (champion.role === selectedRole || selectedRole === "All");
    const searchMatch = champion.name
      .toLowerCase()
      .includes(props.searchTerm.toLowerCase());
    return roleMatch && searchMatch;
  });

  return (
    <div className={styles.tier}>
      <p className={`${styles.tierClass} ${props.style}`}>{props.tier}</p>
      <ul className={styles.champList}>
        {filteredChamps.map((champion, index) => (
          <li key={index} className={styles.borderShow}>
            <a
              href={URL + champion.name}
              target="_blank"
              className={styles.link}
            >
              <img
                src={champion.portrait}
                alt={champion.name}
                className={styles.portrait}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TierCard;
