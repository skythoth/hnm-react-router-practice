import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const ProductDetail = () => {
    let {id} = useParams()
    const [product, setProduct] = useState(null)
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/skythoth/hnm-react-router-practice/products/${id}`
        //let url = `http://localhost:4000/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        setProduct(data)
    }
    useEffect(() => {
        getProductDetail()
    },[])
    return (
        <Container className="detail-container">
            <Row>
                {/* Left: Product Image */}
                <Col lg={6} className="detail-image-section">
                    <div className="detail-image-wrapper">
                        <img
                            className="detail-image"
                            src={product?.img}
                            alt={product?.title}
                        />
                    </div>
                </Col>

                {/* Right: Product Info */}
                <Col lg={6} className="detail-info-section">
                    {/* Brand & Title */}
                    <div className="detail-header d-flex justify-content-between align-items-start">
                        <div>
                            <a href="#" className="detail-brand">
                                {product?.brand}
                                <svg viewBox="0 0 24 24" width="10" height="10" xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <path fill="currentColor" fillRule="evenodd" d="m17.414 12-8.707 8.707-1.414-1.414L14.586 12 7.293 4.707l1.414-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                            <h2 className="detail-title">{product?.title}</h2>
                        </div>
                        <button className="detail-wishlist-btn">
                            <FontAwesomeIcon icon={faHeart} size="lg" />
                        </button>
                    </div>

                    {/* Price */}
                    <div className="detail-price-section d-flex align-items-end justify-content-between">
                        <div>
                            <div className="d-flex align-items-center gap-2">
                                {product?.priceNote && <strong className="detail-discount-rate">{product.priceNote}</strong>}
                                <strong className="detail-current-price">{product?.price.toLocaleString()}<span>원</span></strong>
                            </div>
                        </div>
                        <button className="btn btn-dark btn-sm detail-coupon-download-btn d-flex align-items-center gap-1">
                            <FontAwesomeIcon icon={faDownload} />
                            쿠폰받기
                        </button>
                    </div>

                    {/* Product Info Rows */}
                    <div className="detail-info-rows">
                        <div className="detail-info-row d-flex">
                            <span className="detail-info-label">무이자 할부</span>
                            <button className="detail-link-btn">카드사별 할부 혜택 안내</button>
                        </div>
                        <div className="detail-info-row d-flex">
                            <span className="detail-info-label">배송정보</span>
                            <span>3일 이내 배송 시작</span>
                        </div>
                        <div className="detail-info-row d-flex">
                            <span className="detail-info-label">배송비</span>
                            <div>
                                <p className="fw-bold mb-0">3,000원</p>
                                <p className="mb-0 text-muted">50,000원 이상 구매시 무료배송</p>
                                <p className="mb-0 text-muted">제주/도서산간 3,000원 추가</p>
                            </div>
                        </div>
                    </div>

                    {/* Option Selector */}
                    <div className="detail-option-selector">
                        <select className="btn w-100 detail-option-btn">
                            <option>사이즈</option>
                            {product?.size.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-2 detail-action-buttons">
                        <button className="btn btn-outline-dark flex-fill fw-bold detail-action-btn">
                            장바구니 담기
                        </button>
                        <button className="btn btn-dark flex-fill fw-bold detail-action-btn">
                            바로 구매하기
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail
