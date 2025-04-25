const SearchResult = ({doctor}) => {
  return (
    <div className="w-full h-full flex items-center justify-start gap-2 py-2 hover:bg-neutral-200 cursor-pointer px-2 rounded-md duration-150">
        <img src={doctor.photo} alt={doctor.name} className="w-10 h-10 rounded-full" />
        <div className="w-full h-full flex flex-col items-start justify-start gap-1">
            <p className="text-sm font-medium text-neutral-900">{doctor.name}</p>
            <p className="text-sm text-neutral-700">{doctor.specialities.map((speciality) => speciality.name).join(", ")}</p>
        </div>
    </div>
  )
}

export default SearchResult