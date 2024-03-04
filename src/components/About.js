import UserClass from "./UerClass"
import UserCard from "./UserCard"

const About=()=>{
    return(
        <div>
            <h1>About us</h1>
            <h1>We are from namasthey react</h1>
            <UserCard  name={"Rashi from function"}/>
            <UserClass  name={"rashi from class"}/>
        </div>
    )
}
export default About