import "./design.css";

export default function Design() {
  return (
    <div className="container">
        <div className="topline"></div>
        <div className="disc"> GET 10% OFF</div>
            <div className="navbar">
                <div className="logo">LOGO</div>
                <ul>
                    <li>Products</li>
                    <li>Features</li>
                    <li>Support</li>
                    <li>Contact</li>
                    <li>About us</li>
                </ul>
                <button className="btn">Log in</button>

            </div>
            <div className="whiteline"></div>
        <div className="topcontainer">
  <div className="box">
      <h1>Make an unforgetable first impression</h1>
      <p>data is a smart elegant and digital business card.
      </p>

          <ul>
              <li>Share all your info with simple tap.</li>
          
              <li>increase your engagment</li>
              <li>Generate more leades</li>
              <li>Save time and Money</li>
          </ul>
          <button className="btn">Choose your design</button>
  </div>
  <img className="img1" src="assets/img1.jpeg" alt="" />
        </div>
        <div className="sent">
            <p>A modern and unique way to networking</p>
            
        </div>
        <div className="container2">
            <div className="box2">
<h1>How it works ?</h1>
<p>With NFC technology the DATA card can share all your information with just a tap against any smartphone.</p>
<p>Get access to advance features, like integration , video , unlimited links , analytics and more. </p>
<button className="btn">Shop now</button>
            </div>
            <img className="img2" src="assets/img2.jpeg" alt="" />
        </div>
     <div className="footer">
         <h2>Meet the Digital age</h2>
         <h6>Choose your design</h6>
         <img className="img3" src="assets/img3.jpeg" alt="" />
     </div>
    </div>
  )
}
