import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import style from '../styles/components/ChallengeBox.module.scss';

export default function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

    return (
        <div className={style.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={style.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Body image" />
                        <strong>Exercite-se</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={style.challengeFailedButton}
                            onClick={resetChallenge}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={style.challengeSucceededButton}
                        >
                            Completei
                           </button>
                    </footer>
                </div>
            ) : (
                    <div className={style.challengeNotActive}>
                        <strong>Finalize o ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level completando os desafios.
                </p>
                    </div>
                )}
        </div>
    )
}