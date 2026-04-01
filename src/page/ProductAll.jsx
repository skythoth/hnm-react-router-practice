import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'

const ProductAll = () => {
    const [productList, setProductList] = useState([])
    const getProducts = async () => {
        let url = import.meta.env.DEV
            ? `http://localhost:4000/products`  //로컬에서 json-server 띄울 때
            : `/data/products.json`             //netlify 배포 시
        let response = await fetch(url);
        let data = await response.json();
        // json-server는 배열을 직접 반환하지만, 정적 파일은 { products: [...] } 형태
        setProductList(Array.isArray(data) ? data : data.products)
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <Container>
            <Row>
                {productList.map((menu) => (
                    <Col xs={12} sm={6} md={4} lg={3}><ProductCard item={menu} /></Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductAll