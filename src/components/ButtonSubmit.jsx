import arrowIcon from '../assets/images/icon-arrow.svg'

function ButtonSubmit({ onClick }) {
    return (
        <div className="relative flex items-center justify-center mt-6 mb-6">
            
            <div className="w-full h-[1px] bg-neutral-300" />
          
            <button
                onClick={onClick}
                className="
                    absolute
                    z-10
                    bg-primary-500
                    rounded-full
                    w-16 h-16
                    flex items-center justify-center
                    hover:bg-black
                    active:scale-95
                    transition

                    md:right-8
                    md:top-1/2
                    md:-translate-y-1/2
                    md:translate-x-1/2
                "
            >
                <img src={arrowIcon} alt="calculate" className="w-6 h-6" />
            </button>
        </div>
    )
}

export default ButtonSubmit