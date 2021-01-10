
const Nav = () => {
    document.getElementById("nav-toggle").onclick = function () {
        document.getElementById("nav-content").classList.toggle("hidden")
    };
}

export default Nav;