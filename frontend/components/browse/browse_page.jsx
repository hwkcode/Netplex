import React from 'react';
import { Link } from "react-router-dom";

class BrowsePage extends React.Component {
    constructor(props) {
        super(props);
        this.endSession = this.endSession.bind(this);
    }

    endSession() {
        this.props.logout();
    }

    render() {
        return (
            <>
                <div>Welcome to your videos!</div>
                <button type="submit" className="button submit" onClick={this.endSession}>Sign Out</button>
            </>
        );
    }


}

export default BrowsePage;