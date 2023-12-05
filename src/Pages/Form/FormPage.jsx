import { useContext } from "react";
import createContext from "../../Context/createContext";
import Form from './../../Componet/Form';
import DataTable from './../../Componet/DataTable';
import "./FormPage.css"





const FormPage = () => {
    const { formData,setFormData } = useContext(createContext);
    
    return (
      
            <div className="containerr">
                <div className="left">
                    <Form/>
                </div>
                <div className="right">
                    <DataTable/>
                </div>
            </div>
        
    );
};

export default FormPage;