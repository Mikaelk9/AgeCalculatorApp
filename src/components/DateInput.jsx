function DateInput({label, placeholder, value, onChange, error}) {
    return (
        <label className='flex flex-col gap-2 '>
            <span className='font-poppins text-xl font-bold text-gray-400 uppercase tracking-widest'>{label}</span>

            <input
                className={`
                uppercase
                w-28 h-16
                md:w-[150px]
                border  border-neutral-300 
                rounded-lg  
                px-4 
                text-3xl font-bold
                placeholder:text-gray-200
                focus:outline-none
                focus:border-purple-500
                cursor-pointer
                ${error ? 'border-red-500' : 'border-neutral-300'}`}

                inputMode="numeric"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                
                />

            <p className='text-secondary-400'>{error}</p>
        </label>
    )
}

export default DateInput