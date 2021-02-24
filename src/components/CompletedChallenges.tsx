import style from '../styles/components/CompletedChallenges.module.scss'

export default function CompletedChallenges() {
  return (
    <div className={style.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}