const initialState = {
    lastNameVisitor:["Martin","Petit","Robert","Richard"],
    firstNameVisitor:["Gabriel","Marie","Luc","Stéphanie"],
    ids:[24,25,26,27],
    emails:["g.martin99@gmail.com","m.petit99@gmail.com","l.rpbert99@gmail.com","s.richard99@gmail.com"],
    lastConnection:["2021/01/01","2021/01/04","2021/01/03","2020/12/11"],
    NumberConnectionsMonth:[2,1,5,0],
    NumberartcilsVisited:[4,5,7,2],
    alreadyBought:["oui","oui","oui","non"]
  };
  
  function produitsReducer(state = initialState, action) {
    switch (action.type) {
      
      default:
        return state;
    }
  }
  
  export default produitsReducer;
  