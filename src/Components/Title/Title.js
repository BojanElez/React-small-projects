import React, { useState } from 'react';

function Title({title}) {
    return (
        <div className="title">
            <h2>{title}</h2>
            <div className="underline"></div>
        </div>
    )
}

export default Title;