import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css'
import CollectionsIcon from '@material-ui/icons/Collections';

const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <CollectionsIcon style={{ fontSize: '50px', color: 'white' }}><h1 style={{ color: 'red' }}>Hello</h1></CollectionsIcon><p className=" text-white  " style={{ display: 'inline-block', fontSize: '30px', fontWeight: 'bold', marginLeft: '10px' }}>TiwaryKeep</p>
            </div>

        </>
    );

}
export default Header;