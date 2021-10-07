export default ({ app }) => {
  app.store.dispatch('app/toggleDevice', window.outerWidth <= 768 ? 'mobile' : 'desktop')
}