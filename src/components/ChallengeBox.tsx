import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import style from '../styles/components/ChallengeBox.module.scss';

export default function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);
 
    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }
    
    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

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
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={style.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
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