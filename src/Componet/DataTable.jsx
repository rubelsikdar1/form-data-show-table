import { useContext } from "react";
import "./DataTable.css"
import createContext from './../Context/createContext';


const DataTable = () => {
  const {formData}=useContext(createContext);
  console.log(formData)
  return (
    <div>
      <div className="mainDataTable border-white-50 p-4 rounded-3 Regular shadow">
        <table className="table table-hover  ">
            <thead className=" table-dark fs-5  ">
                <tr>
                    <td>SL</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Address</td>
                    <td>Address 2</td>
                    <td>City</td>
                    <td>State</td>
                    <td>Zip</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>SL</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Address</td>
                    <td>Address 2</td>
                    <td>City</td>
                    <td>State</td>
                    <td>Zip</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                <tr>
                    <td>SL</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Address</td>
                    <td>Address 2</td>
                    <td>City</td>
                    <td>State</td>
                    <td>Zip</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
