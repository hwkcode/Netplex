import React from "react";
import { Link } from "react-router-dom";

import Welcome from "./welcome";
import SectionA from "./section_a";
import SectionB from "./section_b";
import SectionC from "./section_c";
import SectionD from "./section_d";

const SplashPage = () => {
    return (
        <div className="splash-page">
            <div className="splash-background">
                <Link to="/login" className="btn sign-in">Sign In</Link>
                <Welcome />
                <SectionA />
                <SectionB />
                <SectionC />
                <SectionD />
            </div>
        </div>
    );
};

export default SplashPage;