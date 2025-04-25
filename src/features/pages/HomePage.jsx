import SortBy from "../../components/HomePageComponents/SortBy";
import Filter from "../../components/HomePageComponents/Filter";
import DoctorCard from "../../components/HomePageComponents/DoctorCard";
import { useEffect, useState } from "react";

const HomePage = ({doctors, loading, error}) => {
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  const [filteredDoctors, setFilteredDoctors] = useState(doctors);


  useEffect(() => {
    const sortedDoctors = [...doctors].sort((a, b) => {
      if (sortBy === "price") {
        return Number(a.fees.split(" ")[1]) - Number(b.fees.split(" ")[1]);
      } else if (sortBy === "experience") {
        return Number(b.experience.split(" ")[0]) - Number(a.experience.split(" ")[0]);
      }
      return 0; 
    });

    const filteredDoctors = sortedDoctors.filter((doctor) => {
      if (filterBy === "all") {
        return true;
      }
      if (filterBy === "video") {
        return doctor.video_consult === true;
      }

      if (filterBy === "in-clinic") {
        return doctor.in_clinic === true;
      }
      return false;
    });


    console.log("Here: ", filteredDoctors);

    setFilteredDoctors(filteredDoctors);
  }, [sortBy, filterBy, doctors]);

  return (
    <div className='container w-full h-full flex items-start justify-center py-10 gap-4'>
      <div className="flex flex-col items-center justify-center gap-4">
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        <Filter filterBy={filterBy} setFilterBy={setFilterBy} />
      </div>
      
      {
        loading && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )
      }

      {
        error && (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-red-500">Error fetching doctors</p>
          </div>
        )
      }

      {
        filteredDoctors.length > 0 && (
          <div className='w-full h-full flex flex-col items-center justify-center gap-4'>
            {
              filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))
            }
          </div>
        )
      }
        
    </div>
  )
}

export default HomePage