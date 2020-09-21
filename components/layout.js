import Head from 'next/head'
import Navbar from '../components/navbar';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Next Example</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"></link>
                <link rel="icon"
                    type="image/png"
                    href="https://bitcoiner.net/wp-content/uploads/2019/01/Favicon-sm.png"/>
            </Head>
                <Navbar />
                <div className="container">
                    {props.children}
                </div>
        </div>
    );
};

export default Layout;