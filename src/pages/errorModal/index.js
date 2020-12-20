import {ErrorModal} from "./errorModal";
import get from "lodash/get";
import { connect } from "react-redux";
import {errorHasBeenHandled} from "../../redux/actions/user";


export const mapStateToProps = (state) => {
    return {
        error: get(state, "user.error", false),
        errorTitle: get(state, "user.errorTitle", "nothing"),
        errorText: get(state, "user.errorText", "nothing")
    };
};

export const mapDispatchToProps = (dispatch) => ({
    handleError: () => dispatch(errorHasBeenHandled())
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);