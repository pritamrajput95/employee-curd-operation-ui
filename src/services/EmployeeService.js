import axios from "axios";

const EMP_API_BASE_URL="http://localhost:9193/emp";
class EmployeeService {

    getAllEmployees(){
        return axios.get(EMP_API_BASE_URL+ "/employees");
    }
    addEmployee(employee){
       return axios.post(EMP_API_BASE_URL+"/add");
    }
    updateEmployee(employee){
        return axios.put(EMP_API_BASE_URL+"/update");
     }
     getEmployeebyId(id){
       return axios.get(EMP_API_BASE_URL+"/update"+id);
    }
}

export default new EmployeeService();