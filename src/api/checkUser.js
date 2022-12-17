
export const isUserLogged = () => {
    const username = localStorage.getItem('username');
    return (username !== '')
}