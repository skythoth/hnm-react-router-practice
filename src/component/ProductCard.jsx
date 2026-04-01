import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const ProductCard = ({ item }) => {
    return (
        <div className="product-card" role="button">
            <div className="card-image-wrapper">
                {item.rank != null && (
                    <div className="card-rank-badge">{item.rank}</div>
                )}
                <img className="card-image" src={item.img} alt={item.title} />
                <button className="card-wishlist-btn">
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
            <div className="card-info">
                <div className="card-brand">{item.brand}</div>
                <div className="card-title">{item.title}</div>
                <div className="card-price-area">
                    {item.priceNote && (
                        <span className="card-price-note">{item.priceNote}</span>
                    )}
                    <span className="card-price">{item.price.toLocaleString()}</span>
                </div>
                <div className="card-badges">
                    {item.choice === true && <span className="card-badge badge-choice">초이스</span>}
                    {item.new === true && <span className="card-badge badge-new">신제품</span>}
                    {item.shipping && <span className="card-badge badge-shipping">{item.shipping}</span>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard