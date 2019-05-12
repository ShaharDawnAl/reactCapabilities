import React from 'react'
import ReactDOM from 'react-dom';

//functional component
//A portal react as any other child in any way
function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            <h1>Portals Demo</h1>             
        </div>
    ,document.getElementById("portal-root")
    );
}

export default PortalDemo;
