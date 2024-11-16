// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//         <footer style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
//         <div style={{display:"flex",justifyContent:"center"}}>
//         <button id='bt' className='item-center' style={{height:"50px"}} >Contact us</button>
//         </div>
//         <p style={{color:"white"}}>
// "Embark on a literary journey with our book haven – where every page turns into an adventure!"</p>
//             <p  style={{ color: 'white', marginBottom: '0' }}>Call At: 127-865-586-67</p>
//       <p style={{ color: 'white', marginBottom: '0' }}>
//       Copyright  &copy; {new Date().getFullYear()} By BookStore. <br/>All Rights Reserved.
//       </p>
//     </footer>
//     </div>
//   )
// }

// export default Footer
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'black',
      padding: '20px',
      textAlign: 'center',
      color: 'white',
      marginTop: 'auto'  // Ensures the footer pushes down when wrapped in a flex container
    }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: '10px' }}>
        <button id='bt' style={{
          height: "50px",
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          cursor: 'pointer',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
          Contact us
        </button>
      </div>
      <p>"Embark on a literary journey with our book haven – where every page turns into an adventure!"</p>
      <p style={{ marginBottom: '0' }}>Call At: 127-865-586-67</p>
      <p style={{ marginBottom: '0' }}>
        Copyright &copy; {new Date().getFullYear()} By BookStore.<br />All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
