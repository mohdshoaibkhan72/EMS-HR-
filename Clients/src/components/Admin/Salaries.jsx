import React, { useEffect, useState } from "react";
import { getEmployees, getLeaders, viewAllSalaries } from "../../http";
import { useHistory } from "react-router-dom";
import Loading from "../Loading";

const Salaries = () => {
  const history = useHistory();
  const [employees, setEmployees] = useState([]);
  const [employeeMap, setEmployeeMap] = useState({});
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [salaryResponse, employeeResponse, leaderResponse] =
          await Promise.all([
            viewAllSalaries({}),
            getEmployees(),
            getLeaders(),
          ]);

        const { data: salaryData } = salaryResponse;
        const empMap = {};

        [...employeeResponse.data, ...leaderResponse.data].forEach(
          (employee) => {
            empMap[employee.id] = [employee.name, employee.email];
          }
        );

        setEmployees([...employeeResponse.data, ...leaderResponse.data]);
        setEmployeeMap(empMap);
        setSalaries(salaryData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const searchSalary = async () => {
    try {
      const response = await viewAllSalaries({ employeeID: selectedEmployee });
      const { data } = response;
      setSalaries(data);
    } catch (error) {
      console.error("Error fetching salaries:", error);
    }
  };

  return (
    <>
      {salaries.length > 0 ? (
        <div className="main-content">
          <section className="section">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h4>Salaries</h4>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center w-100">
              <div className="form-group col-md-6">
                <label>Employee</label>
                <select
                  className="form-control select2"
                  value={selectedEmployee}
                  onChange={(e) => setSelectedEmployee(e.target.value)}
                >
                  <option value="">Employees</option>
                  {employees.map((employee) => (
                    <option key={employee._id} value={employee.id}>
                      {employee.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={searchSalary}
                className="btn btn-lg btn-primary col"
              >
                Search
              </button>
            </div>
          </section>
          <div className="table-responsive">
            <table className="table table-striped table-md center-text">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody className="sidebar-wrapper">
                {salaries.map((salary, idx) => (
                  <tr
                    key={salary._id}
                    className="hover-effect"
                    onClick={() => history.push(`salary/${salary._id}`)}
                  >
                    <td>{idx + 1}</td>
                    <td>{employeeMap[salary.employeeID]?.[0]}</td>
                    <td>{employeeMap[salary.employeeID]?.[1]}</td>
                    <td>{salary.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Salaries;
