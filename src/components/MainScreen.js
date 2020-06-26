import React from "react"
const MainScreen = () => {
    return (
        <div>
            <h1 className="text-center"> Data </h1>
            <button
                variant="primary"
                type="button"
                className="w-100 mt-3"
                onClick={onLogOut}
            >
                Log out
            </button>
        </div>
    );
}

export default MainScreen