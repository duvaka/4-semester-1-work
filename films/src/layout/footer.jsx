function Footer() {
    return <footer className="page-footer grey darken-4">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()}, Верстка и создание приложений ПР №1 <a className="grey-text text-lighten-4 right" href="#!">Девин Дмитрий ТКБО-02-22</a>
            </div>
        </div>
    </footer>
}

export {Footer};