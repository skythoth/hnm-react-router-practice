import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
    const [productList, setProductList] = useState([])
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
        let searchQuery = query.get('q') || ''
        console.log(searchQuery)
        let url = `https://my-json-server.typicode.com/skythoth/hnm-react-router-practice/products?q=${searchQuery}`
        //let url = `http://localhost:4000/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        // json-server는 배열을 직접 반환하지만, 정적 파일은 { products: [...] } 형태
        setProductList(Array.isArray(data) ? data : data.products)
    }
    useEffect(() => {
        getProducts();
    }, [query])
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