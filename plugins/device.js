import { debounce } from "@/utils";
export default ({ app }) => {
  const func = debounce(function() {
    app.store.dispatch(
      "app/toggleDevice",
      window.innerWidth <= 768 ? "mobile" : "desktop"
    );
  }, 500);
  window.onresize = func;
};
