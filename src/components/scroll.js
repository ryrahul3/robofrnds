import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ 'overflowY': 'scroll', 'border': '1px solid white', 'height': '900px' }}>
            {props.children}
        </div>
    )
}
export default Scroll;