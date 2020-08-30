const FAQ = ({faq}) => { 
console.log({faq})
return (<div class="bg-gray-50">
  <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 font-mono">
      Toutes les questions que vous pouvez vous poser
    </h2>
    <div class="mt-6 border-t-2 border-gray-200 pt-6">
      <dl>
      {faq.items.map((fa) => {
        return (
          <div class="md:grid md:grid-cols-12 md:gap-8">
          <dt class="text-base leading-6 font-medium text-gray-900 md:col-span-5">
            {fa.fields.question}
          </dt>
          <dd class="mt-2 md:mt-0 md:col-span-7">
            <p class="text-base leading-6 text-gray-500">
            {fa.fields.rponse}
            </p>
          </dd>
        </div>
        )
      })}
      </dl>
    </div>
  </div>
</div>)}

export default FAQ