
function goMenu() {
  return this.$router.push({ name: 'Menu' });
}
function goNotice() {
  return this.$router.push({ name: 'Notice' });
}
function goFindStore() {
  return this.$router.push({ name: 'Find' });
}
function goLogin() {
  return this.$router.push({ name: 'Login' });
}
export default {goMenu,goNotice,goFindStore,goLogin}