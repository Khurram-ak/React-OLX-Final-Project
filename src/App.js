import './App.css';
import Home from './screens/Home'
import LogIn from './screens/LogIn'
import AddPost from './screens/AddPost'
import DetailPage from './screens/DetailPage'
import { useState ,useEffect} from 'react';
import { getData } from './config/firebase'

function App() {
  const [active, setActive] = useState("Home")
  const [postData, setPostData] = useState([])
  const [detailItem,setDetailItem]=useState({})
  
  useEffect(() => {
    const data = []
    const dataFetch = async () => {
      (await getData()).forEach((doc) => {
        data.push(doc.data())
        console.log(doc.data())
      })
    }
    setPostData(data)
    dataFetch()
  }, [])

  function redirect(val,data) {
    setActive(val)
    if(data){
      setDetailItem(data)
    }
  }


  const[userLogged,setUserLogged]=useState(false)

  const userLogIn=()=>{
    setUserLogged(true)
  }
  
  const logOut=()=>{
    setUserLogged(false)
  }



  return <>

    {active == "Home"&& <Home redirect={redirect} userLogged={userLogged} postData={postData}  logOut={logOut}/>}
    {active == "LogIn"&& <LogIn redirect={redirect} userLogIn={userLogIn} />}
    {active == "AddPost"&&<AddPost redirect={redirect}/>}
    {active == "DetailPage"&&<DetailPage redirect={redirect} detailItem={detailItem} />}
  </>;
}

export default App;
