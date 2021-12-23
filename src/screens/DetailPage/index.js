import "react-image-gallery/styles/css/image-gallery.css";
import './index.css'
import ImageGallery from 'react-image-gallery';
import { useState, useEffect } from "react"
import Footer from "../../components/Footer"


function DetailPage({ redirect, detailItem }) {

  const { title, price, phone, description, image, name, state } = detailItem
  // console.log("DETAIL*****************", image);
  const [images, setImages] = useState([])

  useEffect(() => {
    const temp = []
    image.forEach((item) => {
      const obj = {
        original: item,
        thumbnail: item
      }
      temp.push(obj)
    })
    setImages(temp)
  }, [image])

  return <>
    <section id="navbar">
      <div className="navbar3">
        <button className='postBtn' onClick={() => { redirect("Home") }}>Back</button>
          <h2>Details</h2>
        <div>
        </div>
      </div>
    </section>

    <section id="body">
      <div className="carousel">

        <ImageGallery items={images} />

      </div>
      <div className="DtextArea">
        <h2>RS {price} </h2>
        <h3>{title}</h3>
        <br></br>
        <h3>Description</h3>
        <p>{description}</p>
        <div className="sellerInfo">
          <h2>Seller Description</h2>
          <p><b>Name:</b> {name}</p>
          <p><b>Number:</b> {phone}</p>
          <div>
            <button className="postBtn">Call Now</button>
          </div>
        </div>
      </div>

    </section>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Footer/>

  </>;
}

export default DetailPage;
