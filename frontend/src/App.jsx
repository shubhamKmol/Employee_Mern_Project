import { useEffect, useState } from 'react'

import './App.css'
import EmployeeTable from './components/EmployeeTable'
import API from './services/api'
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [initialValues, setInitialValues] = useState({name: '', email: '', salary: '', department: '', role: '', joiningDate: ''})  ;
const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/employees", initialValues);
      setEmployees([...employees, response.data.data]);
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
     const fetchEmployees = async () => {
    try {
      setLoading(true);

      const response = await API.get("/employees");

      setEmployees(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
    fetchEmployees();
  }, []);

  return (
    <>
      <h1>Employee Management System</h1>

      <EmployeeTable
        employees={employees}
        loading={loading}
      />
      <button onClick={()=>setShowForm(true)}>Add Employee</button>
      {showForm && <EmployeeForm setShowForm={setShowForm} setInitialValues={setInitialValues} onSubmit={handleFormSubmit}/>}
    </>
  );
}

export default App
