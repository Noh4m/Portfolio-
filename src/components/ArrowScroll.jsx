import "../ArrowScroll.css"

import React from 'react';

function ArrowScroll(props) {
    return (
        <div className="arrow absolute left-1/2 bottom-16 hidden md:block">
            <span className={props.color}></span>
            <span className={props.color}></span>
            <span className={props.color}></span>
        </div>
    );
}

export default ArrowScroll;