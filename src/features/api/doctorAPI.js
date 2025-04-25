import { useState, useEffect } from "react";
import axios from "axios";

const useDoctorAPI = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                setLoading(true);
                const response = await axios.get("https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json");
                console.log(response.data);
                setDoctors(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchDoctors();
    }, []);

    return { doctors, loading, error };
}

export default useDoctorAPI;

