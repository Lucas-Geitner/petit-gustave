import ImageGallery from "./ImageGallery"

const Features = () => {
    return(
<div className="py-16 bg-lavande-20 overflow-hidden lg:py-24">
  <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
    <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
      <defs>
        <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
    </svg>

    <div className="relative">
      <h3 className="text-center font-mono text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Une semaine en Drôme provençale&nbsp;?
      </h3>
      <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
        Il y a trois éléments qui rendent le petit gustave si attrayant. Le confort de sa maison suréquipé pour 8 à 14 personnes. La qualité des activités que nous pouvons y faires: Piscine, feu dans la cheminée, jeux de cartes et enfin son emplacement, au coeur de l'un des villages les plus mignons de la drome.
        </p>
    </div>

    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div className="relative">
        <h4 className="text-2xl leading-8 font-extrabold font-mono text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
          La maison
        </h4>
        <p className="mt-3 text-lg leading-7 text-gray-500">
        Le Petit Gustave vous sera entièrement dédié, ainsi que son jardin et sa&nbsp;piscine.
        </p>

        <ul className="mt-10">
          <li>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-gray-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 32 32" stroke="currentColor">
<path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path>                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-2xl leading-6 font-bold text-gray-900 font-mono">La cuisine</h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                Vous trouverez au rez-de chaussée, une grande cuisine équipée (lave linge, lave vaisselle, ustensiles et vaisselle), ainsi qu'un grand salon de 35m2 donnant sur une terrasse ombragée, avec une vue sur les collines. La terrasse peut accueillir jusqu'à 14 convives, avec un barbecue à disposition et des herbes aromatiques (persil, menthe, basilic, verveine...).
                </p>
              </div>
            </div>
          </li>
          <li className="mt-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-gray-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 36 36" stroke="currentColor">
                  <path d="M31 6v2h-2v22h-6V14H9v16H3V8H1V6zM16.437 29.978l-.236.014c-.06.006-.13.008-.201.008l-.105-.002-.105-.005C13.134 29.882 11 27.67 11 24.997c0-2.429 1.376-4.83 4.045-7.219l.301-.265.654-.564.654.564C19.52 19.988 21 22.478 21 24.997a5 5 0 0 1-4.563 4.981zM27 8H5v20h2V14a2 2 0 0 1 1.697-1.977l.154-.018L9 12h14a2 2 0 0 1 1.995 1.85L25 14v14h2zM16 26a1 1 0 0 0-.117 1.993l.117.004.094-.001A1 1 0 0 0 16 26zm0-6.383l-.15.142C13.929 21.616 13 23.366 13 24.997c0 .348.06.683.172.995A3.003 3.003 0 0 1 18.83 26c.11-.313.171-.65.171-1.002 0-1.56-.85-3.229-2.605-4.996l-.246-.242zM31 2v2H1V2z"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-2xl leading-6 font-bold text-gray-900 font-mono">Le salon</h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                Le salon est équipé de canapés confortables qui ont accueilli de nombreuses parties de cartes autour de la cheminée ! Un petit salon télé avec plus de 100 DVD vous est également ouvert, ainsi qu'une chambre avec salle d'eau et toilettes.
                </p>
              </div>
            </div>
          </li>
          <li className="mt-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-gray-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 36 36" stroke="currentColor">
                  <path d="m23.96 14.81-2.96-7.41v-5.02a1.39 1.39 0 0 0 -1.39-1.38h-15.22c-.77 0-1.39.62-1.39 1.38v5.02l-2.96 7.41-.04.19v5.61c0 .64.43 1.17 1.01 1.33 0 .02-.01.04-.01.06v1.5a.5.5 0 0 0 1 0v-1.5h20v1.5a.5.5 0 0 0 1 0v-1.5c0-.02-.01-.04-.01-.06a1.39 1.39 0 0 0 1.01-1.33v-5.61zm-19.96-12.43c0-.21.17-.38.39-.38h15.22a.39.39 0 0 1 .39.39v4.61h-1v-1.61c0-.77-.62-1.39-1.39-1.39h-3.21c-.78 0-1.4.62-1.4 1.39v1.61h-2v-1.61c0-.77-.62-1.39-1.39-1.39h-3.22c-.77 0-1.39.62-1.39 1.39v1.61h-1zm14 3.01v3.21a.39.39 0 0 1 -.39.39h-3.21a.39.39 0 0 1 -.4-.38v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-8 0v3.21a.39.39 0 0 1 -.39.4h-3.22a.39.39 0 0 1 -.39-.39v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-6.16 2.61h1.16v.61c0 .77.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h2v .61c0 .78.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h1.16l2.8 7h-21.92zm19.16 12.61c0 .21-.18.39-.39.39h-21.22a.39.39 0 0 1 -.39-.39v-4.61h22z" fill-rule="evenodd"></path></svg>      
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-2xl leading-6 font-bold text-gray-900 font-mono">Les chambres</h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                Au premier étage, un studio avec une salle d'eau attenante, deux chambres avec terrasse donnant sur le jardin, une très grande salle de bain avec baignoire et douche séparée.
                <span className="font-bold">Tout le rez-de-chaussé est accessible aux personnes à mobilité réduite.</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-10 -mx-4 relative lg:mt-0">
        <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
          <defs>
            <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
        </svg>
        <div>
          <ImageGallery  />
        </div>

        {/* <img className="relative mx-auto rounded" width="490" src="https://a0.muscache.com/im/pictures/87218833/77d315df_original.jpg?aki_policy=xx_large" alt="" /> */}
      </div>
    </div>



    

    <svg className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784">
      <defs>
        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
    </svg>

    <div className="relative mt-12 sm:mt-16 lg:mt-24">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="lg:col-start-2">
          <h4 className="text-2xl leading-8 font-mono font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
            Un emplacement idéal  
          </h4>
          <p className="mt-3 text-lg leading-7 text-gray-500">
          Notre village médiéval de Marsanne saura vous accueillir, avec sa vie animée : trois cafés-restaurants-hôtels avec terrasse, une librairie et espace de co-working, une boulangerie, une épicerie et un marchand de journaux.
          </p>

          <ul className="mt-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-gray-700">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-xl leading-6 font-bold text-gray-900 font-mono">Wifi illimité</h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                  Le wifi est accessible dans toute la maison, avec une bonne connexion pour du télétravail ou regarder un film.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-gray-700">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-xl leading-6 font-bold text-gray-900 font-mono ">Déplacer vous tout à pieds</h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                  Notre village médiéval de Marsanne saura vous accueillir, avec sa vie animée : trois cafés-restaurants-hôtels avec terrasse, une librairie et espace de co-working, une boulangerie, une épicerie et un marchand de journaux.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
          <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
            <defs>
              <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
          </svg>
          <ImageGallery  />
          {/* <img className="relative mx-auto rounded" width="490" src="https://a0.muscache.com/im/pictures/87219499/dd199380_original.jpg?aki_policy=large" alt="" /> */}
        </div>
      </div>
    </div>
  </div>
</div>
)}

export default Features