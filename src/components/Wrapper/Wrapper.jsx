import s from 'components/Wrapper/Wrapper.module.css'

function Wrapper({children}) {
    return <div className={s.container}>{children}</div>
}

export default Wrapper;