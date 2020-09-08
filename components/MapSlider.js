const MapSlider = ({activitesExterieur}) => {
  const activitesExterieurOrdered = activitesExterieur?.items?.sort((a, b) => a?.fields?.ordre - b?.fields?.ordre )

return (<div className=" flex md:block ">
  <div className=" md:overflow-hidden m-auto">
    <section className="max-w-full flex ">
      <div className="w-screen max-w-md h-70v">
        <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
          <header className="p-6">
            <div className="flex items-start justify-between space-x-3">
              <h2 className="text-lg leading-7 font-medium text-gray-900">
                Bienvenue dans la Drôme 
              </h2>
            </div>
          </header>
          <div className="border-b border-gray-200">
            <div className="px-6">
            </div>
          </div>
          <ul className="divide-y divide-gray-200 overflow-y-auto">

            {activitesExterieurOrdered.map(act => (

              <li className="px-6 py-5 relative" key={act.sys.id}>
              <div className="group flex justify-between items-center space-x-2">
                <a href={act?.fields?.url} className="-m-1 p-1 block" target="_blank">
                  <span className="absolute inset-0 group-hover:bg-gray-50"></span>
                  <div className="flex-1 flex items-center min-w-0 relative">
                    <span className="flex-shrink-0 inline-block relative">
                      <img className="h-10 w-10 rounded-full" src={act?.fields?.logo?.fields?.file?.url} alt={act?.fields?.logo?.fields?.file?.title} />
                    </span>
                    <div className="ml-4 ">
                      <div className="text-sm leading-5 font-medium text-gray-900 ">{act?.fields?.name}</div>
                      <div className="text-sm leading-5 text-gray-500 pt-2"> {act?.fields?.descriptionTempsDeTrajet}</div>
                    </div>
                  </div>
                </a>
                <div className="relative inline-block text-left">
                  <button className="group relative w-8 h-8 inline-flex items-center justify-center focus:outline-none" id="options-menu-0" aria-haspopup="true" aria-expanded="false">
                    <span className="flex items-center justify-center h-full w-full rounded-full group-focus:bg-gray-200 transition ease-in-out duration-150">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </div>
</div>)}

export default MapSlider