import React from 'react'
import { Container } from 'react-bootstrap'

const Login = () => {
    return (
        <Container>
            <div className="login-page d-flex flex-column align-items-center">
                {/* Coupon Banner */}
                <div className="coupon-banner position-relative w-100 rounded bg-dark text-white text-start" role="button">
                    <div className="coupon-circle coupon-circle-left"></div>
                    <div className="coupon-circle coupon-circle-right"></div>
                    <div className="position-relative" style={{ zIndex: 10 }}>
                        <strong className="d-block mb-1 fw-bold coupon-title">
                            15% 할인 쿠폰과 추가 혜택, 가입 즉시 발급
                        </strong>
                        <div className="d-flex align-items-center gap-2 coupon-detail">
                            자세히 보기
                            <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path fill="currentColor" fillRule="evenodd" d="m17.131 12-8.565 8.566-1.132-1.132L14.87 12 7.434 4.566l1.132-1.132z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Logo Section */}
                <div className="d-flex flex-column align-items-center justify-content-center gap-3 login-logo-section">
                    <div className="d-flex align-items-center">
                        <div className="border-end pe-3">
                            <img src="https://asset.29cm.co.kr/logo/login-29cm-logo.svg" alt="29CM" className="login-logo login-logo-29cm" />
                        </div>
                        <div className="border-end px-3">
                            <img src="https://asset.29cm.co.kr/logo/login-musinsa-logo.svg" alt="musinsa" className="login-logo login-logo-musinsa" />
                        </div>
                        <div className="ps-3">
                            <img src="https://asset.29cm.co.kr/logo/login-soldout-logo.svg" alt="soldout" className="login-logo login-logo-soldout" />
                        </div>
                    </div>
                    <div className="login-desc">29CM, 무신사, 솔드아웃을 하나의 계정으로 사용하세요</div>
                </div>

                {/* Main Buttons */}
                <div className="d-flex flex-column align-items-center w-100 login-btn-group">
                    <button className="btn btn-dark w-100 fw-bold login-btn-main">
                        무신사 통합계정 가입 및 로그인
                    </button>
                    <button className="btn w-100 fw-bold d-flex align-items-center justify-content-center gap-2 login-btn-kakao">
                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path fill="currentColor" fillRule="evenodd" d="M12 3.6c-5.302 0-9.6 3.335-9.6 7.449 0 2.558 1.662 4.814 4.194 6.155l-1.066 3.908c-.094.345.3.62.601.42l4.67-3.095q.59.06 1.201.06c5.302 0 9.6-3.334 9.6-7.448S17.302 3.6 12 3.6" clipRule="evenodd"></path>
                        </svg>
                        카카오로 계속하기
                    </button>
                    <button className="btn w-100 fw-bold d-flex align-items-center justify-content-center gap-2 login-btn-apple">
                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path fill="currentColor" d="M15.562 5.045c-.742.797-1.928 1.427-3.115 1.337-.148-1.079.433-2.225 1.112-2.933.742-.82 2.04-1.404 3.09-1.449.124 1.124-.358 2.225-1.087 3.045m1.075 1.55c-1.718-.09-3.189.888-4.005.888-.828 0-2.076-.843-3.436-.82-1.767.022-3.411.932-4.313 2.382-1.854 2.898-.482 7.19 1.31 9.55.877 1.168 1.928 2.449 3.312 2.404 1.31-.045 1.83-.775 3.412-.775 1.594 0 2.051.775 3.436.752 1.433-.022 2.336-1.168 3.213-2.337 1.001-1.325 1.41-2.617 1.434-2.685-.025-.022-2.769-.977-2.793-3.854-.025-2.404 2.163-3.55 2.261-3.617-1.235-1.663-3.164-1.843-3.831-1.888"></path>
                        </svg>
                        Apple로 계속하기
                    </button>
                </div>

                {/* Find ID / Password */}
                <div className="d-flex align-items-center justify-content-center gap-2 login-find-section">
                    <a href="#" className="login-find-link">아이디 찾기</a>
                    <div className="login-find-divider"></div>
                    <a href="#" className="login-find-link">비밀번호 찾기</a>
                </div>

                {/* Bottom Social Logins */}
                <div className="d-flex flex-column w-100 login-bottom-section">
                    <div className="text-center login-bottom-text">기존 29CM 회원만 사용하실 수 있습니다.</div>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1 login-social-btn">
                            <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path fill="currentColor" fillRule="evenodd" d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939" clipRule="evenodd"></path>
                            </svg>
                            페이스북 로그인
                        </button>
                        <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1 login-social-btn">
                            <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path fill="currentColor" d="M14.992 12.59 8.762 3.6H3.6v16.8h5.41v-8.992l6.228 8.992H20.4V3.6h-5.408z"></path>
                            </svg>
                            네이버 로그인
                        </button>
                        <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1 login-social-btn">
                            <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path fill="currentColor" fillRule="evenodd" d="M19.602 5.005A1 1 0 0 1 20.5 6v12l-.005.102a1 1 0 0 1-.893.893L19.5 19h-15l-.103-.005a1 1 0 0 1-.892-.893L3.5 18V6a1 1 0 0 1 .897-.995L4.5 5h15zM4.5 18h15V6h-.002a.5.5 0 0 1-.173.38l-6.837 5.86a.75.75 0 0 1-.865.08l-.111-.08-6.837-5.86-.07-.073A.5.5 0 0 1 4.5 6zm7.5-6.66L18.231 6H5.77z" clipRule="evenodd"></path>
                            </svg>
                            이메일 로그인
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Login
