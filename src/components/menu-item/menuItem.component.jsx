import React from 'react';
import { withRouter } from 'react-router';

import './menuItem.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
    console.log({title, imageUrl});
    return <div className={`${size} menu-item`}
        onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            {/* A div contains the backgournd image.jut to make
             a hover without overflowing the parent container */}
        <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <h3 className="subtitle">SHOP NOW</h3>
        </div>
    </div>
};

export default withRouter(MenuItem);