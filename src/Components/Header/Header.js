import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer,MDBBtn, MDBMask, MDBView, MDBIcon ,MDBFormInline} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Header.css';
import image from '../Images/poetry2.jpg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="purple" fixed="top" dark expand="md" scrolling transparent >
              <MDBNavbarBrand href="/">
                <strong><i class="fas fa-dove"></i> MindBird</strong>
              </MDBNavbarBrand>
              <MDBFormInline className="sm-form search-bar-inline">
                      <MDBIcon icon="search" />
                        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
              </MDBFormInline>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <MDBNavLink to="/home">
                      <strong>Home</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem active>
                    <MDBNavLink to="/signup">
                      <strong>Feed</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem active>
                    <MDBNavLink to="/login">
                      <strong>Login</strong>
                    </MDBNavLink>
                  </MDBNavItem >
                  <MDBNavItem active>
                    <MDBNavLink to="/contactus">
                      <strong>ContactUs</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <form className="form-inline search-bar">
                      <input className="form-control form-control-sm mr-3 w-7" type="text" placeholder="Search" aria-label="Search" />
                      <MDBIcon icon="search"></MDBIcon>
                  </form>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src={image}a>
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center ">
              <div className="jumb-content">
              <h2> MindBird </h2>
              <h5>Shape Your Thoughts</h5>
              <p>Read poetries , short stories and other artworks  in the Picture Book Format  </p><br />
              <MDBBtn color="White" outline rounded href="#" className="btn2">EXPLORE</MDBBtn>
              </div>
            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}

export default Header;