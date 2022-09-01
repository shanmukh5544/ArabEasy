import Header from "../../Component/Header/Header"
import SideBar from "../../Component/SideBar/SideBar"
import Tabs from "../../Component/Tabs/Tabs"


const objselect=[{
  values:"+91"
}, {
  values:"+1"
}]
export default function Landing(){
  return (
    <>
    <SideBar/>
   <div className="mainWrapper">
   <Header/>
   <Tabs  options={objselect} />
   </div>
    </>
  )
}
