const Planning = ({planning, openModal}) => {


   const planningOrdered = planning?.items?.sort((a, b) => a?.fields?.ordre - b?.fields?.ordre )

    return(
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
  <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
    <div class="ml-4 mt-2">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
      Contactez-nous pour réserver
      </h3>
    </div>
    <div class="ml-4 mt-4 flex-shrink-0 flex">
      <span class="inline-flex rounded-md shadow-sm">
        <button onClick={openModal} type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800">
          <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>
            Par téléphone
          </span>
        </button>
      </span>

      <span class="ml-3 inline-flex rounded-md shadow-sm">
        <button onClick={openModal}  type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800">
          <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>
            par e-mail
          </span>
        </button>
      </span>
    </div>

  </div>
</div>

    <ul className="h-50v overflow-scroll">
        {planningOrdered?.map(plan => {
        return(
            <li key={plan.sys.id}>
            <a href="#" onClick={openModal} class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
            <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                {plan?.fields?.dateDeDebut}
                </div>
                <div class="ml-2 flex-shrink-0 flex">
                <div class="mt-2 flex items-center text-xl leading-5 text-gray-800 sm:mt-0 font-bold ">
                    <span>
                        {plan?.fields?.prix}€
                    </span>
                </div>
                </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                    {plan?.fields?.disponible ? <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Disponible
                    </span>
                    </div> : (
                    <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Réservé
                    </span>
                    </div>
                    )}

                </div>
                </div>
            </div>
            </a>
        </li>

        )
        })}
    </ul>
  </div>
  )
}

export default Planning