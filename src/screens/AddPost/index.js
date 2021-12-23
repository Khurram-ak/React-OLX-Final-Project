import "./index.css"
import { useState } from "react";
import { sendPostData, storeImage } from '../../config/firebase'
import swal from 'sweetalert'
const userObj = {
  title: "",
  description: "",
  price: "",
  state: "",
  name: "",
  phone: "",
}

function AddPost({ redirect }) {

  const [userInfo, setUserInfo] = useState(userObj)

  const { title, description, price, state, name, phone } = userInfo

  const userData = (e) => {

    const name = e.target.name
    const value = e.target.value
    const files = e.target.files


      if (name == "image") {
        setUserInfo({ ...userInfo, image: files })
      }
      else {
        setUserInfo({ ...userInfo, [name]: value })
      }
    }

    const AddPost = async (e) => {
      e.preventDefault()
      try {
        const allImages = await storeImage(userInfo.image)
        await sendPostData({ ...userInfo, image: allImages })
        // alert("Data Added Successfuly!")
        swal("", "Add Posted Successfully!", "success");
        setUserInfo(userObj)
      } catch (e) {
        // alert("Error", e.message)
        swal("", "Fill all the Required Field!", "error");

      }

    }
  

  return <>
    <section id="navbar2">
      <div className="navbar2">
        <button className="postBtn" onClick={() => { redirect("Home") }}>Back</button>
        <div>
          <h2>POST YOUR ADD NOW!</h2>
        </div>
      </div>
    </section>

    <section id='mainBox'>
      <form onSubmit={AddPost}>
        <div className='textDiv'>
          <h3>Include Some Details</h3><br></br>
          <h4>Add Title</h4>
          <input className='inputField' placeholder='Add Title Here' value={title} name="title" onChange={userData} />
          <p>Mention the key features of your item (e.g brands,model,age,type)</p>
          <br></br>
          <div>
            <h3>Description</h3><br></br>
            <textarea rows="6" cols="161" placeholder='Enter text here...' value={description} name="description" onChange={userData}></textarea>
          </div>
        </div>
        <div className='textDiv'>
          <h3>Set A Price</h3><br></br>
          <h4>Price</h4>
          <input type="number" className='inputField' placeholder='Add Price Here' value={price} name="price" onChange={userData} />
        </div>
        <div className='textDiv'>
          <h3>Upload Upto 5 Photos</h3><br></br>
          <input type="file" multiple onChange={userData} name="image" />
        </div>
        <div className='textDiv'>
          <h3>Confirm your location</h3><br></br>
          <h4>State</h4>
          <select className='inputField' placeholder='--Select Here' value={state} name="state" onChange={userData}>
            <option>--Select</option>
            <option value="Karachi">Karachi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Islamabad">Islamabad</option>s
          </select>
        </div>
        <div className='textDiv'>
          <h3>Review Your Details</h3><br></br>
          <h4>Name</h4>
          <input className='inputField' placeholder='Add Name Here' value={name} name="name" onChange={userData} />
          <div><br></br>
            <h4>Mobile</h4>
            <input className='inputField' placeholder='Add Mobile Number Here' value={phone} name="phone" onChange={userData} />
          </div>
        </div>

        <div className='textDiv2'>
          <button className="postBtn" type="submit">Post Now</button>

        </div>
      </form>
    </section>

  </>;
}

export default AddPost
