import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

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

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar-wrapper sticky-top">
            <div className="navbar-inner d-flex justify-content-center">
                <header className="navbar-header d-flex align-items-center justify-content-between">
                    <a onClick={() => navigate('/')}>
                        <img className="navbar-logo" src="https://asset.29cm.co.kr/next-contents/2023/06/08/3f8131682d124d16b336774ba51c4a3e_20230608162823.png" alt="29CM" />
                    </a>
                    <nav className="d-lg-none">
                        <ul className="navbar-mobile-icons d-flex list-unstyled mb-0">
                            <li><a className="icon-nav-item" onClick={() => navigate('/login')}><FontAwesomeIcon icon={faUser} /></a></li>
                            <li><a className="icon-nav-item"><FontAwesomeIcon icon={faHeart} /></a></li>
                            <li><a className="icon-nav-item"><FontAwesomeIcon icon={faBagShopping} /></a></li>
                            <li><span className="icon-nav-item"><FontAwesomeIcon icon={faSearch} /></span><input placeholder='검색' /></li>
                        </ul>
                    </nav>
                </header>
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
                                <li><a className="icon-nav-item" onClick={() => navigate('/login')}><FontAwesomeIcon icon={faUser} /></a></li>
                                <li><a className="icon-nav-item"><FontAwesomeIcon icon={faHeart} /></a></li>
                                <li><a className="icon-nav-item"><FontAwesomeIcon icon={faBagShopping} /></a></li>
                                <li className="search-area"><span className="icon-nav-item"><FontAwesomeIcon icon={faSearch} /></span><input placeholder='검색' /></li>
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