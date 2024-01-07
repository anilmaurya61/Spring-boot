import axios from 'axios';
const api_url="http://localhost:8080/api/v1/employee";
class EmployeeService{
getEmployee(){
    return axios.get(api_url);
}
createEmployee(employee){
    return axios.post(api_url,employee);
}
}

export default new EmployeeService();