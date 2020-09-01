import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from "next/link"

const Content = ({ficheTechnique, setIsModalOpen}) => {
    const Doc = documentToReactComponents(ficheTechnique.fields.content);
    return(
<div className="relative py-16 bg-white overflow-hidden">
  <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
    <div className="relative h-full text-lg max-w-prose mx-auto">
      <svg className="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
      </svg>
      <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
      </svg>
      <svg className="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
      </svg>
    </div>
  </div>

  <div className="relative px-4 sm:px-6 lg:px-8">
    <div className="text-lg max-w-prose mx-auto mb-6">
        <p className="text-base text-center leading-6 text-bles-400 font-semibold tracking-wide uppercase">{ficheTechnique.fields.label}</p>
        <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">{ficheTechnique.fields.title}</h1>
    </div>
    <div className="prose prose-lg text-gray-500 mx-auto">
    {Doc}
    <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
            <h2 className="text-3xl leading-9 font-extrabold tracking-normal text-gray-900 sm:text-4xl sm:leading-10 font-mono">
            Envie d'en savoir plus sur le petit Gustave ?
            <br />
            </h2>
            <div className="mt-8 flex">
            <span className="inline-flex rounded-md shadow-sm">
            <button onClick={() => setIsModalOpen(true)} type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-lavande-800 hover:bg-lavande-900 focus:outline-none focus:border-indigo-800 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                Réserver
            </button>
            </span>

            <div className="ml-3 inline-flex">
                <Link href="/">
                <a href="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-lavande-700 bg-lavande-20 hover:text-lavande-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out">
                Revenir à la page principal
                </a>
                </Link>
            </div>
            </div>
        </div>
        </div>
    </div>
  </div>
</div>
)
}

export default Content