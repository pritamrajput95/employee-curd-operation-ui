import axios from "axios";

const EMP_API_BASE_URL="http://localhost:9193/emp";
class EmployeeService {

    getAllEmployees(){
        return axios.get(EMP_API_BASE_URL+ "/employees");
    }
    addEmployee(employee){
       return axios.post(EMP_API_BASE_URL+"/add/",employee);
    }
    getEmployeebyId(id){
        return axios.get(EMP_API_BASE_URL+"/search/"+id);
     }

    updateEmployee(employee,id){
        return axios.put(EMP_API_BASE_URL+"/update/"+ id, employee);
     }

     deleteEmployee(id){
        return axios.delete(EMP_API_BASE_URL + "/delete/" + id);
    }
    
}

export default new EmployeeService();