import React from 'react'
import styled from 'styled-components'
import tarek from '../Footer/tarek.jpg'
import tommy from '../Footer/tommy.jpg'

function Footer() {
  return (
    <FooterContainer className='main-footer'>
      <div className='footer-middle'>
        <div className='container2'>
          <div className='row'>
            {/* Footer Top */}
            <div className='footer-top'>
              <div>
                Welcome to Our App. Our simplified weather forecast it helps the elderly to have easy access to weather conditions and alerts.
              </div>
            </div>
            {/* {Column 1} */}
            <div className='col-md-3 col-sm-6'>
              <h4>William Fayette</h4>
              <ul className='list-unstyled'>

                <li><a href='https://github.com/william-tecnico108' target="_blank">GitHub</a></li>
                <li><a href='/'>Lorem ipsum</a></li>
              </ul>
            </div>
            {/* {Column 2} */}
            <div className='col-md-3 col-sm-6'>
              <img src={tarek} alt="missing image" />
              <div>

                <ul className='list-unstyled'>
                  <li><a href='https://github.com/xxTarekxx' target="_blank">GitHub</a></li>
                  <li><a href='https://www.linkedin.com/in/tarek-ismael-96777578/' target="_blank">LinkedIn</a></li>
                </ul>
              </div>
              <h4>Tarek</h4>
            </div>
            {/* {Column 3} */}
            <div className='col-md-3 col-sm-6'>
              <h4>Tommy</h4>
              <img src={tommy}></img>
              <ul className='list-unstyled'>
                <li><a href='https://github.com/TL-Dang' target="_blank">GitHub</a></li>
                <li><a href='https://www.linkedin.com/in/tommy-dang-307940ab/' target="_blank">LinkedIn</a></li>
              </ul>
            </div>
            {/* {Column 4} */}
            <div className='col-md-3 col-sm-6'>
              <h4>Maria Chicaia</h4>
              <ul className='list-unstyled'>
                <li><a href='/'>Lorem ipsum</a></li>
                <li><a href='/'>Lorem ipsum</a></li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className='footer-bottom'>
            <p className='text-xs-center'></p>
            &copy;{new Date().getFullYear()} Comfy Weather - All Rights Reserved
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}


export default Footer;


const FooterContainer = styled.footer`
  ${'' /* .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
} */}

  .footer-top {
    ${'' /* padding-top: 3rem; */}
    padding-bottom: 2rem;
}


  .footer-bottom {
    padding-top: 2rem;
    padding-bottom: 2rem;
}

  ul li a {
    color: var(--mainGrey)
}

  ul li a: hover {
    color: var(--mainLightGrey)
}

  .container2 {
    background-color: #FFF5E4;
}

`;