import React from "react"
import userContext from "./useContext"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    render(){
        
        const {count}=this.state
        return(
            <div className="user-card">
            <h1 className="font-bold">
                logged in use :<userContext.Consumer>{(data)=>(<h1>{data.loggedInUser}</h1>)}</userContext.Consumer>
            </h1>
            <h2>name:{this.props .name}</h2>
            <h2>count:{count}</h2>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>Tap to increase</button>
            <h3>locality:bangalore</h3>
            <h4 >contact:@muhammedrashidt</h4>
            </div>
        )
    }
}

export default UserClass