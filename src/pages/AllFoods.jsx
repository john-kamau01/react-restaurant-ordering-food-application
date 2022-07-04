import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import ReactPaginate from 'react-paginate';

import products from '../assets/fake-data/products';
import ProdcutCard from '../components/UI/product-card/ProductCard';

import '../styles/all-foods.css';
import '../styles/pagination.css';

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const searchedProduct = products.filter((item) => {
    if(searchTerm.value === "") return item;
    if(item.title.toLowerCase().includes(searchTerm.toLowerCase())) return item;
  });
  
  const productsPerPage = 8;
  const visitedPage = pageNumber * productsPerPage;
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productsPerPage);

  const pageCount = Math.ceil(searchedProduct.length / productsPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className='search__widget d-flex align-items-center justify-content-between'>
                <input type="text" placeholder='What are you looking for?' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <span><i className='ri-search-line'></i></span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6" xs="12" className='mb-5'>
              <div className='sorting__widget text-end'>
                <select className='w-50'>
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">Highest Price</option>
                  <option value="low-price">Lowerst Price</option>
                </select>
              </div>
            </Col>
            {displayPage?.map((item) => {
              return (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                  <ProdcutCard item={item}  />
                </Col>
              )
            })}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName='paginationBttns'
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFoods