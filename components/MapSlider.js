const MapSlider = () => {

return (<div class="  overflow-hidden flex md:block ">
  <div class="md:absolute md:inset-0 md:overflow-hidden m-auto">
    <section class="md:absolute md:inset-y-0 right-0 md:pl-10 max-w-full flex sm:pl-16">
      <div class="w-screen max-w-md">
        <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
          <header class="p-6">
            <div class="flex items-start justify-between space-x-3">
              <h2 class="text-lg leading-7 font-medium text-gray-900">
                Bienvenue dans la drome 
              </h2>
            </div>
          </header>
          <div class="border-b border-gray-200">
            <div class="px-6">
            </div>
          </div>
          <ul class="divide-y divide-gray-200 overflow-y-auto">
            <li class="px-6 py-5 relative">
              <div class="group flex justify-between items-center space-x-2">
                <a href="#" class="-m-1 p-1 block">
                  <span class="absolute inset-0 group-hover:bg-gray-50"></span>
                  <div class="flex-1 flex items-center min-w-0 relative">
                    <span class="flex-shrink-0 inline-block relative">
                      <img class="h-10 w-10 rounded-full" src="/images/event/croco.png" alt="" />
                    </span>
                    <div class="ml-4 truncate">
                      <div class="text-sm leading-5 font-medium text-gray-900 truncate">La Ferme aux Crocodiles</div>
                      <div class="text-sm leading-5 text-gray-500 truncate"> Reserve tropical à 40 minutes de voitures</div>
                    </div>
                  </div>
                </a>
                <div class="relative inline-block text-left">
                  <button class="group relative w-8 h-8 inline-flex items-center justify-center focus:outline-none" id="options-menu-0" aria-haspopup="true" aria-expanded="false">
                    <span class="flex items-center justify-center h-full w-full rounded-full group-focus:bg-gray-200 transition ease-in-out duration-150">
                      <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </span>
                  </button>

                
                </div>
              </div>
            </li>

            <li class="px-6 py-5 relative">
              <div class="group flex justify-between items-center space-x-2">
                <a href="#" class="-m-1 p-1 block">
                  <span class="absolute inset-0 group-hover:bg-gray-50"></span>
                  <div class="flex-1 flex items-center min-w-0 relative">
                    <span class="flex-shrink-0 inline-block relative">
                      <img class="h-10 w-10 rounded-full" src="https://la-foret-de-robin.com/wp-content/uploads/2017/02/foret-robin-logo.png" alt="" />
                    </span>
                    <div class="ml-4 truncate">
                      <div class="text-sm leading-5 font-medium text-gray-900 truncate">la foret de robin </div>
                      <div class="text-sm leading-5 text-gray-500 truncate">Acrobranche à 5 minutes en voitures</div>
                    </div>
                  </div>
                </a>
                <div class="relative inline-block text-left">
                  <button class="group relative w-8 h-8 inline-flex items-center justify-center focus:outline-none" id="options-menu-1" aria-haspopup="true" aria-expanded="false">
                    <span class="flex items-center justify-center h-full w-full rounded-full group-focus:bg-gray-200 transition ease-in-out duration-150">
                      <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </li>

            <li class="px-6 py-5 relative">
              <div class="group flex justify-between items-center space-x-2">
                <a href="#" class="-m-1 p-1 block">
                  <span class="absolute inset-0 group-hover:bg-gray-50"></span>
                  <div class="flex-1 flex items-center min-w-0 relative">
                    <span class="flex-shrink-0 inline-block relative">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> 
                      <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full text-white shadow-solid bg-green-400"></span>
                    </span>
                    <div class="ml-4 truncate">
                      <div class="text-sm leading-5 font-medium text-gray-900 truncate">Jane Cooper</div>
                      <div class="text-sm leading-5 text-gray-500 truncate">@janecoops</div>
                    </div>
                  </div>
                </a>
                <div class="relative inline-block text-left">
                  <button class="group relative w-8 h-8 inline-flex items-center justify-center focus:outline-none" id="options-menu-2" aria-haspopup="true" aria-expanded="false">
                    <span class="flex items-center justify-center h-full w-full rounded-full group-focus:bg-gray-200 transition ease-in-out duration-150">
                      <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </span>
                  </button>

                </div>
              </div>
            </li>

            <li class="px-6 py-5 relative">
              <div class="group flex justify-between items-center space-x-2">
                <a href="#" class="-m-1 p-1 block">
                  <span class="absolute inset-0 group-hover:bg-gray-50"></span>
                  <div class="flex-1 flex items-center min-w-0 relative">
                    <span class="flex-shrink-0 inline-block relative">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                      <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full text-white shadow-solid bg-gray-300"></span>
                    </span>
                    <div class="ml-4 truncate">
                      <div class="text-sm leading-5 font-medium text-gray-900 truncate">Brooklyn Simmons</div>
                      <div class="text-sm leading-5 text-gray-500 truncate">@brook_simmons</div>
                    </div>
                  </div>
                </a>
                <div class="relative inline-block text-left">
                  <button class="group relative w-8 h-8 inline-flex items-center justify-center focus:outline-none" id="options-menu-3" aria-haspopup="true" aria-expanded="false">
                    <span class="flex items-center justify-center h-full w-full rounded-full group-focus:bg-gray-200 transition ease-in-out duration-150">
                      <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </span>
                  </button>

                </div>
              </div>
            </li>

            <li class="px-6 py-5 relative">
              <div class="group flex justify-between items-center space-x-2">
                <a href="#" class="-m-1 p-1 block">
                  <span class="absolute inset-0 group-hover:bg-gray-50"></span>
                  <div class="flex-1 flex items-center min-w-0 relative">
                    <span class="flex-shrink-0 inline-block relative">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                      <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full text-white shadow-solid bg-gray-300"></span>
                    </span>
                    <div class="ml-4 truncate">
                      <div class="text-sm leading-5 font-medium text-gray-900 truncate">Billy Cooper</div>
                      <div class="text-sm leading-5 text-gray-500 truncate">@bcooper</div>
                    </div>
                  </div>
                </a>
                <div class="relative inline-block text-left">
                  <button class="group relative w-8 h-8 inline-flex items-center justify-center focus:outline-none" id="options-menu-4" aria-haspopup="true" aria-expanded="false">
                    <span class="flex items-center justify-center h-full w-full rounded-full group-focus:bg-gray-200 transition ease-in-out duration-150">
                      <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
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