import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const FAQ = ({faq}) => { 
// console.log({faq})


return (<div className="bg-gray-50">
  <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" id="faq">
    <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 font-mono">
      Toutes les questions que vous pouvez vous poser
    </h2>
    <div className="mt-6 border-t-2 border-bles-400 pt-6">
      <dl>
      {faq.items.map((fa, index) => {
        const Doc = documentToReactComponents(fa.fields.reponse);

        if(index == 0){
          return (
            <div className="md:grid md:grid-cols-12 md:gap-8" key={fa.sys.id}>
            <dt className="text-base font-mono leading-6 font-medium text-gray-900 md:col-span-5">
              {fa.fields.question}
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p className="text-base leading-6 text-gray-500">
              {Doc}
              </p>
            </dd>
          </div>
          )
          }

          return(
            <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8" key={fa.sys.id}>
            <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5 font-mono">
            {fa.fields.question}
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p className="text-base leading-6 text-gray-500">
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