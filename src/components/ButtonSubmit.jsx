import arrowIcon from '../assets/images/icon-arrow.svg'

function ButtonSubmit({ onClick }) {

    return (
        <div className="relative flex items-center justify-center">
            <div className="absolute w-full h-[1px] bg-neutral-300" />
            <button onClick={onClick} className="relative z-10 bg-primary-500 rounded-full w-16 h-16 flex items-center justify-center hover:bg-black
  active:scale-95
  transition">
                <img src={arrowIcon} alt="calculate" className="w-6 h-6" />
            </button>
        </div>
    )
}

export default ButtonSubmit