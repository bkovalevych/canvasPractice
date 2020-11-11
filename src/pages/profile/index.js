import {Profile} from "./profile";
import get from "lodash/get";
import {connect} from "react-redux";

export const mapStateToProps = (state) => {
    return {
        email: get(state, "user.email", "@Username"),
    };
};

export default connect(mapStateToProps)(Profile);