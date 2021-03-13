import "./Layout.css"
export const Layout = ({title, descr, urlBg, colorBg}) => {

    const HeaderStyle={
        backgroundImage: `url(${urlBg})`,
        backgroundColor: colorBg

    }

    return (
        <section  style={HeaderStyle} className="root">
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>{title}</h3>
                        <span className="separator"></span>
                    </div>
                    <div className="desc full">
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Layout;