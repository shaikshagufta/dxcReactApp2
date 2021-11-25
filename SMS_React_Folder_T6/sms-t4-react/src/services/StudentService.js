import Axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students"

class StudenService {

    getStudents(){
       return Axios.get(STUDENT_API_BASE_URL) 
    }


}
export default new StudenService()