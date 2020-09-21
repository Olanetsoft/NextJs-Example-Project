import Head from 'next/head'
import Navbar from '../components/navbar';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Next Example</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"></link>
            </Head>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </div>
    );
};

export default Layout;