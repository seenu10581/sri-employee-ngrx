let initialState = [];
if(localStorage.employees){
  initialState = JSON.parse(localStorage.employees);
}
export function employeeReducer(state = initialState, action) {
  let newState;     
  switch (action.type) {
    case "ADD_EMPLOYEE":
        return [...state, action.payload];
    case "DELETE_EMPLOYEE":
      return state.filter(employee => employee.id != action.payload);    
    case "UPDATE_EMPLOYEE":
        newState = [...state];
        let index = newState.findIndex(employee => employee.id === action.payload.id)
        newState[index] = action.payload;
      return newState;
    default : 
      return state;
  }
}