import style from '../styles/Container.module.css';

let Container = ({children}) => {
    return <> <div className={style.container}>{children}</div> </>

    
}

export default Container;