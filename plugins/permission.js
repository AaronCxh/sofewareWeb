import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

export default ({ app }) => {
  app.router.beforeEach(async (to, from, next) => {
    NProgress.start();
    next();
    NProgress.done();
  });
};
