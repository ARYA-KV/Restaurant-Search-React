import React, { useEffect, useState } from 'react'
import '../style/view.css'
import { Tab, Tabs, Container, Row, Col, Card, ListGroup, Spinner } from 'react-bootstrap';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import LocationMap from '../service/LocationMap';




function View() {
  const[product,setProduct]=useState({})
  const {id}=useParams()
  useEffect(() => {
    if (localStorage.getItem("allProducts")) {
        
      const allProducts=JSON.parse(localStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
      
    }
  
   
  }, [])
 

  return (


    <>
    <Header />
    <Container className="mt-2">

      <Row className='mt-5'>
        <Col md={6}>
          <Card className="mb-5 shadow rounded">
            <Card.Img variant="top" src={product?.photograph} style={{ height: '650px',}} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className=" shadow rounded">
            <Card.Body style={{ height: '650px',backgroundColor:'black'}}>
              <Card.Title>{product?.name}</Card.Title>
              <Card.Text><strong>Neighborhood:</strong>{product?.neighborhood}</Card.Text>
              <Card.Text><strong>Address:</strong>{product?.address}</Card.Text>
              <Card.Text><strong>Cuisine:</strong>{product?.cuisine_type}</Card.Text>
              <Tabs defaultActiveKey="profile" id="justify-tab-example" className="tb mb-5">
  <Tab eventKey="home" title="Operating Hours">
    {product.operating_hours ? (
      <ul>
        {Object.entries(product.operating_hours).map(([day, hours]) => (
          <li key={day}>
            <strong>{day}:</strong> {hours}
          </li>
        ))}
      </ul>
    ) : (
      <p>No operating hours available</p>
    )}
  </Tab>
  <Tab eventKey="profile" title="Reviews">
    {product.reviews ? (
      <div className="scrollable-reviews">
        <ul>
          {product.reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.name}</strong> <em>({review.date})</em>
              <br />
              <strong>Rating:</strong> {review.rating}/5
              <br />
              <p>{review.comments}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>No reviews available</p>
    )}
  </Tab>
  <Tab eventKey="longer-tab" title="Location">
      <LocationMap  lat={product?.latlng?.lat} lng={product?.latlng?.lng} />
  </Tab>

</Tabs>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container></>
  )
}

export default View
