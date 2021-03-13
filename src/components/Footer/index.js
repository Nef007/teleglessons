import s from "./Footer.module.css"

export const Index = () => {
    return (
        <footer >
            <div className={s.wrapper}>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    );
};

export default Index;