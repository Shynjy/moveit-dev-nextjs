import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/Profile.module.scss'

export default function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={style.profileContainer}>
            <div className={style.boxProfile}>
                <img src="https://github.com/Shynjy.png" alt="Foto do perfil" />
                <div>
                    <strong>David Pereira</strong>
                    <p>
                        <img src="icons/level.svg" alt="Level" />
                    Level {level}
                    </p>
                </div>
            </div>
        </div>
    );
}