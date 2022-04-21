import { connect } from "react-redux";
import { fetchMyList } from "../../actions/list_actions";
import MyList from "./my_list";


const mapStateToProps = (state) => ({
    myvideos: state.entities.lists,
    profile: state.session.profile
});

const mapDispatchToProps = (dispatch) => ({
    fetchMyList: () => dispatch(fetchMyList())
});

export default connect(mapStateToProps, mapDispatchToProps) (MyList);