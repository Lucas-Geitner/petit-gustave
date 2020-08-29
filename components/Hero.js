const Hero = () => {
  return (
<div class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
<div class="relative bg-white overflow-hidden">
  <main class="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        <div class="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base pb-3">
          Maison entière
        </div>
        <h2 className="text-4xl tracking-tighter leading-10 font-extrabold text-gray-700 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl font-mono">
          Le petit {" "}
          <span class="text-teal-400">Gustave</span>
        </h2>
        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Notre grande maison familiale que nous appelons entre nous le petit Gustave, vous accueille pour vos séjours en famille ou entre amis ! Le Petit Gustave peut accueillir de 8 à 14 personnes avec sa grande terrasse, son jardin avec piscine et balançoire, au coeur d'un village de caractère.&nbsp;
        </p>
        <div class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-xl leading-6 font-mono rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:border-indigo-800 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Réserver
            </a>
          </div>
        </div>

        </div>
      </div>
      <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
        <svg class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784">
          <defs>
            <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
          <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
        </svg>
        <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
          <button type="button" class="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
            <img class="w-full" src="/images/video.gif" alt="Woman making a sale" />
            <div class="absolute inset-0 w-full h-full flex items-center justify-center">
            </div>
          </button>
        </div>
      </div>
    </div>
  </main>
</div>
</div>
)}

export default Hero