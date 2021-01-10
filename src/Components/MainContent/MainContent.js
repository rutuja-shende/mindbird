import React from 'react';
import {MDBCol, MDBRow, MDBContainer} from 'mdbreact';
import {Card, CardTitle, CardText, CardImg, CardImgOverlay, CardLink} from 'reactstrap';
import './MainContent.css';

function RenderCard({item}) {
    return(
        <div>
        <Card inverse id="card1">
            <CardImg width="100%" src={item.image} alt={item.name} />
            <CardImgOverlay>
                <CardTitle >{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
                    <CardLink>Read...</CardLink>
                <CardText>
                    <small className="text-muted">enter code for update time of post</small>
                </CardText>
            </CardImgOverlay>
        </Card>
        </div>
    );
}

function MainContent(props) {
        return (
            <React.Fragment>
            <MDBContainer className="out-container">
                <div>
                    <MDBContainer>
                    <MDBRow className="justify-content-end content-2"  >
                        <MDBCol md="6">
                            <p>In all chaotic beauty lies a wounded work of art.<br></br>Beautiful but torn, wreaking havoc on my heart.<br></br>Camouflaged by insecurities, blinded by it all.<br></br>I love the way you sit there and barely notice me at all.<br></br></p>
                        </MDBCol>
                        <MDBCol md="6">
                        <p>With a dolly and a zoom, the airbus<br></br>entire Everglades shows us:<br></br>blotchy cloud-shadows thrown<br></br>on seepage algae’s overgrown.</p>
                        </MDBCol>
                    </MDBRow>
                    </MDBContainer>
                </div>
                <h5 className="title-1"><strong>Discover Our<br></br> World</strong></h5>
                <div className="container" className="posts">
                    <div className="row align-items-start">
                        <div className="col-12 col-md m1">
                            <RenderCard item={props.poetry}></RenderCard>
                        </div>
                        <div className="col-12 col-md m1">
                            <RenderCard item={props.story}></RenderCard>
                        </div>
                        <div className="col-12 col-md m1">
                            <RenderCard item={props.drawing}></RenderCard>
                        </div>
                    </div>
                </div>
            </MDBContainer>
            </React.Fragment>      
        )
    
}

export default MainContent ;