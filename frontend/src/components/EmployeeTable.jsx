const EmployeeTable = ({ employees, loading }) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (<table >
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Role</th>
                <th>Joining Date</th>


            </tr>
        </thead>
        <tbody>
            {employees.map((employee) => (
                <tr key={employee._id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.department}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.role}</td>
                    <td>{new Date(employee.joiningDate).toLocaleDateString()}</td>
                </tr>
            ))}
        </tbody>




    </table>)
}


export default EmployeeTable;