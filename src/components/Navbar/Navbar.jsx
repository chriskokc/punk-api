
const Navbar = () => {
    return (
    <>
        <form action="">
            <input type="text"  placeholder="Search.."/>
            <br />
            <label htmlFor="">High ABV (&gt; 6.0%)</label>
            <input type="checkbox" />
            <br />
            <label htmlFor="">Classic Range</label>
            <input type="checkbox" />
            <br />
            <label htmlFor="">Acidic (ph &lt; 4) </label>
            <input type="checkbox" />
        </form>
    </>
    );
}

export default Navbar;