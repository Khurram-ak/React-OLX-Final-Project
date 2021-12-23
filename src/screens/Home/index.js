import "./index.css"
import Card from "../../components/Card"
import { getData } from "../../config/firebase"
import { useEffect, useState } from "react";
import mainimg from "../../images/mainimg.png"
import add from "../../images/add.png"
import add2 from "../../images/add2.png"
import add3 from "../../images/add3.png"
import Footer from "../../components/Footer"
import { useSelector, useDispatch } from "react-redux"
import {removeUser} from "../../store/actions"

function Home({ redirect, userLogged, postData ,logOut}) {

  const dispatch = useDispatch()
  const [dropDown, setDropDown] = useState(false)
  const user = useSelector((state) => state.userData)
  console.log("redux", user);
  return <div>
    <section id='navbar'>
      <div className='nav'>
        <h2>BUY || SELL</h2>
        <input className='searchCity' placeholder='Search City' />
        <div className='search'>
          <input className='searchItem' placeholder='Search Cars,Mobile And Stuff' />
          <button class='btn'>Search</button>
        </div>
        <div id="icon">
          {!userLogged ?
            <p onClick={() => { redirect("LogIn") }}>Login</p> :
            <div id="dropDownContainer" >
              <p onClick={() => { setDropDown(!dropDown) }}>UserInfo</p>
              <div className="dropDown" style={{ display: !dropDown ? "none" : "block" }}>
                <h2>DATA FROM REDUX </h2>
                <div className="content">
                  <h3>Email</h3>
                  <p>{user && user.user.email}</p>
                </div>
                <div className="content">
                  <h3>User ID</h3>
                  <p>{user && user.user.uid}</p>

                </div>
                <div className="content">
                  <button className="postBtn" onClick={() => {
                    dispatch(removeUser())
                    setDropDown(false)
                    logOut(  )
                  }}>Log Out</button>
                </div>
              </div>
            </div>

          }
        </div>
        <button class='btn' disabled={!userLogged} onClick={() => { redirect("AddPost") }}>Sell </button>
      </div>
    </section>

    <section id="upperBody">
      <div className="categories" id="navbarNavDropdown">
        <ul class="navbar-nav ">
          <p>ALL CATEGORIES </p>
          <span class="fas fa-caret-down"></span>
          <p>Mobile Phones </p>
          <p>Cars</p>
          <p>Motercycles</p>
          <p>Houses</p>
          <p>T.V-Video-Audio</p>
          <p>Tablets</p>
          <p>Lands & Plots</p>
        </ul>
      </div>
      <div className="mainImg">
        <img src={mainimg} width="100%" />
      </div>
      <div className="add">
        <img src={add} />
      </div>

    </section>
    <section id="card">
      {postData.map(item => {
        return <Card allData={item} redirect={redirect} />
      })
      }
    </section>

    <section id="lowerBody">
      <div className="add2">
        <img src={add2} width='85%' />
      </div>
      <div className="add3">
        <img src={add3} width="100%" />
      </div>

    </section>

    <Footer />


  </div>;

}
export default Home;
