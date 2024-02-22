import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {/* React Router will pass components into the <Outlet /> based on the path */}
      <Outlet />
    </div>
  );
}

export default NavBar;

// outlet - this becomes our new app container. When about button, render the about page component inside the outlet.
// So think of the outlet as a box that shows each page.
// outlet is a component that is provided by react-router-dom. It is used to render the child components of the current route.
// whichever component contains our outlet, becomes the main element of our router.
// The outlet shows the content. The createBrowser router function provides all of the instructions for the outlet to render the correct content.
// The outlet is a placeholder for the content that will be rendered based on the current URL.

// link component is special, it does some things like enabling additional features like prefetching when user hovers over the link.
