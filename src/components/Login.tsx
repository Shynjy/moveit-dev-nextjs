import { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'
import style from '../styles/components/Login.module.scss'

export default function Login() {
    const { login } = useContext(LoginContext);


    return (
        <div className={style.container}>
            <div>
                <img className={style.grafismo} src="/icons/grafismo-bg.svg" alt="grafismo background" />
            </div>
            <div>
                <div className={style.loginField}>
                    <img src="/icons/logo-moveit.svg" alt="grafismo background" />

                    <strong>Bem-vindo</strong>
                    <div>
                        <img src="/icons/logo-git.svg" alt="grafismo background" />
                        <p>Faça login com seu Github para começar</p>
                    </div>
                    <div className={style.loginInput}>
                        <input type="email" name="email" id="" placeholder="Digite seu username" />
                        <button type="button"
                            onClick={login}
                        >
                            <img src="/icons/arrow.svg" alt="seta" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}