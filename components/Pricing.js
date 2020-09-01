const Pricing = ({setIsModalOpen}) => {
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
          Nos offres
        </h2>
        <p className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none font-mono">
          Une offre modulaire en fonction de la saison
        </p>
        <p className="text-xl leading-7 text-gray-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.
        </p>
      </div>
    </div>
  </div>
  <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
    <div className="relative">
      <div className="absolute inset-0 h-3/4 bg-gray-900"></div>
      <div className="relative z-5 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div>
                <h3 className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-lavande-50 text-lavande-800" id="tier-standard">
                Haute saison - 8 places
                </h3>
              </div>
              <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                1656€
                <span className="ml-1 text-2xl leading-8 font-medium text-gray-500">
                  /semaine
                </span>
              </div>
              <p className="mt-5 text-lg leading-7 text-gray-500">
              Soit seulement 29,57 € par personne et par nuit.
              </p>
            </div>
            <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base leading-6 text-gray-700">
                    Pariatur quod similique
                  </p>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base leading-6 text-gray-700">
                    Sapiente libero doloribus modi nostrum
                  </p>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base leading-6 text-gray-700">
                    Vel ipsa esse repudiandae excepturi
                  </p>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base leading-6 text-gray-700">
                    Itaque cupiditate adipisci quibusdam
                  </p>
                </li>
              </ul>
              <div className="rounded-md shadow">
                <a href="#" onClick={openModal} className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" aria-describedby="tier-standard">
                  Contacter nous
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div>
                <h3 className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-lavande-50 text-lavande-800" id="tier-standard">
                  Haute saison - 14 places
                </h3>
              </div>
              <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                1999€
                <span className="ml-1 text-2xl leading-8 font-medium text-gray-500">
                  /semaine
                </span>
              </div>
              <p className="mt-5 text-lg leading-7 text-gray-500">
                Soit seulement 20,30 € par personne et par nuit.
              </p>
            </div>
            <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base leading-6 text-gray-700">
                    Pariatur quod similique
                  </p>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base leading-6 text-gray-700">
                    Sapiente libero doloribus modi nostrum
                  </p>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base leading-6 text-gray-700">
                    Vel ipsa esse repudiandae excepturi
                  </p>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base leading-6 text-gray-700">
                    Itaque cupiditate adipisci quibusdam
                  </p>
                </li>
              </ul>
              <div className="rounded-md shadow">
                <a href="#" onClick={openModal} className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" aria-describedby="tier-standard">
                  Contacter nous
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="max-w-md mx-auto lg:max-w-5xl">
        <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <div>
              <h3 className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-white text-gray-800">
                basse saison
              </h3>
            </div>
            <div className="mt-4 text-lg leading-7 text-gray-600">
              Vous souhaitez venir en basse saison ? (Hors juillet - aout). Nous avons une décote pour vous.
              <strong className="font-semibold text-gray-900">
                {" "}Compter 1499€ pour 8 personnes et 1600€ pour 14 personnes.
              </strong>
            </div>
          </div>
          <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
            <a onClick={openModal} href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Venir en basse saison
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

export default Pricing