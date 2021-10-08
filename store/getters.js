const getters = {
  permission_routes: state => state.permission.routes,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  mode: state => state.app.mode,
  device: state => state.app.device
};

export default getters;
