import style from '../styles/components/Profile.module.scss'

export default function Profile() {
    return (
        <div className={style.profileContainer}>
            <img src="https://github.com/Shynjy.png" alt="Foto do perfil" />
            <div>
                <strong>David Pereira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                    </p>
            </div>
        </div>
    );
}