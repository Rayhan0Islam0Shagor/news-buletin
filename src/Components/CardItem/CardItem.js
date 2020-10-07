import React from 'react';
import { Card } from 'react-bootstrap';
import Button from '@material-ui/core/Button';


const CardItem = (props) => {
    const { title, description, urlToImage } = props.article;

    return (
        <div className="col-md-4">
            <Card className="m-3" style={{ cursor: "pointer" }}>
                <Card.Img height="200px" variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title.substring(0, 40) + '...'}</Card.Title>
                    <Card.Text>{description === null ? '' : description.substring(0, 80) + "..."}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="contained" color="primary">Read more</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CardItem;