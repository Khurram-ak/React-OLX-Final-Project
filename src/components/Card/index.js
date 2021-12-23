import "./index.css"
function Card({ allData, redirect }) {
    const { title, price, phone, description, image, name, state } = allData
    // allData.map(item=>{
    //     console.log("check",item);
    // })

    return (
        <div className="card" onClick={() => { redirect("DetailPage", allData) }} >
            <div id='imgDiv'>
                <img src={image[0]} class="imgDemo" width='100%' alt="..." />
            </div>
            <div className='text' >
                <h2 >Rs {price}</h2>
                {/* <input style={{width:"100%",border:"none",outline:"none"}} value={description} readOnly/> */}
                 <p >{`${description.slice(0,75)}... `}</p>
                <h4 >{state}</h4>
            </div>
        </div>
    )



}
export default Card







