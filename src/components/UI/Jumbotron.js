import React from 'react';

import { Jumbotron as JumbotronBootstrap} from 'react-bootstrap';

const Jumbotron = (props) => {
  return ( 
    <JumbotronBootstrap>
      {props.children}
    </JumbotronBootstrap>
   );
}
 
export default Jumbotron;
