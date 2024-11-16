import React, { useState } from "react";
import { Navbar, Nav, Container, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer"; // Correct path to Footer component
import "../User/uhome.css"; // Ensure you have the correct CSS file for styling

const Home = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(true);

  const handleNavigation = (path) => {
    setShowContent(false);
    navigate(path);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar
        style={{ backgroundColor: "blue" }}
        variant="dark"
        expand="lg"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              BookStore
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link
                to="/login"
                onClick={() => handleNavigation("/login")}
                style={{
                  padding: "10px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                User
              </Link>
              <Link
                to="/slogin"
                onClick={() => handleNavigation("/slogin")}
                style={{
                  padding: "10px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Seller
              </Link>
              <Link
                to="/alogin"
                onClick={() => handleNavigation("/alogin")}
                style={{
                  padding: "10px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Admin
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Conditional Content */}
      {showContent && (
        <div>
          {/* Content that appears before login page */}
          <h1 className="text-center" style={{ fontSize: "50px" }}>
            Best Seller
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Card style={{ width: "18rem", marginRight: "80px" }}>
                <Link to="/uproducts">
                  <Card.Img
                    variant="top"
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524451661i/39924789.jpg"
                  />
                </Link>
                <Card.Body>
                  <Card.Title className="text-center">
                    RICH DAD
                    <br />
                    POOR DAD
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", marginRight: "80px" }}>
                <Link to="/uproducts">
                  <Card.Img
                    variant="top"
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg"
                  />
                </Link>
                <Card.Body>
                  <Card.Title className="text-center">
                    THINK AND
                    <br />
                    GROW RICH
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", marginRight: "80px" }}>
                <Link to="/uproducts">
                  <Card.Img
                    variant="top"
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674147285i/80830635.jpg"
                  />
                </Link>
                <Card.Body>
                  <Card.Title className="text-center">DON'T LET HER STAY</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Link to="/uproducts">
                  <Card.Img
                    variant="top"
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675642559i/65214203.jpg"
                  />
                </Link>
                <Card.Body>
                  <Card.Title className="text-center">KILLING THE WITCHES</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h1 className="text-center" style={{ fontSize: "50px" }}>
            Top Recommendation
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Card style={{ width: "18rem", marginRight: "80px" }}>
                <Link to="/uproducts">
                  <Card.Img
                    variant="top"
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251.jpg"
                  />
                </Link>
                <Card.Body>
                  <Card.Title className="text-center">HARRY POTTER</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", marginRight: "80px" }}>
                <Link to="/uproducts">
                  <Card.Img
                    variant="top"
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692288251i/122765395.jpg"
                  />
                </Link>
                <Card.Body>
                  <Card.Title className="text-center">ELON MUSK</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", marginRight: "80px" }}>
                <Link to="/uproducts">
                  <Card.Img
                    variant="top"
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544102229i/42983957.jpg"
                  />
                </Link>
                <Card.Body>
                  <Card.Title className="text-center">THE MOSQUITO</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Link to="/uproducts">
                  <Card.Img
                    variant="top"
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347493537i/1979210.jpg"
                  />
                </Link>
                <Card.Body>
                  <Card.Title className="text-center">JOURNEY ON THE JAMES</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      )}
{/*Footer*/}
{/* //   <Footer/> */}
    </div>
  );
};

export default Home;

























































// src/components/Navbar.js
/**code given  */
// src/components/Navbar.js

// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import {Link } from "react-router-dom"
// import Footer from './Footer'; 

// const Home = () => {

//   return (
//     <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"blue"}}>
//       <Container>
//         <Navbar.Brand ><Link to='/' style={{color:'white',textDecoration:"none"}}>BookStore</Link></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto" >
//             <Link to="/login" style={{padding:"10px",color:"white",textDecoration:"none"}}>User</Link>
//             <Link to="/slogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Seller</Link>
//             <Link to="/alogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Admin</Link>   
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
//   {/*Footer*/}
//   <Footer/>
  
// };

// export default Home;






// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import Footer from './Footer'; 

// const Home = () => {
//   return (
//     <>
//       <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"blue"}}>
//         <Container>
//           <Navbar.Brand>
//             <Link to='/' style={{color:'white',textDecoration:"none"}}>BookStore</Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ml-auto">
//               <Link to="/login" style={{padding:"10px",color:"white",textDecoration:"none"}}>User</Link>
//               <Link to="/slogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Seller</Link>
//               <Link to="/alogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Admin</Link>   
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default Home;
