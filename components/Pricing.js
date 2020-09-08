import Planning from "./Planning"

const Pricing = ({setIsModalOpen, planning}) => {
const openModal = (e) => {
  e.preventDefault()
  setIsModalOpen(true)
}

return(
  <div className="bg-gray-900">
  <div className="pt-12 sm:pt-16 lg:pt-24">
    <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
        <h2 className="text-lg leading-6 font-semibold text-bles-300 uppercase tracking-wider font-mono">
          Consultez nos disponibilités
        </h2>
        <p className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none font-mono">
          Nous serons heureux de vous accueillir
        </p>
        <p className="text-xl leading-7 text-gray-300">
          À partir de 900 € la semaine
        </p>
        <div className="pt-5">
        <a href="https://www.service-public.fr/particuliers/vosdroits/F31952"  target="_blank" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-lavande-100 bg-gray-800 hover:text-lavande-400 hover:bg-indigo-800 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out">
        Vacances scolaires 2020-2021
        </a>
        </div>

      </div>
    </div>
  </div>
  
  <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
    <div className="relative">
      <div className="absolute inset-0 h-3/4 bg-gray-900"></div>
      <div className="relative z-5 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-1 lg:gap-5 lg:space-y-0">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="pt-10"> 
               <Planning planning={planning} openModal={openModal} />
              </div>
            </div>
        </div>
      </div>
    </div>
    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="max-w-md mx-auto lg:max-w-5xl">
      </div>
    </div>
  </div>
</div>
)
}

export default Pricing