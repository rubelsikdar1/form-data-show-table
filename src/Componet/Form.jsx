import createContext from "../Context/createContext";
import "./Form.css";
import { useContext, useState } from 'react';


const Form = () => {
    const {setFormData}=useContext(createContext);
    // setFormData("this is checks");


const [oc, setOc]=useState("");

const check =(e)=>{
  return(
    setOc(e.target.value) 
  )
}



  return (
    <div>
      <div className="widthis border border-white-50 p-4 rounded-3 Regular shadow">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="inputName" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputLastName" className="form-label">
              last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputLastName"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" onChange={check} className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select  id="inputState" className="form-select">
              <option>Choosen One </option>
              <option>One</option>
              <option>two</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button disabled={oc === ""}  type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
