import { createContext, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.scss';

export default function LvelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext)

    return (

        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button 
                type="button"
                onClick={closeLevelUpModal}
                >
                    <img src="/icons/close.svg" alt="close modal"/>
                </button>
            </div>
        </div>
    )
}