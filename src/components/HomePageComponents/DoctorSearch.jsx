import React, { useState } from 'react'

    const DoctorSearch = ({doctors, onSearchResults}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (!query.trim()) {
            onSearchResults?.(doctors);
            return; 
        }

        const filteredDoctors = doctors.filter(doctor => {
            const nameMatch = doctor.name.toLowerCase().includes(query);
            const clinicMatch = doctor.clinic?.address?.address_line1.toLowerCase().includes(query);
            const specialtiesMatch = doctor.specialities?.some(speciality => 
                speciality.name.toLowerCase().includes(query)
            );

            return nameMatch || clinicMatch || specialtiesMatch;
        });

        onSearchResults?.(filteredDoctors);
    }

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <input data-testid="autocomplete-input" type="text" placeholder="Search Symptoms, Doctors, Specialists, Clinics" className="w-[min(800px,90%)] rounded-md px-4 py-2 bg-white outline-none" value={searchQuery} onChange={handleSearch} />

            
        </div>
    )
}

export default DoctorSearch