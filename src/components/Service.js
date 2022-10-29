import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <>
            <div className="service-heading">
                <Link to='/service'> <h1> Our Services</h1></Link>

                <div className="service">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='card-image' variant="top" src="https://us.123rf.com/450wm/tiero/tiero1808/tiero180800060/107437448-3d-rendering-image-of-classic-gas-cylinder.jpg?ver=6" />
                        <Card.Body>
                            <Card.Title>LPG Cylinder for Home</Card.Title>
                            <Card.Text>
                                Book top class regular size cylinders of accurate weight & superior quality for your house hold needs.
                            </Card.Text>
                            <Button className='card-button'>Enquire Now</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='card-image' variant="top" src="https://img.freepik.com/free-photo/3d-rendering-gas-cylinder_23-2149290451.jpg?w=2000" />
                        <Card.Body>
                            <Card.Title>Small SuperGas</Card.Title>
                            <Card.Text>
                                We provide smaller cylinder that are safe, accurately weight and have easy portability for use.
                            </Card.Text>
                            <Button className='card-button'>Enquire Now</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='card-image' variant="top" src="https://thumbs.dreamstime.com/z/gas-cylinder-red-isolated-white-42475117.jpg" />
                        <Card.Body>
                            <Card.Title>Gas Connection for Office</Card.Title>
                            <Card.Text>
                                You can also register with us and start with new gas connection for your corporate offices.
                            </Card.Text>
                            <Button className='card-button'>Enquire Now</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='card-image' variant="top" src="https://4.imimg.com/data4/XM/LR/MY-3575944/lpg-gas-cylinder-250x250.jpg" />
                        <Card.Body>
                            <Card.Title>Home Delivery</Card.Title>
                            <Card.Text>
                                Book a new gas connection or refill it, we will deliver your cylinder at your place in on time.  n
                            </Card.Text>
                            <Button className='card-button'>Enquire Now</Button>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </>
    )
}

export default Service