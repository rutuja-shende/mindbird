import React from 'react';
import {MDBFooter, MDBCol, MDBContainer,MDBRow} from "mdbreact";

class Footer extends React.Component {
    render(){
        return(
            <MDBFooter color="grey" className="font-small pt-4 mt4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="4">
                            <h5 className="title">Footer Content</h5>
                            <p>use row and clmns to organise footer content</p>
                        </MDBCol>
                        <MDBCol md="4">
                            <h5 className="title">LINKS</h5>
                            <ul>
                                <li>
                                    <a>add various links here for ur footer</a>
                                </li>
                                <li>
                                    <a>add various links here for ur footer</a>
                                </li>
                                <li>
                                    <a>add various links here for ur footer</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="4">
                            <h5 className="title">LINKS</h5>
                            <ul>
                                <li>
                                    <a>add various links here for ur footer</a>
                                </li>
                                <li>
                                    <a>add various links here for ur footer</a>
                                </li>
                                <li>
                                    <a>add various links here for ur footer</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid >
                        &copy; {new Date().getFullYear()} Copyright: <a href="/">Rutuja Shende</a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        )
    }
}

export default Footer;