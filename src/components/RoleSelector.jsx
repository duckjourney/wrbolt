/* eslint-disable react/prop-types */
import roleStyles from "../styles/RoleSelector.module.css";
const route = "src/assets/roles/";
import { currentRole, searchFor } from "../stores/roleStores";

function RoleSelector() {

  const userInput = (e) => {
    searchFor.set(e.target.value)
  }

  return (
  <div className={roleStyles.container}>
    <ul>
      <li>
        <button
          onClick={() => {currentRole.set("All")
          }}
        >
          <img
            src={route + "All_icon.webp"}
            alt="All roles icon"
            className={roleStyles.roleIcons}
          />
        </button>
      </li>
      <li>
        <button
          onClick={() => {currentRole.set("Baron")
        }}
        >
          <img
            src={route + "Baron_icon.webp"}
            alt="Baron role icon"
            className={roleStyles.roleIcons}
          />
        </button>
      </li>
      <li>
        <button
         onClick={() => {currentRole.set("Jungle")
        }}
        >
          <img
            src={route + "Jungle_icon.webp"}
            alt="Jungle role icon"
            className={roleStyles.roleIcons}
          />
        </button>
      </li>
      <li>
        <button
          onClick={() => {currentRole.set("Mid")
        }}
        >
          <img
            src={route + "Mid_icon.webp"}
            alt="Mid role icon"
            className={roleStyles.roleIcons}
          />
        </button>
      </li>
      <li>
        <button
          onClick={() => {currentRole.set("Dragon")
        }}
        >
          <img
            src={route + "Dragon_icon.webp"}
            alt="Dragon role icon"
            className={roleStyles.roleIcons}
          />
        </button>
      </li>
      <li>
        <button
          onClick={() => {currentRole.set("Support")
        }}
        >
          <img
            src={route + "Support_icon.webp"}
            alt="Support role icon"
            className={roleStyles.roleIcons}
          />
        </button>
      </li>
    </ul>
    <input type="text" placeholder="Search champions" onChange={userInput}/>
    </div>    
  );
}

export default RoleSelector;
