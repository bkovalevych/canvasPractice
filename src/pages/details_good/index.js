import Details_good from "./details_good";
import get from "lodash/get";
import { connect } from "react-redux";
import {updateBasket} from "../../redux/actions/goods"
export const mapStateToProps = (state) => {
    return {
        goods: get(state, "goods.goods", [])
    };
};

export const mapDispatchToProps = (dispatch) => ({
    updateBasket: (props) => dispatch(updateBasket(props))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details_good);