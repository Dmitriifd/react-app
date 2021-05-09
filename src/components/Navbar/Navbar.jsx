import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="q#">Profile</a>
            </div>
            <div className={s.item}>
                <a href="q#">Messages</a>
            </div>
            <div className={s.item}>
                <a href="q#">News</a>
            </div>
            <div className={s.item}>
                <a href="q#">Music</a>
            </div>
            <div className={s.item}>
                <h1 style={{ color: 'red'}}>Привет мир</h1>
            </div>
        </nav>
    )
}
console.log(s);

export default Navbar;