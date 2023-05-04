

function Footer() {
  return (
    <footer id="footer"> 


    <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>This is an E-commerce project</p>
          </div>
        <div className="col-md-4">
            <h4>Connect With Us</h4>
            <ul>
              <li className="footer-links">
                <a href="https://www.facebook.com/">Facebook</a>
                <img src="public/facebook.png" />
                </li>
                
              <li className="footer-links"><a href="https://twitter.com/">Twitter</a></li>
              <li className="footer-links"><a href="https://www.instagram.com/">Instagram</a></li>
            </ul>
        </div>
        <div className="col-md-4">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="#">Phone:0712345678</a></li>
              <li><a href="#">Email: garsolinajaffar@gmail.com</a></li>
              <li><a href="#">Address: 00100 Jamia, Nairobi</a></li>
            </ul>
        </div>
        </div>
    </div>

    </footer>
  );
}

export default Footer;

