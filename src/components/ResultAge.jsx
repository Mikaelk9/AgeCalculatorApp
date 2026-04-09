function ResultAge({label, value}){
    return(
        <div className="flex gap-2 font-poppins font-bold italic">
           <span className="text-6xl  text-primary-500">{value ? value : '--'}</span> 
           <p className="text-6xl">{label}</p>
        </div>
    )
}

export default ResultAge

