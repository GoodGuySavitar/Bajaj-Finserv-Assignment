const DoctorCard = ({doctor}) => {
  return (
    <div data-testid="doctor-card" className="w-full flex flex-col items-start justify-start gap-8 bg-white px-4 py-5 rounded-lg border border-neutral-400">
        <div className="w-full h-full flex items-start justify-start gap-4">
            <img src={doctor?.photo} alt={doctor?.name} className="w-16 h-16 rounded-full" />
            <div className="w-full h-full flex flex-col items-start justify-start">
                <h3 data-testid="doctor-name" className="text-lg font-medium text-neutral-900">{doctor?.name}</h3>
                <p data-testid="doctor-experience" className="text-sm text-neutral-700">{doctor?.experience}</p>
                <p data-testid="doctor-speciality" className="text-sm text-neutral-700">{doctor?.specialities?.map((speciality) => speciality.name).join(", ")}</p>
            </div>
        </div>

        <div className="w-full h-full flex items-center justify-between gap-2">
            <div className="flex flex-col items-start justify-start gap-1">
                <p className="text-sm text-neutral-700 flex items-center justify-start gap-1">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-building-hospital"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" /><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" /><path d="M10 9l4 0" /><path d="M12 7l0 4" /></svg>

                    {doctor?.clinic?.address?.address_line1}</p>
                <p className="text-sm text-neutral-700 flex items-center justify-start gap-1">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                    {doctor?.clinic?.address?.city}, {doctor?.clinic?.address?.locality}</p>
            </div>
            <p data-testid="doctor-fee" className="text-lg text-black font-semibold">{doctor?.fees}</p>
        </div>

        <button className="w-[min(400px,100%)] ml-auto h-10 bg-white border border-primary text-primary hover:bg-primary hover:text-white rounded-lg cursor-pointer transition-all duration-150">Book Appointment</button>

    </div>
  )
}

export default DoctorCard