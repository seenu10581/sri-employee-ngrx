const ADD_EMPLOYEE = "ADD_EMPLOYEE";
const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const addEmployee = (newEmployeeData) => {
    return {type: ADD_EMPLOYEE, payload: newEmployeeData};
};
export const deleteEmployee = (id) =>{
    return {type: DELETE_EMPLOYEE, payload: id};
};
export const updateEmployee = (employeeData) =>{
    return {type: UPDATE_EMPLOYEE, payload: employeeData};
};