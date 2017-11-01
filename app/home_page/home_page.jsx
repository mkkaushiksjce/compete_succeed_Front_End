import React from 'react';
import './home_page.less';
import $ from 'jquery';
import Navbar from '../components/navbar/navbar';

class HomePage extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    const {props, state} = this;

    return(
          <div className="homepage">
            <Navbar />
            <div className="home-section-wrap">
              <div className="overlay"></div>
              <div className="title-wrap">
                <h1 className="title">COMPETE SUCCEED</h1>
                <div className="subtitle">THE SOCIAL NETWORK FOR COMPETITORS IS HERE</div>
                <div id="contactBtnWrap">
                  <div id="createTest" className="button ripple test-buttons">CREATE TEST</div>
                  <div id="takeTest" className="button ripple test-buttons">TAKE TEST</div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

HomePage.propTypes = {
};

export default HomePage;
