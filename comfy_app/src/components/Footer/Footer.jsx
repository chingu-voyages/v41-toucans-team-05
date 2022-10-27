import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer className='main-footer'>
      <div className ='footer-middle'>
      <div className='container2'>
      <div className='row'>
        {/* Footer Top */}
          <div className='footer-top'>
            <p className ='text-bg-center'></p>
            Contributers
          </div>
        {/* {Column 1} */}
          <div className ='col-md-3 col-sm-6'>
              <h4>William Fayette</h4>
                <ul className='list-unstyled'>
                <li><a href='https://github.com/william-tecnico108' target="_blank">GitHub</a></li>
                <li><a href='/'>Lorem ipsum</a></li>
                </ul>
        </div>
        {/* {Column 2} */}
          <div className ='col-md-3 col-sm-6'>
            <h4>Tarek</h4>
              <ul className='list-unstyled'>
                <li><a href='/'>Lorem ipsum</a></li>
                <li><a href='/'>Lorem ipsum</a></li>
                </ul>
        </div>
        {/* {Column 3} */}
          <div className ='col-md-3 col-sm-6'>
            <h4>Tommi</h4>
              <ul className='list-unstyled'>
                <li><a href='/'>Lorem ipsum</a></li>
                <li><a href='/'>Lorem ipsum</a></li>
                </ul>
        </div>
        {/* {Column 4} */}
          <div className ='col-md-3 col-sm-6'>
            <h4>Maria Chicaia</h4>
                <ul className='list-unstyled'>
                <li><a href='/'>Lorem ipsum</a></li>
                <li><a href='/'>Lorem ipsum</a></li>
                </ul>
        </div>
    </div>
        {/* Footer Bottom */}
          <div className='footer-bottom'>
            <p className ='text-xs-center'></p>
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