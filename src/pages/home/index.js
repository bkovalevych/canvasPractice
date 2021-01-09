import {Topics} from "./topics";
import get from "lodash/get";
import { connect } from "react-redux";
import {getTopics, updateTopic} from "../../redux/actions/topics"

export const mapStateToProps = (state) => {
    return {
        topics: get(state, "topics", {})
    };
};

export const mapDispatchToProps = (dispatch) => ({
    updateTopic: (props) => dispatch(updateTopic(props)),
    getTopics: (props) => dispatch(getTopics(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topics);