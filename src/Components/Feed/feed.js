import React from 'react';
import {Card} from 'reacstrap';
import { CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderFeedItem({onepoetry, onClick}){
    return(
        <Link to={`/feed/${onepoetry.id}`}>
            <Card>
                <CardImg width="100%" src={onepoetry.image} alt={onepoetry.name}>
                </CardImg>
                <CardImgOverlay>
                    <CardTitle>{onepoetry.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
}


const Feed = () => {
    const feed = props.poetry.map((onepoetry) => {
        return(
            <div key={onepoetry.id} className="col-12 col-md-6 m-1">
                <RenderFeedItem poetry={poetry}/>
            </div>
        );
    });
}

export default Feed;