import './records.css';

import { useSelector } from 'react-redux';

function Records() {

  const lastNameVisitor= useSelector((state) => state.recordsReducer.lastNameVisitor)
  const firstNameVisitor = useSelector((state) => state.recordsReducer.firstNameVisitor)
  const ids = useSelector ((state) => state.recordsReducer.ids)
  const emails = useSelector ((state) => state.recordsReducer.emails)
  const lastConnection = useSelector ((state) => state.recordsReducer.lastConnection)
  const NumberConnectionsMonth = useSelector ((state) => state.recordsReducer.NumberConnectionsMonth)
  const NumberartcilsVisited = useSelector ((state) => state.recordsReducer.NumberartcilsVisited)
  const alreadyBought = useSelector ((state) => state.recordsReducer.alreadyBought)

  const datas = []

  for(let i =0; i<ids.length; i++) {
          
    datas.push(<tr>
      <td>{lastNameVisitor[i]}</td>
      <td>{firstNameVisitor[i]}</td>
      <td>{ids[i]}</td>
      <td>{emails[i]}</td>
      <td>{lastConnection[i]}</td>
      <td>{NumberConnectionsMonth[i]}</td>
      <td>{NumberartcilsVisited[i]}</td>
      <td>{alreadyBought[i]}</td>
    </tr>)

  }
  return (
    <div className="records">

      <h3>
        Tableau représentant le bilan de ce mois pour les quatre clients suivant:
      </h3>

      <table>
        <tr>
          <th>Nom visiteur</th>
          <th>Prénom</th>
          <th>ID</th>
          <th>Email</th>
          <th>Dernière connexion</th>
          <th>Nombre de connexions ce mois</th>
          <th>Nombre d'articles consultés</th>
          <th>Déjà acheté?</th>
        </tr>
        {datas}
        
        
      </table>
      
    </div>
  );
}

export default Records;
