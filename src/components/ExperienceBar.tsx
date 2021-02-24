import style from '../styles/components/ExperienceBar.module.scss'

function ExperienceBar() {
  return (
    <header className={style.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <span className={style.currentExpereince} style={{ left: '50%' }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}

export default ExperienceBar;