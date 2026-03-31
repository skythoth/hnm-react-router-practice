import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성']
    return (
        <nav>
            <div className="nav-top">
                <div className='login-button' onClick={() => navigate('/login')}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>로그인</span>
                </div>
            </div>
            <div className='nav-brand' onClick={() => navigate('/')}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/960px-H%26M-Logo.svg.png" alt="" />
            </div>
            <div className="menu-area">
                <ul className='nav-menu'>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar