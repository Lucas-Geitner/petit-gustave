const MapSlider = () => {

    return (<div className=" overflow-hidden flex md:block pb-20 sm:pb-0 ">
      <div className="md:absolute md:inset-0 md:overflow-hidden m-auto">
        <section className="md:absolute md:inset-y-0 left-0 md:pr-10 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll ">
              <header className="p-6">
                <div className="flex items-start justify-between space-x-3">
                  <h2 className="text-lg leading-7 font-medium text-gray-900">
                    Tout les chemins mènent à petit Gustave
                  </h2>
                </div>
              </header>
              <div className="border-b border-gray-200">
                <div className="px-6">
                </div>
              </div>
              <ul className="divide-y divide-gray-200 overflow-y-auto">
                <li className="px-6 py-5 relative">
                  <div className="group  space-x-2">
                      <h4 className="text-sm leading-5 font-medium text-gray-900">Paris</h4>
                        <p className="text-sm leading-5 text-gray-500">
                        🚇 2 heures 45 de train
                        </p>
                  </div>
                </li>
                <li className="px-6 py-5 relative">
                  <div className="group  space-x-2">
                      <h4 className="text-sm leading-5 font-medium text-gray-900">Grenoble</h4>
                        <p className="text-sm leading-5 text-gray-500">
                        🚗 1 heure 35 de voiture
                        </p>
                  </div>
                </li>
                <li className="px-6 py-5 relative">
                  <div className="group  space-x-2">
                      <h4 className="text-sm leading-5 font-medium text-gray-900">Lyon</h4>
                        <p className="text-sm leading-5 text-gray-500">
                        🚗 1 heure 42 de voiture
                        </p>
                        <p className="text-sm leading-5 text-gray-500">
                        🚇 1 heure 30 de train
                        </p>
                  </div>
                </li>
                <li className="px-6 py-5 relative">
                  <div className="group  space-x-2">
                      <h4 className="text-sm leading-5 font-medium text-gray-900">Marseille</h4>
                        <p className="text-sm leading-5 text-gray-500">
                        🚗 2 heures de voiture
                        </p>
                  </div>
                </li>
                <li className="px-6 py-5 relative">
                  <div className="group  space-x-2">
                      <h4 className="text-sm leading-5 font-medium text-gray-900">Transport sur place</h4>
                        <p className="text-sm leading-5 text-gray-500">
                            Parking gratuit dans le village et possibilité de louer des vélos éléctriques
                        </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>)}
    
    export default MapSlider