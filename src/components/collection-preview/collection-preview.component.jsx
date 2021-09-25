import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {items.filter((item, index)=>index < 4)//display only 4 items.
            .map( ({id, ...otherItemProps}) => 
                <CollectionItem key={id} {...otherItemProps}/>
            )}
        </div>
    </div>
);

export default CollectionPreview;