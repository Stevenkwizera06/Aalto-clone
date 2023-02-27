const Layout = ({children,styles}) => {
    return <div className={`max-w-7xl mx-auto px-20 ${styles}`}>{children}</div>;
}
 
export default Layout;
