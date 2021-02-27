import style from '../styles/components/Menu.module.scss';

export default function Nav() {
    return (
        <div className={style.containerNav}>
            <img src="/icons/logo-moveit-symbol.svg" alt="logo moveit" />
            <div>
                <button>
                    <img src="/icons/nav-home-active.svg" alt="logo moveit" />
                </button>
                <button>
                    <img src="/icons/nav-lead.svg" alt="logo moveit" />
                </button>
            </div>
        </div>
    )
}