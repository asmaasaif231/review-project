import React from 'react';
import Header from './Header';
import Footer from './Footer';
import section1Image1 from '../images/image1.jpg';
import ListSec1 from './ListSec1';
import HomeSec1 from './homeSec1';



function  Home(){
    return (
        <>
        <Header/>
        <HomeSec1/>
          {/* section 3 */}
          <section id="skills">
            <div className="container">
                <div className="row">
    
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                        <h1 className="wow fadeInUp" data-wow-delay="0.6s"> Our Common Courses</h1>
             <ListSec1 imageName={section1Image1} CName="1Strategic human resource management" Cdescription="Deep focus on the HRM practices and policies applyed by organization in the world"  Clocation="Dubai" />
              <ListSec1 imageName={section1Image1} CName="2Strategic human resource management" Cdescription="Deep focus on the HRM practices and policies applyed by organization in the world"  Clocation="Dubai" />
              <ListSec1 imageName={section1Image1} CName="3Strategic human resource management" Cdescription="Deep focus on the HRM practices and policies applyed by organization in the world"  Clocation="Dubai" />
              <ListSec1 imageName={section1Image1} CName="1Strategic human resource management" Cdescription="Deep focus on the HRM practices and policies applyed by organization in the world"  Clocation="Dubai" />
              <ListSec1 imageName={section1Image1} CName="2Strategic human resource management" Cdescription="Deep focus on the HRM practices and policies applyed by organization in the world"  Clocation="Dubai" />
              <ListSec1 imageName={section1Image1} CName="3Strategic human resource management" Cdescription="Deep focus on the HRM practices and policies applyed by organization in the world"  Clocation="Dubai" />
             
             
              </div>
                    </div>
              </div>
            </div>
            </section>

        <Footer/>
        </>
        
        );
    }
export default Home;
    