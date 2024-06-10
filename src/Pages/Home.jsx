import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import '../style/home.css'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slice/productSlice'
import { Spinner, Pagination } from 'react-bootstrap'
import notImg from '../assets/not-found.png'

const Home = () => {
  const { allProducts, error, loading } = useSelector(state => state.productReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8 // Number of products per page

  // Ensure allProducts is an array
  const productsArray = Array.isArray(allProducts) ? allProducts : []

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = productsArray.slice(indexOfFirstProduct, indexOfLastProduct)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <Header />
      <div style={{ marginTop: '170px' }} className="container-fluid">
        {loading ? (
          <div className="text-center mt-5 fw-bolder">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <>
            <Row className="my-5">
              {currentProducts.length > 0 ? (
                currentProducts.map(product => (
                  <Col key={product.id} className="mb-5" sm={12} md={6} lg={4} xl={3}>
                    <Link to={`/${product.id}/View`} className="text-left">
                      <Card className="image-card shadow rounded ms-5" style={{ height: '400px', width: '18rem' }}>
                        <Card.Img className="img-food" variant="top" src={product.photograph} />
                        <Card.Body className="overlay">
                          <div style={{ color: 'white' }} className="text">
                            <p>{product.name}</p>
                            <p>{product.neighborhood}</p>
                            <p>{product.cuisine_type}</p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))
              ) : (
                <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                  <img src={notImg} alt="" />
                  <div className="fw-bolder ms-5 text-center text-danger">
                    Restaurant Not Found!!
                  </div>
                </div>
              )}
            </Row>
            <div className='d-flex justify-content-center'>
              <Pagination className="pagination-custom text-center" style={{ background: 'black', width: "35px" }}>
                {Array.from({ length: Math.ceil(productsArray.length / productsPerPage) }, (_, index) => (
                  <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Home
