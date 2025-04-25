import HomePage from "./features/pages/HomePage";
import Header from "./components/AppComponents/Header";
import useDoctorAPI from "./features/api/doctorAPI";

function App() {
  const { doctors, loading, error } = useDoctorAPI();

  return (
    <div className="bg-neutral-200 w-full h-full min-h-screen">
        <Header doctors={doctors} />
        <HomePage doctors={doctors} loading={loading} error={error} />
    </div>
  )
}

export default App
