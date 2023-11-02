const Navbar= () =>{
    return (
        <nav className="container">
        <div className='logo'><img src="/images/brand_logo.png" alt="logo" /></div>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About Us</li>
          <li> Contact</li>
        </ul>
        <button>Sign In</button>
      </nav>
    );
};
export default Navbar;