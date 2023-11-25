import React, { useEffect } from 'react';
import "./home.css"
import logoipsum from "../assets/logo/logoipsum.svg";
import img1 from "../assets/img/img1.png";
import portrait1 from "../assets/img/portrait1.jpg"
import portrait2 from "../assets/img/portrait2.jpg"
import portrait3 from "../assets/img/portrait3.jpg"
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {
        setTimeout(() => {
          AOS.init();
        }, 1000); // Delay in milliseconds
      }, []);

    return (
        <div>
            <header className="bg-dark">
                <div className="container d-md-flex text-center justify-content-between pt-2 px-0">
                    <div className="social-icons ">
                        <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&
                placement=&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%
                3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemode
                l%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D9060971%26loc_interest_ms%3D%26
                feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwl6OiBhA2EiwAuUwWZe3qfKOxNZIzdTd1Flkhy2lgMaX04742IYF4qkeL01s2NFP
                aOJOEbRoCR6QQAvD_BwE " target="_blank"
                            className="text-decoration-none px-1" >
                            <span><i className="bi bi-facebook text-light border border-1 px-1 
                        rounded-circle"></i></span>
                        </a>
                        <a href="https://twitter.com/i/flow/login" target="_blank" className="text-decoration-none px-1">
                            <span><i className="bi bi-twitter text-light border border-1 px-1 
                        rounded-circle"></i></span>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="text-decoration-none px-1">
                            <span><i className="bi bi-instagram text-light border border-1 px-1 
                        rounded-circle"></i></span>
                        </a>
                    </div>
                    <div className="contact p-0 d-flex justify-content-center pt-2 pt-md-0">
                        <div className="contact-sec d-flex justify-content-center">
                            <span><i className="bi bi-telephone-fill px-sm-3 text-warning"></i></span>
                            <a href="#" className="text-decoration-none">
                                <p className="mb-1 text-light">88-857-7759</p>
                            </a>
                        </div>
                        <div className="email-sec d-flex justify-content-center">
                            <span><i className="bi bi-envelope-fill px-3 text-warning"></i></span>
                            <a href="#" className="text-decoration-none">
                                <p className="mb-1 text-light  ">info@uimginvestments.com</p>
                            </a>
                        </div>
                    </div>
                </div>
            </header>


            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container px-0">
                    <div className="logo">
                        <a className="navbar-brand" href="#"><img src={logoipsum} alt="logo" className="img-logo" />
                        </a>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight">                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" >

                        <div className="offcanvas-body d-flex justify-content-between ">

                            <ul className="navbar-nav ms-lg-auto  mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a className="nav-link  fs-5 fw-medium p-3 text-uppercase" aria-current="page" href="#">
                                        <span className="link active" aria-current="true">Home</span>
                                    </a>

                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle fs-5 fw-medium p-3" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span className="link">OUR SERVICES</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link fs-5 fw-medium p-3 text-uppercase" aria-current="page" href="#">
                                        <span className="link">Career oppurtunities</span>

                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fs-5 fw-medium p-3 text-uppercase" aria-current="page" href="#">
                                        <span className="link">testimonials</span>

                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fs-5 fw-medium p-3 text-uppercase" aria-current="page" href="#">
                                        <span className="link">about</span>

                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fs-5 fw-medium p-3 text-uppercase" aria-current="page" href="#">
                                        <span className="link">contact</span>
                                    </a>
                                </li>

                            </ul>
                            <button type="button" className="btn-close bg-light d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                        </div>
                    </div>

                </div>
            </nav>



            <section className="banner d-flex align-items-center justify-content-center overflow-hidden">
                <div className="container  ">
                    <div className="row align-items-center">
                        <div className="col-md-7 " data-aos="fade-right" data-aos-delay="300">
                            <div className="d-flex justify-content-md-center justify-content-between">
                                <div className="col-md-4 text-center">
                                    <a href="#">
                                        <button type="button" className="btn btn-warning text-light 
                                                text-uppercase p-md-2 p-1">
                                            Explore more
                                        </button>
                                    </a>
                                </div>
                                <div className="col-md-6 z-0">
                                    <a href="#">
                                        <button type="button" className="btn btn-warning text-light 
                                             text-uppercase p-md-2 p-1">
                                            Take to an advisor
                                        </button>
                                    </a>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-5 text-light text-center text-lg-start z-0 mt-3 mt-lg-0"
                            data-aos="fade-left" data-aos-delay="300">
                            <h2 className="text-uppercase">Secure your future today</h2>
                            <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, necessitatibus! Magni, voluptate nostrum ducimus est sit quas quod vero saepe sint odit, esse eos similique vitae fugit ad numquam? Accusantium!</p>
                        </div>
                    </div>
                </div>

            </section>


            <section className="about pb-5 ">
                <section className="mission">
                    <div className="container">
                        <div className="row justify-content-between text-center ">
                            <div className="col-md-3 rounded-3 py-5  text-light  "
                                style={{ background: "var(--bs-bg-color4)" }} >
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span ><i className="bi-1 bi-search fs-1"></i></span>
                                </div>

                                <h3 className="mt-3 mx-5">Our Story</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, unde?</p>

                            </div>
                            <div className="col-md-3  border border-1 rounded-3 py-5 ">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span ><i className="bi-2 bi-search fs-1 "></i></span>

                                </div>
                                <h3 className="mt-3">Our Mission</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, unde?</p>

                            </div>
                            <div className="col-md-3  border border-1 rounded-3 py-5 " >
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span ><i className="bi-2 bi-search fs-1 "></i></span>
                                </div>
                                <h3 className="mt-3">Our Vision</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, unde?</p>

                            </div>


                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row align-items-center" >
                        <div className="col-md-6 text-center text-lg-start pb-3 pb-lg-0" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <h4 className="pb-3 fs-5">About Us</h4>
                            <h3 className="pb-3 fs-4">U-I-M-G is the brain child of Kahteire Mundit,a proffessional final and
                                real state advisor</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut hic soluta tempora sequi quasi placeat, quo saepe eaque
                                corporis unde numquam quia, iure autem recusandae dignissimos animi aperiam rem, quam dolorum temporibus quidem eum
                                natus cum omnis? Accusantium perspiciatis sed maiores tempora eaque. A, ratione. Aperiam eos fugit voluptas
                                molestiae!</p>
                            <a href="#">
                                <button className="btn btn-warning px-4 py-1 text-light">
                                    Read more
                                </button>
                            </a>

                        </div>
                        <div className="col-md-6" data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={img1} alt="#"
                                className="img-fluid rounded" />

                        </div>
                    </div>
                </div>
            </section>

            <section className="services py-5 overflow-hidden">
                <div className="container text-center">
                    <h4 className="fs-5 text-uppercase pb-3">Our services</h4>
                    <h4 className="fs-4 text-uppercase pb-3">what we offer</h4>
                    <p className="pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, repellendus fuga sed facilis eum cum, amet itaque,
                        consequuntur dolorum dolor mollitia porro! Qui, quia! Officia?</p>
                    <div className="row gy-4 justify-content-between px-5 pb-5">
                        <div className="col-md-5 border border-1 rounded-3 d-flex px-2 py-3
                        text-start align-items-center justify-content-between position-relative "
                            data-aos="fade-up" data-aos-duration="300">
                            <span><i className="bi bi-database-exclamation fs-1 border
                                 border-0 rounded-3 p-4 position-absolute 
                                 top-50 start-0 translate-middle"></i></span>
                            <div className=" col-10 ">
                                <h4>Life insurance & benefits</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ad!</p>
                            </div>

                        </div>
                        <div className="col-md-5 border border-1 rounded-3 d-flex px-2 py-3
                        text-start align-items-center justify-content-between position-relative" data-aos="fade-up" data-aos-duration="300" >
                            <span><i className="bi bi-database-exclamation fs-1 border
                                 border-0 rounded-3 p-4 position-absolute 
                                 top-50 start-0 translate-middle"></i></span>
                            <div className=" col-10 ">
                                <h4>Real State Management</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ad!</p>
                            </div>

                        </div>
                        <div className="col-md-5 border border-1 rounded-3 d-flex px-2 py-3
                        text-start align-items-center justify-content-between position-relative" data-aos="fade-up" data-aos-duration="400">
                            <span><i className="bi bi-database-exclamation fs-1 border
                                 border-0 rounded-3 p-4 position-absolute 
                                 top-50 start-0 translate-middle"></i></span>
                            <div className=" col-10 ">
                                <h4>Business Investments</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ad!</p>
                            </div>

                        </div>
                        <div className="col-md-5 border border-1 rounded-3 d-flex px-2 py-3
                        text-start align-items-center justify-content-between position-relative" data-aos="fade-up" data-aos-duration="400">
                            <span><i className="bi bi-database-exclamation fs-1 border
                                 border-0 rounded-3 p-4 position-absolute 
                                 top-50 start-0 translate-middle"></i></span>
                            <div className=" col-10 ">
                                <h4>Investment Club</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ad!</p>
                            </div>

                        </div>

                    </div>
                    <a href="#"><button className="btn btn-warning px-4 py-2 text-light 
                        text-uppercase" data-aos="fade-up" data-aos-duration="2000">Explore all</button></a>
                </div>
            </section>


            <section className="benefits py-5 overflow-hidden">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-5" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={img1} alt=""
                                className="img-fluid rounded" />

                        </div>
                        <div className="col-md-5 pt-5 pt-lg-0" data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <h4 className="pb-3 text-uppercase fs-5"> company benefits</h4>
                            <h3 className="pb-3 text-uppercase fs-4"> reap the rewards of saving with us</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt rem amet iusto nulla, quos, dolor quidem, eum
                                odit blanditiis cupiditate dolores ipsa maxime esse pariatur placeat modi porro consectetur vel? Dolores voluptatem
                                quis reprehenderit sed expedita asperiores magnam doloribus, ex fugit, accusamus corporis optio suscipit, eaque
                                maxime. Doloremque, totam!</p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="hero d-flex">
                <div className="container d-flex align-items-center justify-content-center text-center">
                    <p className="fs-2 text-light" data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur dolor mollitia ipsa obcaecati voluptate
                        impedit iusto voluptatum accusamus iure harum rerum reiciendis
                    </p>
                </div>

            </section>

            <section className="testimonials py-5">
                <div className="container text-center" data-aos="fade-up" data-aos-duration="3000">
                    <h4 className="fs-5 text-uppercase pb-3">testimonials</h4>
                    <h4 className="fs-4 text-uppercase pb-3">what people say about us</h4>
                    <p className="pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, repellendus fuga sed facilis eum cum, amet itaque,
                        consequuntur dolorum dolor mollitia porro! </p>
                </div>
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel"
                    data-aos="fade-up"
                    data-aos-duration="3000">
                    <div className="carousel-indicators ">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active bg-primary text-warning" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className=" bg-primary" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className=" bg-primary" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="1700" >
                            <div className="container" data-bs-interval="2000">
                                <div className="row justify-content-between  py-5">
                                    <div className="col-md-4 ">
                                        <div className="card-1 text-center py-3 px-5 border border-3">
                                            <img src={portrait1} className="rounded-circle " alt="clients-img" />
                                            <div className="card-body py-5">
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tenetur neque esse nobis similique.
                                                    Porro repellat quisquam magnam, dolorem iusto debitis quis sapiente fugiat aliquam blanditiis deleniti nulla
                                                    possimus temporibus eos consectetur vitae? Temporibus non laudantium porro nemo! Perferendis, aliquid!</p>
                                            </div>
                                            <h4>John Doe</h4>
                                            <p className="py-1">Designer</p>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-1 text-center py-3 px-5 border border-3">
                                            <img src={portrait1} className="rounded-circle " alt="clients-img" />
                                            <div className="card-body py-5">
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tenetur neque esse nobis similique.
                                                    Porro repellat quisquam magnam, dolorem iusto debitis quis sapiente fugiat aliquam blanditiis deleniti nulla
                                                    possimus temporibus eos consectetur vitae? Temporibus non laudantium porro nemo! Perferendis, aliquid!</p>
                                            </div>
                                            <h4>John Doe</h4>
                                            <p className="py-1">Designer</p>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-1 text-center py-3 px-5 border border-3">
                                            <img src={portrait1} className="rounded-circle " alt="clients-img" />
                                            <div className="card-body py-5">
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tenetur neque esse nobis similique.
                                                    Porro repellat quisquam magnam, dolorem iusto debitis quis sapiente fugiat aliquam blanditiis deleniti nulla
                                                    possimus temporibus eos consectetur vitae? Temporibus non laudantium porro nemo! Perferendis, aliquid!</p>
                                            </div>
                                            <h4>John Doe</h4>
                                            <p className="py-1">Designer</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="1700">
                            <div className="container">
                                <div className="row justify-content-between  py-5">
                                    <div className="col-md-4 ">
                                        <div className="card-1 text-center py-3 px-5 border border-3">
                                            <img src={portrait2} className="rounded-circle " alt="clients-img" />
                                            <div className="card-body py-5">
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tenetur neque esse nobis similique.
                                                    Porro repellat quisquam magnam, dolorem iusto debitis quis sapiente fugiat aliquam blanditiis deleniti nulla
                                                    possimus temporibus eos consectetur vitae? Temporibus non laudantium porro nemo! Perferendis, aliquid!</p>
                                            </div>
                                            <h4>John Doe</h4>
                                            <p className="py-1">Developer</p>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-1 text-center py-3 px-5 border border-3">
                                            <img src={portrait2} className="rounded-circle " alt="clients-img" />
                                            <div className="card-body py-5">
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tenetur neque esse nobis similique.
                                                    Porro repellat quisquam magnam, dolorem iusto debitis quis sapiente fugiat aliquam blanditiis deleniti nulla
                                                    possimus temporibus eos consectetur vitae? Temporibus non laudantium porro nemo! Perferendis, aliquid!</p>
                                            </div>
                                            <h4>John Doe</h4>
                                            <p className="py-1">Developer</p>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-1 text-center py-3 px-5 border border-3">
                                            <img src={portrait2} className="rounded-circle " alt="clients-img" />
                                            <div className="card-body py-5">
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tenetur neque esse nobis similique.
                                                    Porro repellat quisquam magnam, dolorem iusto debitis quis sapiente fugiat aliquam blanditiis deleniti nulla
                                                    possimus temporibus eos consectetur vitae? Temporibus non laudantium porro nemo! Perferendis, aliquid!</p>
                                            </div>
                                            <h4>John Doe</h4>
                                            <p className="py-1">Developer</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="1700">
                            <div className="container">
                                <div className="row justify-content-between  py-5">
                                    <div className="col-md-4 ">
                                        <div className="card-1 text-center py-3 px-5 border border-3">
                                            <img src={portrait3} className="rounded-circle " alt="clients-img" />
                                            <div className="card-body py-5">
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tenetur neque esse nobis similique.
                                                    Porro repellat quisquam magnam, dolorem iusto debitis quis sapiente fugiat aliquam blanditiis deleniti nulla
                                                    possimus temporibus eos consectetur vitae? Temporibus non laudantium porro nemo! Perferendis, aliquid!</p>
                                            </div>
                                            <h4>John Doe</h4>
                                            <p className="py-1">Manager</p>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-1 text-center py-3 px-5 border border-3">
                                            <img src={portrait3} className="rounded-circle " alt="clients-img" />
                                            <div className="card-body py-5">
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tenetur neque esse nobis similique.
                                                    Porro repellat quisquam magnam, dolorem iusto debitis quis sapiente fugiat aliquam blanditiis deleniti nulla
                                                    possimus temporibus eos consectetur vitae? Temporibus non laudantium porro nemo! Perferendis, aliquid!</p>
                                            </div>
                                            <h4>John Doe</h4>
                                            <p className="py-1">Manager</p>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-1 text-center py-3 px-5 border border-3">
                                            <img src={portrait3} className="rounded-circle " alt="clients-img" />
                                            <div className="card-body py-5">
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tenetur neque esse nobis similique.
                                                    Porro repellat quisquam magnam, dolorem iusto debitis quis sapiente fugiat aliquam blanditiis deleniti nulla
                                                    possimus temporibus eos consectetur vitae? Temporibus non laudantium porro nemo! Perferendis, aliquid!</p>
                                            </div>
                                            <h4>John Doe</h4>
                                            <p className="py-1">Manager</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section className="get py-5 overflow-hidden">
                <div className="container text-center" data-aos="fade-up" data-aos-duration="3000">
                    <h4 className="fs-5 text-uppercase pb-3 mb-0 text-light">Our services</h4>
                    <p className="pb-md-3 mb-0 text-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, repellendus fuga sed facilis eum cum, amet itaque,
                        consequuntur dolorum dolor mollitia porro! Qui, quia! Officia?</p>
                    <form className="row g-3 needs-validation justify-content-center py-md-1  px-5" novalidate="">
                        <div className="col-md-5">
                            <label htmlFor="validationCustom01" className="form-label"></label>
                            <input type="text" className="form-control py-md-3" id="validationCustom01" required="" fdprocessedid="6yoq0v"
                                placeholder="First name" />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-5 mt-md-3 mt-0">
                            <label htmlFor="validationCustom02" className="form-label"></label>
                            <input type="text" className="form-control py-md-3" id="validationCustom02" required="" fdprocessedid="x2rrni"
                                placeholder="Last name" />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-5 mt-md-3 mt-0 ">
                            <label htmlFor="validationCustomUsername" className="form-label"></label>
                            <div className="input-group has-validation">
                                <input type="text" className="form-control py-md-3" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                                    required="" fdprocessedid="bl2b5" placeholder="E-mail" />
                            </div>
                        </div>
                        <div className="col-md-5 mt-md-3 mt-0">
                            <label htmlFor="validationCustom03" className="form-label"></label>
                            <input type="number" className="form-control py-md-3" id="validationCustom03" required=""
                                fdprocessedid="qb38xe" placeholder="Phone" />

                        </div>
                        <div className="col-md-10 mt-md-3 mt-0">
                            <label for="exampleFormControlTextarea1" className="form-label"></label>
                            <div className="input-group has-validation">
                                <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="5" placeholder="message"></textarea>
                            </div>
                        </div>



                        <div className="col-12">
                            <button className="btn btn-warning text-light px-5" type="submit" fdprocessedid="8x36zu">Submit </button>
                        </div>
                    </form>
                </div>

            </section>


            <footer className="footer py-5" style={{ background: 'var(--bs-bg-color4)' }}>
                <div className="container">
                    <div className="row justify-content-start" data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className="col-md-3 me-5">
                            <a href="Index.html"><img src={logoipsum} alt="#" className="img-fluid pb-4" /></a>
                            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id doloribus natus nisi voluptates deleniti eos aperiam
                                vel ea officiis?</p>
                        </div>
                        <div className="col-md-3 text-light mx-md-5">
                            <h4 className="fw-normal">QUICK LINK</h4>
                            <ul className="ps-1 py-3">
                                <li className="list-unstyled my-1">
                                    <a href="#" className=" text-decoration-none">Home</a>
                                </li>
                                <li className="list-unstyled my-1">
                                    <a href="#" className=" text-decoration-none">About</a>
                                </li>
                                <li className="list-unstyled my-1">
                                    <a href="#" className=" text-decoration-none">FAQs</a>
                                </li>
                                <li className="list-unstyled my-1">
                                    <a href="#" className=" text-decoration-none">Testimonials</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-light ">
                            <h4 className="fw-normal">SERVICES</h4>
                            <ul className="ps-1 py-3">
                                <li className="list-unstyled my-1">
                                    <a href="#" className=" text-decoration-none">Financial services</a>
                                </li>
                                <li className="list-unstyled my-1">
                                    <a href="#" className=" text-decoration-none">Real Estate</a>
                                </li>
                                <li className="list-unstyled my-1">
                                    <a href="#" className=" text-decoration-none">Investment Club</a>
                                </li>
                                <li className="list-unstyled my-1">
                                    <a href="#" className=" text-decoration-none">Investment and Management</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>


            <section className="copy bg-dark">
                <div className="container">
                    <div className="row justify-content-between text-light align-items-center py-3">
                        <div className="col-md-3 col-5">
                            <p className="m-0">Copy-right <span className="">Ⓒ</span> 2023 UIMG</p>
                        </div>
                        <div className="col-md-3 col-5 text-center">
                            <p className="m-0">All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
