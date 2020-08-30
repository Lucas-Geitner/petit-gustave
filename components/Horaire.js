const OneDate = () => {
    return(
        <li class="col-span-1 bg-white rounded-lg shadow">
        <div class="w-full flex items-center justify-between p-4 space-x-4">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm leading-5 font-medium">6 - 15 septembre</h3>
            </div>
            <div class="flex items-center space-x-3 pt-2">
                <span class="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">Disponible</span>
            </div>
          </div>
        </div>
      </li>
    )
}

const Horaire = () => {
return(
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <OneDate />
        <OneDate />
        <OneDate />
        <OneDate />
        <OneDate />
        <OneDate />
</ul>
    )
}

export default Horaire