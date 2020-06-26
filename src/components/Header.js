import React, {Component} from "react"
import header from "/Users/duongnguyen/Desktop/schedule-planner-app/src/Header.png"

class Header extends Component {
    render(){
        return(
            <div>
                <img src={header} alt="UTD Header" style={{ width: "100%", height: 150}}/>
            </div>
        )
    }
}

export default Header