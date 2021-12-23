import "./index.css"


export default function Footer() {

    return <>
        <section id="footer">

            <div class="row">
                <div class="col-md-2 C1">
                    <h5>POPULAR CATEGORIES</h5>
                    <p>Cars</p>
                    <p>Flats For Rent</p>
                    <p>Jobs</p>
                    <p>Mobile Phones</p>
                </div>
                <div class="col-md-2 C1">
                    <h5>TRENDING SEARCHES</h5>
                    <p>Bikes</p>
                    <p> Watches</p>
                    <p>Books</p>
                    <p> Dogs</p>
                </div>
                <div class="col-md-2 C1">
                    <h5> ABOUT US</h5>
                    <p> About OLX Group</p>
                    <p>OLX Blog</p>
                    <p>Contact Us</p>
                    <p>OLX for Businesses</p>
                </div>
                <div class="col-md-2 C1">
                    <h5>OLX</h5>
                    <p>Help</p>
                    <p>Sitemap</p>
                    <p>Legal & Privacy information</p>
                </div>
                <div class=" C1">
                    <h5>FOLLOW US</h5>
                    <a href=""><i class="fab fa-facebook"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="far fa-play-circle"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <br />
                    {/* <div >
                        <img src="Assests/images/AppStore.png" alt="icon" width="85px" />
                        <img src="Assests/images/googleplay.png" alt="icon" width="85px" />
                    </div> */}
                </div>

            </div>




        </section>
        <div className='footerDiv'>
            <div className="footer">
                <span id="span">Free Classifieds in Pakistan . © 2006-2021 OLX </span>
            </div>
        </div>



    </>

}

