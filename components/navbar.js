import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
            {/* <div className="container"> */}
                <a className="navbar-brand" href="#">Next Example</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link" href="#">About</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            {/* </div> */}
        </nav>
    );
};

export default Navbar;