// Write your solution in this file!
const employee = {name: "Mike", streetAddress: "12 Broadway" };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};

    newEmployee[key] = value;
    
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const noemployee = {...employee, key};
    delete noemployee.name;
    return noemployee;
}   
   
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}