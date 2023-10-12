const AllWork = ({employees,handleClick}) =>{
    return <div>
        <h4>Current Employees</h4>
       <ul>
        {employees.map(employee => <li key={employee.id}><span>{employee.name}</span> <span> <button onClick={()=>handleClick(employee.id)}>{!employee.off ? "Off" : "On"}</button> </span></li>)}
       </ul>
    </div>
}

export default AllWork