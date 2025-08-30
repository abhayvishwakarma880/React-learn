import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Hero() {
  return ( 
    <Carousel>
      <Carousel.Item interval={1000}>
        <img width={"100%"} height={"350px"}  text="First slide" src='https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img width={"100%"} height={"350px"}  text="Second slide" src='https://images.unsplash.com/photo-1611307742746-43cbea512c37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={"100%"} height={"350px"} text="Third slide" src='https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;