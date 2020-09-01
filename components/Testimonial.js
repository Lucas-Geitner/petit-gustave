const Testimonial = ({name, img, key ,content, date}) => {


  return(
    <section class="py-12 bg-lavande-20 overflow-hidden md:py-10 lg:pt-4">
    <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4">
      <div class="relative">
        <blockquote class="mt-8">
          <div class={`max-w-3xl mx-auto text-center  leading-9 font-medium text-gray-900 ${content.length < 150 ?  "text-lg" : "text-base"}` }>
            <p>
            &ldquo;{content}&rdquo;
            </p>
          </div>
          <footer class="mt-8">
            <div class="md:flex md:items-center md:justify-center">
              <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                <div class="text-base leading-6 font-medium text-gray-900">{name}</div>
                <svg class="hidden md:block mx-1 h-5 w-5 text-lavande-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>
                <div class="text-base leading-6 font-medium text-gray-500">{date}</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
</section>
  )
return (
<section className="bg-white overflow-hidden" key={key}>
  <div className="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
    <svg className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
      <defs>
        <pattern id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="784" height="404" fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
    </svg>

    <svg className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
      <defs>
        <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
    </svg>

    <div className="relative lg:flex lg:items-center">
      <div className="hidden lg:block lg:flex-shrink-0">
        <img className="h-64 w-64 rounded-full xl:h-64 xl:w-64" src={img} alt="" />
      </div>

      <div className="relative lg:ml-10">
        <svg className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50" stroke="currentColor" fill="none" viewBox="0 0 144 144">
          <path strokeWidth="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
        </svg>
        <blockquote className="relative">
          <div className="text-lg leading-9 font-medium text-gray-900">
            <p>
              {content}
            </p>
          </div>
          <footer className="mt-8">
            <div className="flex">
              <div className="flex-shrink-0 lg:hidden">
                <img className="h-12 w-12 rounded-full" src={img} alt=""/>
              </div>
              <div className="ml-4 lg:ml-0">
                <div className="text-base leading-6 font-medium text-gray-900">{name}</div>
                <div className="text-base leading-6 font-medium text-indigo-600">{date}</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</section>
)
}

export default Testimonial