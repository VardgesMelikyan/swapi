import React from 'react'

const ItemDetailsView = ({ item, image, record }) => {
    const { id, name } = item
    return (
        <React.Fragment>
            <img className="item-image"
                src={image} alt={id} />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(record, (child) => {
                        return (
                            <li className="list-group-item">
                                <span className="term">{child.props.label}</span>
                                <span>{child.props.field}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default ItemDetailsView