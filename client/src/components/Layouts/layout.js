import React from  'react';

import Header from '../Header/header';

const Layout = (props) => {

    return(
        <div>
            <Header/>
            {props.children}
        </div>
    )
}

export default Layout;