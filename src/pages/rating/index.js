import Rating from "./rating";
import get from "lodash/get";
import {connect} from "react-redux";

export const mapStateToProps = (state) => {
    return {
        email: get(state, "user.email", "@Username"),
        firstName: get(state, "user.firstName", ""),
        lastName: get(state, "user.lastName", ""),
        points: get(state, "user.points", 0)
    };
};



export default connect(mapStateToProps)(Rating);