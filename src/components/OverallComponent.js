import React from "react"
import Header from "./Header"
import LoginPage from './LoginPage'
import Introduction from "./Introduction"
class OverallComponent extends React.Component {
    render(){
            return(
                <div>
                    <Header />
                    <Introduction />
                    <LoginPage />
                </div>
            );
    }
}


export default OverallComponent;