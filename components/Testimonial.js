const Testimonial = ({name, id ,content, date}) => {


  return(
    //  w-[80vw] md:w-[43vw] xl:w-[30rem]
        <figure class="__slide shrink-0 p-8 sm:p-10 m-10 bg-white text-lavande-900 rounded-lg"><div class="flex items-center justify-between"><div class="flex gap-4 items-center"><figcaption><div class="text-m-p-sm lg:text-d-p-sm">{name} — {date}</div></figcaption></div></div><div class="h-6"></div><blockquote class="text-m-p-sm xl:text-d-p-sm text-gray-700">&ldquo;{content}&rdquo;</blockquote></figure>
  )
  return(
    <section className="py-12 bg-lavande-20 overflow-hidden md:py-10 lg:pt-4 flex h-full items-center" key={id}>
    <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-4">
      <div className="relative flex">
        <blockquote className="mt-8">
          <div className={`max-w-3xl mx-auto text-center leading-9 font-medium text-gray-900 ${content.length < 150 ?  "text-base" : "text-sm"}` }>
            <p>
            &ldquo;{content}&rdquo;
            </p>
          </div>
          <footer className="mt-8">
            <div className="md:flex md:items-center md:justify-center">
              <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                <div className="text-base leading-6 font-medium text-gray-900">{name}</div>
                <svg className="hidden md:block mx-1 h-5 w-5 text-lavande-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>
                <div className="text-base leading-6 font-medium text-gray-500">{date}</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
</section>
  )
}

export default Testimonial