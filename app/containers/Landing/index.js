/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getUsers} from '../../actions/users'
import './landing.module.scss';
import $ from 'jquery';
import Images from '../../assets/asset_imports';

const Landing = () => {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.errors);

  useEffect(()=>{
    dispatch(getUsers());

    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header-transparent").addClass("dimmed");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".header-transparent").removeClass("dimmed");
      }
  });

  },[])

return(
<>
<header id="header" class="header-transparent">
    <div class="d-flex align-items-center">

      <div id="logo" class="col-md-2">
        <a href="/"><img src={Images.app_logo} style={{width:'100%'}} alt=""/></a>
      </div>
      {
       console.log("11",users)
     }

    {
       console.log("22",loading)
     }
     {
       console.log("33",error)
     }
      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active"><a href="index.html">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li class="menu-has-children"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="menu-has-children"><a href="#">Drop Down 2</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="/Login">Sign in</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main">

    {/* <!-- ======= About Section ======= --> */}
    <section id="about">
      <div className="container" data-aos="fade-up">
        <div className="row about-container">

          <div className="col-lg-6 content order-lg-1 order-2">
            <h2 className="title">EXTRACT INVOICE DATA FASTER THAN EVER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#about" className="btn-free-trial">Free Trial</a>
            <a href="#lets_start" className="btn-get-started">Get Started</a>
          </div>

          <div className="col-lg-6 background order-lg-2 order-1" data-aos="fade-left" data-aos-delay="100"></div>
        </div>

      </div><br/><br/><br/><br/><br/><br/>
      <div className="section-header" style={{marginBottom:'16px'}}>
          <h5 className="section-title">TRUSTED BY COMPANIES OF ALL SIZES</h5>
          <div className="row counters justify-content-center mt-4">

          {[1,2,3,4,5,6].map(item => 
            <div className="col-sm-1 text-center">
            <i className="fa fa-google" style={{fontSize:'52px'}} aria-hidden="true"></i>
            <p>Google</p>
          </div>            
            )
          }

          </div>
      </div>
    </section>

<div id="details" style={{position:'relative'}}>
      <div className="row">
            <div className="container elevated-card">
              <div className="col-lg-6" style={{padding:'90px 100px'}}>
              <h5 className="card-title">WE SAY “NO” TO MANUAL INVOICE PROCESSING</h5>
              </div>
              <div className="col-lg-6 justify-content-center align-items-center" style={{display:'flex'}}> 
              <div>
              <p className="card-text">Automated invoice data capture streamlines your AP process with accuracy and affordability that traditional OCR solutions can't match.</p>
              <a className="gradBtn btn-1" style={{margin:'0'}}>See a better way to capture data 🠮</a>
              </div>
              </div>
            </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="container div-note">YOUR COMPANY CAN AUTOMATE INVOICE DATA CAPTURE TODAY</div>
 </div>   


    {/* <!-- ======= Services Section ======= --> */}
    <section id="services">
      <div className="container" data-aos="fade-up">
        <div className="row">
          {
            [1,2,3,4,5,6].map( index => 
              <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div className="box">
              <div className="form-group">
              <i className="fa fa-file" style={{fontSize:'32px',color:'#2dc997'}} aria-hidden="true"></i>
              </div>
              <h4 className="title"><a href="">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>

       {/* <!-- ======= diagram section ======= --> */}
       <section id="diagram">
      <div className="container" data-aos="fade-up">
        <div className="diagram-container">
    <div className="container diagram-note">CONVO-OCR CAN MAKE COGNITIVE INVOICE DATA CAPTURE THIS SIMPLE FOR YOU</div>
    <div className="form-inline justify-content-between" style={{margin:'50px 100px 0 100px'}}>
      <div className="col-sm-4">
        <h6>Receive documents</h6>
        <p>from various sources</p>
       </div>
       <div className="col-sm-4 text-right">
       <h6>Use extensions</h6>
        <p>for customization and integration</p>
       </div> 
    </div>
       <div className="row justify-content-center"><img src={Images.data_flow} alt="boilerplate workflow" align="center" /></div>
        </div>

      </div>
    </section>

        {/* <!-- ======= Services Section ======= --> */}
  <section id="caveats">
      <div className="container" data-aos="fade-up">
    <div className="container div-note">CONVO-OCR CAN EASILY ADAPT TO SUIT YOUR ORGANIZATION'S NEEDS</div>

        <div className="row" style={{marginTop:'50px'}}>
          {
            [1,2,3].map( index => 
              <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div className="box">
              <div className="form-group">
              <i className="fa fa-file" style={{fontSize:'32px',color:'#2dc997'}} aria-hidden="true"></i>
              </div>
              <h4 className="title">Lorem Ipsum</h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          )}
        </div>
        <div className="container">
        <a href="#">Read more</a>
          </div>
        
      </div>
    </section>



  </main>

  <footer id="footer">
    <div className="footer-top">
      <div className="container">

      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>CONVO-OCR</strong>. All Rights Reserved
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
</>
);
}

export default Landing;
