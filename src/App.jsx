

import FormPage from './Pages/Form/FormPage';
import FormContextProvider from './Context/FormContextProvider';

const App = () => {
  return (
    <div>
      <FormContextProvider>
        <FormPage/>
      </FormContextProvider>
    
    </div>
  );
};

export default App;