
const Filter = ({filterBy, setFilterBy}) => {
  return (
    <div className='w-[300px] bg-white px-4 py-2 rounded-lg h-full flex flex-col items-start justify-start gap-2 border border-neutral-400'>
        <h3 className='text-base font-medium text-primary'>Filter</h3>

        <div className="w-full h-full flex flex-col items-start justify-start gap-2">
            <h4 data-testid="filter-header-moc" className="text-sm font-medium text-neutral-700">Mode of consultation</h4>

            <div className="w-full h-full flex flex-col items-start justify-start gap-1">
                <div className="w-full h-full flex items-center justify-start gap-2 text-sm text-neutral-700">
                    <input data-testid="filter-in-clinic" type="radio" name="filter-consultation" value="in-clinic" id="filter-by-in-clinic" checked={filterBy === "in-clinic"} onChange={() => setFilterBy("in-clinic")} />
                    <label htmlFor="filter-by-in-clinic">In-Clinic consultation</label>
                </div>
                <div className="w-full h-full flex items-center justify-start gap-2 text-sm text-neutral-700">
                    <input data-testid="filter-video-consult" type="radio" name="filter-consultation" value="video" id="filter-by-video" checked={filterBy === "video"} onChange={() => setFilterBy("video")} />
                    <label htmlFor="filter-by-video">Video consultation</label>
                </div>
                <div className="w-full h-full flex items-center justify-start gap-2 text-sm text-neutral-700">
                    <input type="radio" name="filter-consultation" value="all" id="filter-by-all" checked={filterBy === "all"} onChange={() => setFilterBy("all")} />
                    <label htmlFor="filter-by-all">All</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter