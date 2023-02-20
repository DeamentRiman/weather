import React from "react";
import '../Footer/index.scss';

const Footer: React.FC = () => {
    return (
        <footer className="appFooter">
            <section className="appFooterSection">
                <p className="appFooterContent">
                    Страница создана в процессе прохождения тестового задания в компании "Спутник", г. Томск.
                </p>
            </section>
        </footer>
    )
}

export default Footer;