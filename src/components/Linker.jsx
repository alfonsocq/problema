import React from "react";
import {Link} from 'react-router-dom';


const Linker = () => {

return (
  <div>
      < Link to="/lista">
                <button   className="btn btn-primary">
                  Lista
                </button>
              </Link>
              <Link to="/" className='btn btn-success'> Home
      </Link>
      </div>
)
}
export default Linker;