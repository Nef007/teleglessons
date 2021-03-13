import s from "./Layout.module.css"
export const Index = ({title,  urlBg, colorBg, children}) => {




    const HeaderStyle={}

    if (urlBg) {HeaderStyle.backgroundImage = `url(${urlBg}`};
    if (colorBg) {HeaderStyle.backgroundColor =colorBg};



    return (
        <section  style={HeaderStyle} className={s.root}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Index;