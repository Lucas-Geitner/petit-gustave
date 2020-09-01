const PetitPlus = () => {


return (<div className="py-12 bg-white">
  <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
      <div>
        <div className="flex items-center justify-center h-12 w-12 rounded-md text-lavande-900">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        </div>
        <div className="mt-5">
          <h5 className="text-xl leading-6 font-bold text-gray-900 font-mono">Les plus du Petit Gustave</h5>
          <p className="mt-2 text-base leading-6 text-gray-500">
          Quand vous arrivez, les lits sont faits et un diner de produits locaux vous attendent dans le réfrigérateur : caillettes, ravioles, picodon, fruits et bouteille de vin de Côte du Rhône. Vous n'avez plus qu'à plonger dans la piscine.
          </p>
        </div>
      </div>
      <div className="mt-10 lg:mt-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md text-lavande-900">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        </div>
        <div className="mt-5">
          <h5 className="text-xl leading-6 font-bold text-gray-900 font-mono">Accès des voyageurs</h5>
          <p className="mt-2 text-base leading-6 text-gray-500">
          Toute la partie louée (maison, jardin et piscine) est privative.
            Une chambre avec sa salle d'eau est adaptée aux personnes à mobilité réduite et donne accès à la cuisine, au grand salon et à la terrasse.          </p>
        </div>
      </div>
      <div className="mt-10 lg:mt-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md text-lavande-900">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="mt-5">
          <h5 className="text-xl leading-6 font-bold text-gray-900 font-mono">Pas de bouchon</h5>
          <p className="mt-2 text-base leading-6 text-gray-500">
          Notre maison est louée du dimanche au dimanche pour éviter les bouchons des samedis noirs sur l'A7 !&nbsp;;-)
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
)}

export default PetitPlus