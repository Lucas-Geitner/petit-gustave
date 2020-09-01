const MapSlider = () => {

    return (<div className=" overflow-hidden flex md:block pb-20 sm:pb-0 ">
      <div className="md:absolute md:inset-0 md:overflow-hidden m-auto">
        <section className="md:absolute md:inset-y-0 left-0 md:pr-10 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll ">
              <header className="p-6">
                <div className="flex items-start justify-between space-x-3">
                  <h2 className="text-lg leading-7 font-medium text-gray-900">
                    Tous les chemins mènent au petit Gustave
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
                        🚇{" "}train: 2 heures 45
                        </p>
                  </div>
                </li>
                <li className="px-6 py-5 relative">
                  <div className="group  space-x-2">
                      <h4 className="text-sm leading-5 font-medium text-gray-900">Grenoble</h4>
                        <p className="text-sm leading-5 text-gray-500">
                        🚗{" "}voiture:  1 heure 35 
                        </p>
                  </div>
                </li>
                <li className="px-6 py-5 relative">
                  <div className="group  space-x-2">
                      <h4 className="text-sm leading-5 font-medium text-gray-900">Lyon</h4>
                        <p className="text-sm leading-5 text-gray-500">
                        🚗{" "}voiture: 1 heure 42
                        </p>
                        <p className="text-sm leading-5 text-gray-500">
                        🚇{" "}train: 1 heure 30
                        </p>
                  </div>
                </li>
                <li className="px-6 py-5 relative">
                  <div className="group  space-x-2">
                      <h4 className="text-sm leading-5 font-medium text-gray-900">Marseille</h4>
                        <p className="text-sm leading-5 text-gray-500">
🚗{" "}voiture: 2 heures 
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