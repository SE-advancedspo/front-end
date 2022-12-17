export const authenticateUser = () => {
    this.$root.toast.show({message: "Please, authenticate yourself before moving on."})
    this.$router.push("/login");
}