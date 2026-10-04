import { useState } from "react";

const EmployeeForm = ({ onSubmit, setInitialValues,setShowForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    salary:'',
    department: '',
    role: '',
    joiningDate: '',
  });



return(<div>
  <form onSubmit={onSubmit}>
    <div>
      <label>Name:</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
    </div>
    <div>
      <label>Email:</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </div>
    <div>
      <label>Salary:</label>
      <input
        type="number"
        value={formData.salary}
        onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
      />
    </div>
    <div>
      <label>Department:</label>
      <input
        type="text"
        value={formData.department}
        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
      />
    </div>
    <div>
      <label>Role:</label>
      <input
        type="text"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      />
    </div>
    <div>
      <label>Joining Date:</label>
      <input
        type="date"
        value={formData.joiningDate}
        onChange={(e) => setFormData({ ...formData, joiningDate: e.target.value })}
      />
    </div>
    <button type="submit" onClick={()=> setInitialValues(formData)}>Submit</button>
    <button type="button" onClick={() => setShowForm(false)}>
      Close
    </button>
  </form>

</div>)
}
export default EmployeeForm;