import { render } from 'react-dom';
import { strictMode } from "react";
import SearchParams from './SearchParams'


const App = () => {
    return(
        <strictMode>
        <div>
        <h1>Adopt Me! </h1>
        <SearchParams />
      </div>
      </strictMode>
    );
};


 render(<App />, document.getElementById("root"));
