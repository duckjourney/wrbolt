import styles from "../styles/TierCard.module.css";
import TierCard from "../components/TierCard";
import Selector from "../components/RoleSelector";
import { useStore } from "@nanostores/react";
import { searchFor } from "../stores/roleStores";
import { Helmet } from "react-helmet-async";

function TierList() {
  const searchTerm = useStore(searchFor);

  return (
    <>
      <Helmet>
        <title>Wild Rift | Tier list</title>
        <meta name="description" content="Wild Rift updated Tier list" />
      </Helmet>
      <Selector />
      <section>
        <div className={styles.tierContainer}>
          <TierCard
            tier="S+"
            style={styles.tierSPlus}
            searchTerm={searchTerm}
          />
          <TierCard tier="S" style={styles.tierS} searchTerm={searchTerm} />
          <TierCard tier="A" style={styles.tierA} searchTerm={searchTerm} />
          <TierCard tier="B" style={styles.tierB} searchTerm={searchTerm} />
        </div>
      </section>
    </>
  );
}

export default TierList;
