import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import About from './About';
import Contact from './Contact'
import Service from './Service'

const Home = () => {
  return (
   <>
   <Carousel fade autoPlay={true}
    interval={2000}
    controls={false}
    indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 home-image"
          src="https://www.pngitem.com/pimgs/m/160-1609872_12-5-kg-gas-cylinder-hd-png-download.png"
          alt="First slide"
        />
        <Carousel.Caption className='crousel-heding'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home-image"
          src="https://media.istockphoto.com/photos/set-of-different-industrial-liquefied-gas-containers-picture-id611328502?k=20&m=611328502&s=612x612&w=0&h=lgvSFWkueaeCNoKznd-C-Nnza42njlwvO0wZePfMxyU="
          alt="Second slide"
        />

        <Carousel.Caption className='crousel-heding'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home-image"
          src="https://as2.ftcdn.net/v2/jpg/03/78/44/13/1000_F_378441335_Snua5d2F01OGT05ST5fSEEH6tJQOsBaB.jpg"
          alt="Third slide"  
        />

        <Carousel.Caption className='crousel-heding'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <About/>
    <Service/>
<Contact/>
   </>
  )
}

export default Home