import React from 'react'
// import "../src/Pagination.css";

function Table({emps}) {
  return (
    <table >
        <thead>
            <tr>
                <th align='left'>ID</th>
                <th align='left'>Name</th>
                <th align='left'>Email</th>
                <th align='left'>Role</th>
            </tr>
        </thead>
        <tbody>
            {
                emps?.map(emp=>{
                    return(
                        <tr key={emp.id}>
                            <td align='left'>{emp.id}</td>
                            <td align='left'>{emp.name}</td>
                            <td align='left'>{emp.email}</td>
                            <td align='left'>{emp.role}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default Table