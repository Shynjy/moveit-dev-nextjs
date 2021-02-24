import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import style from '../styles/components/CompletedChallenges.module.scss'

export default function CompletedChallenges() {
const {challengesCompleted} = useContext(ChallengesContext);

  return (
    <div className={style.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{ challengesCompleted }</span>
    </div>
  );
}