import {connect} from 'react-redux';
import Calculator from './Calculator';

const mapStateToProps = state => ({
    input: state.input
})

export default connect(mapStateToProps)(Calculator)