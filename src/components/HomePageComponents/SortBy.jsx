
const SortBy = ({sortBy, setSortBy}) => {
  return (
    <div className='w-[300px] bg-white px-4 py-2 rounded-lg h-full flex flex-col items-start justify-start gap-3 border border-neutral-400'>
        <h3 className='text-base font-medium text-primary'>Sort By</h3>

        <div className="w-full h-full flex flex-col items-start justify-start gap-1">
            <div className="w-full h-full flex items-center justify-start gap-2 text-sm text-neutral-700">
                <input type="radio" name="sort" id="sort-by-price" checked={sortBy === "price"} onChange={() => setSortBy("price")} />
                <label htmlFor="sort-by-price">Price: Low to High</label>
            </div>

            <div className="w-full h-full flex items-center justify-start gap-2 text-sm text-neutral-700">
                <input type="radio" name="sort" id="sort-by-experience" checked={sortBy === "experience"} onChange={() => setSortBy("experience")} />
                <label htmlFor="sort-by-experience">Experience: Most Experience First</label>
            </div>
        </div>
        
    </div>
  )
}

export default SortBy