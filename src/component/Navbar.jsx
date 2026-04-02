import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faHeart, faBagShopping, faDoorClosed, faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap'

const mainNavLinks = [
    { label: 'Special-Order'},
    { label: 'Showcase'},
    { label: 'PT'},
    { label: '29Magazine'},
]

const categoryLinks = [
    { label: 'BEST'},
    { label: 'WOMEN' },
    { label: 'MEN' },
    { label: 'INTERIOR' },
    { label: 'KITCHEN' },
    { label: 'ELECTRONICS' },
    { label: 'DIGITAL' },
    { label: 'BEAUTY' },
    { label: 'FOOD' },
    { label: 'LEISURE' },
    { label: 'KIDS' },
    { label: 'CULTURE' },
    { label: 'EARTH' },
]

const subNavLinks = [
    { label: 'Event'},
    { label: 'Lookbook'},
]

const Navbar = ({authenticate, setAuthenticate}) => {
    const navigate = useNavigate();
    const search = (event) => {
        if (event.key === 'Enter') {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    }
    const [show, setShow] = useState(false)

    return (
        <div className="navbar-wrapper sticky-top">
            <div className="navbar-inner d-flex justify-content-center">
                <header className="navbar-header d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <a className="d-lg-none mobile-nav-btn" onClick={() => setShow(true)}>
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                    <a className="ms-2" onClick={() => navigate('/')}>
                        <img className="navbar-logo" src="https://asset.29cm.co.kr/next-contents/2023/06/08/3f8131682d124d16b336774ba51c4a3e_20230608162823.png" alt="29CM" />
                    </a>
                    </div>
                    <nav className="d-lg-none">
                        <ul className="navbar-mobile-icons d-flex list-unstyled mb-0">
                            {authenticate ? 
                                <li><a className="icon-nav-item" onClick={() => {setAuthenticate(false); navigate('/')}} aria-label="로그아웃"><FontAwesomeIcon icon={faDoorClosed} /></a></li>
                                : 
                                <li><a className="icon-nav-item" onClick={() => navigate('/login')} aria-label="로그인"><FontAwesomeIcon icon={faUser} /></a></li>
                            }
                            <li className="search-area"><span className="icon-nav-item"><FontAwesomeIcon icon={faSearch} /></span><input type="text" placeholder='검색' onKeyPress={(event) => search(event)} /></li>
                        </ul>
                    </nav>
                </header>
                <Offcanvas className="mobile-nav" show={show} onHide={() => setShow(false)} placement="start">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title><img className="navbar-logo" src="https://asset.29cm.co.kr/next-contents/2023/06/08/3f8131682d124d16b336774ba51c4a3e_20230608162823.png" alt="29CM" /></Offcanvas.Title>              
                    </Offcanvas.Header>             
                    <Offcanvas.Body>
                        {mainNavLinks.map((link) => (
                            <Offcanvas.Title>{link.label}</Offcanvas.Title>              
                        ))}
                    </Offcanvas.Body>
                </Offcanvas>
                <nav className="navbar-desktop d-none d-lg-flex flex-column">
                    <div className="navbar-desktop-top d-flex justify-content-between align-items-start">
                        <ul className="main-nav-list d-flex list-unstyled mb-0">
                            {mainNavLinks.map((link) => (
                                <li key={link.label} className="main-nav-item">
                                    <a>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                        <nav>
                            <ul className="icon-nav-list d-flex align-items-center list-unstyled mb-0">
                                {authenticate ? 
                                    <li><a className="icon-nav-item" onClick={() => {setAuthenticate(false); navigate('/')}} aria-label="로그아웃"><FontAwesomeIcon icon={faDoorClosed} /></a></li>
                                    : 
                                    <li><a className="icon-nav-item" onClick={() => navigate('/login')} aria-label="로그인"><FontAwesomeIcon icon={faUser} /></a></li>
                                }
                                <li><a className="icon-nav-item"><FontAwesomeIcon icon={faHeart} /></a></li>
                                <li><a className="icon-nav-item"><FontAwesomeIcon icon={faBagShopping} /></a></li>
                                <li className="search-area"><span className="icon-nav-item"><FontAwesomeIcon icon={faSearch} /></span><input type="text" placeholder='검색' onKeyPress={(event) => search(event)} /></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <ul className="category-list d-flex flex-wrap list-unstyled mb-0">
                            {categoryLinks.map((cat) => (
                                <li key={cat.label} className="category-item">
                                    <span>{cat.label}</span>
                                </li>
                            ))}
                            <li className="category-divider"></li>
                            {subNavLinks.map((link) => (
                                <li key={link.label} className="sub-nav-item">
                                    <a>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar