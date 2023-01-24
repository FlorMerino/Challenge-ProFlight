import styles from '../../components/ListLogos/List-logo.module.css';


export default function Logo({page,id,logo}) {


    return (
        <div className={id === page ? `${styles.select}` : `${styles.notSelect}`} key={id}>
            <img src={logo} alt="logosImg" />
        </div>
    )
}