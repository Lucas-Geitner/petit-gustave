const MapSlider = () => {

return (<div className="  overflow-hidden flex md:block ">
  <div className="md:absolute md:inset-0 md:overflow-hidden m-auto">
    <section className="md:absolute md:inset-y-0 right-0 md:pl-10 max-w-full flex sm:pl-16">
      <div className="w-screen max-w-md">
        <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
          <header className="p-6">
            <div className="flex items-start justify-between space-x-3">
              <h2 className="text-lg leading-7 font-medium text-gray-900">
                Bienvenue dans la drome 
              </h2>
            </div>
          </header>
          <div className="border-b border-gray-200">
            <div className="px-6">
            </div>
          </div>
          <ul className="divide-y divide-gray-200 overflow-y-auto">
            <li className="px-6 py-5 relative">
              <div className="group flex justify-between items-center space-x-2">
                <a href="#" className="-m-1 p-1 block">
                  <span className="absolute inset-0 group-hover:bg-gray-50"></span>
                  <div className="flex-1 flex items-center min-w-0 relative">
                    <span className="flex-shrink-0 inline-block relative">
                      <img className="h-10 w-10 rounded-full" src="/images/event/croco.png" alt="" />
                    </span>
                    <div className="ml-4 truncate">
                      <div className="text-sm leading-5 font-medium text-gray-900 truncate">La Ferme aux Crocodiles</div>
                      <div className="text-sm leading-5 text-gray-500 truncate"> Reserve tropical à 40 minutes de voitures</div>
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

            <li className="px-6 py-5 relative">
              <div className="group flex justify-between items-center space-x-2">
                <a href="#" className="-m-1 p-1 block">
                  <span className="absolute inset-0 group-hover:bg-gray-50"></span>
                  <div className="flex-1 flex items-center min-w-0 relative">
                    <span className="flex-shrink-0 inline-block relative">
                      <img className="h-10 w-10 rounded-full" src="https://la-foret-de-robin.com/wp-content/uploads/2017/02/foret-robin-logo.png" alt="" />
                    </span>
                    <div className="ml-4 truncate">
                      <div className="text-sm leading-5 font-medium text-gray-900 truncate">la foret de robin </div>
                      <div className="text-sm leading-5 text-gray-500 truncate">Acrobranche à 5 minutes en voitures</div>
                    </div>
                  </div>
                </a>
                <div className="relative inline-block text-left">
                  <button className="group relative w-8 h-8 inline-flex items-center justify-center focus:outline-none" id="options-menu-1" aria-haspopup="true" aria-expanded="false">
                    <span className="flex items-center justify-center h-full w-full rounded-full group-focus:bg-gray-200 transition ease-in-out duration-150">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</div>)}

export default MapSlider