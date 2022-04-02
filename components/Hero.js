import Link from "next/link"

const Hero = ({header, setIsModalOpen}) => {
//   return (
// <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
// <div className="relative bg-white overflow-hidden">
//   <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
//     <div className="lg:grid lg:grid-cols-12 lg:gap-8">
//       <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
//         <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base ">
//           {header.fields.label}
//         </div>
//         <div className="flex items-baseline sm:justify-center lg:justify-start ">
//         <h1 className="text-4xl tracking-tighter leading-10 font-extrabold text-gray-700 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl font-mono">
//           Le petit {" "} 
//           <span className="bles-400 title">Gustave</span>
//         </h1>
//           <img className="pl-4 w-32 md:w-auto " src="/images/logoBold.png" alt="Logo gustave"></img>
//         </div>
//         <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
//         {header.fields.desc}
//         </p>
//         <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
//         <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
//           <div className="rounded-md shadow">
//             <a href="#" onClick={() => setIsModalOpen(true)} className="w-full font-semibold flex items-center justify-center px-8 py-3 border border-transparent text-2xl leading-6 font-mono rounded-md text-white bg-lavande-800 hover:bg-lavande-900 focus:outline-none focus:border-indigo-800 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-2xl md:px-10">
//             Planning et réservation
//             </a>
//           </div>
//         </div>
//         </div>
//       </div>
//       <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
//         <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784">
//           <defs>
//             <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
//               <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
//             </pattern>
//           </defs>
//           <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
//           <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
//         </svg>
//         <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
//           <button type="button" className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
//             <img className="w-full" src={header.fields.videoImage.fields.file.url} alt={header.fields.videoImage.fields.title} />
//             <div className="absolute inset-0 w-full h-full flex items-center justify-center">
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   </main>
// </div>
// </div>
// )


return(<div className="relative bg-gray-50">
<div className="relative bg-white shadow">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
      <div className="w-0 flex-1 flex">
        <a  className="inline-flex">
          <img className="h-8 w-auto sm:h-10" src="/images/favicon-dark.png" alt="Workflow" />
        </a>
      </div>
      <nav className="hidden md:flex space-x-10 font-mono">
        <a href="#lamaison" className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150">
          Maison
        </a>
        <a href="#emplacement" className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150">
          Emplacement
        </a>
        <a href="#venir" className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150">
          Venir
        </a>
        <a href="#faq" className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150">
          FAQ
        </a>
      </nav>
      <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
        <a href="/fiche-technique" className="font-mono whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150">
        <Link href="/fiche-technique">
        La maison pas à pas
          </Link>
        </a>
        <span className="inline-flex rounded-md shadow-sm">
          <button className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 font-mono" onClick={() => setIsModalOpen(true)}>
          Planning et réservation
          </button>
        </span>
      </div>
    </div>
  </div>
</div>

<main className="lg:relative">
  <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
    <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
      <h2 className=" font-mono text-4xl tracking-tight leading-10 font-extrabold text-gray-700 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
       Grande maison {" "}
        <br className="xl:hidden" />
        <span className="text-bles-400 font-mono">en Drôme provençale</span>
      </h2>
      <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
      {header.fields.desc}
      </p>
      {/* <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
            Get started
          </a>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
            Live demo
          </a>
        </div>
      </div> */}
    </div>
  </div>
  <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
    <img className="absolute inset-0 w-full h-full object-cover" src="https://images.ctfassets.net/4dq5uvttrwgb/6xqSXUFb3aUgYD7zkGujPm/ff158fb88b661376dc89a6583c956f62/Maison-2.jpg" alt="Maison en provence" />

  </div>
</main>
</div>
)
}


export default Hero