import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import withRouter from './Common/withRouter';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from "reselect";
import { changeLayoutMode } from 'store/actions';
import Preloader from "components/Common/Preloader";

const NonAuthLayout = (props) => {
  const dispatch = useDispatch();

  const selectLayoutModeState = (state) => state.Layout;
  const LayoutModeProperties = createSelector(
    selectLayoutModeState,
      (layout) => ({
        layoutModeType: layout.layoutModeType,
      })
  );

    const {
      layoutModeType
  } = useSelector(LayoutModeProperties);

  useEffect(() => {
    if (layoutModeType) {
      dispatch(changeLayoutMode(layoutModeType));
    }
  }, [layoutModeType, dispatch]);
  const loadingData = useSelector(state=>state.Layout.isPreloader);

  return (
    <React.Fragment>
      {loadingData.status?<Preloader text={loadingData.text}/>:null}
      {props.children}
    </React.Fragment>
  );
};

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object
};

export default withRouter(NonAuthLayout);
