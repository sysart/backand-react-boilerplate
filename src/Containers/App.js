import { connect } from 'react-redux'
import App from '../Components/App/App';

import { getItems } from '../items/itemsActions';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.items.loading,
    items: state.items.data,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: () => {
      dispatch(getItems())
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer