import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

export default ({ app }) => {
  console.log("app.router", app);
  app.router.initRouter = false;
  app.router.beforeEach(async (to, from, next) => {
    NProgress.start();
    if (!app.router.initRouter) {
      await app.store.dispatch(
        "permission/setRouter",
        app.router.options.routes
      );
      app.router.initRouter = true
    }
    next();
    NProgress.done();
  });
};
