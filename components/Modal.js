import Horaire from './Horaire'


const Modal = ({isModalOpen, setIsModalOpen}) => {
    //     <!--
    //   Background overlay, show/hide based on modal state.
    //   Entering: "ease-out duration-300"
    //     From: "opacity-0"
    //     To: "opacity-100"
    //   Leaving: "ease-in duration-200"
    //     From: "opacity-100"
    //     To: "opacity-0"
    // -->

    if(!isModalOpen){
        return null
    }
return(
<div className="fixed z-10 inset-0 overflow-y-auto">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
    {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}
    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div>
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
          Contactez-nous
          </h3>
          <div className="mt-2">
            <p className="text-sm leading-5 text-gray-500">
              Vous pouvez nous joindre au +336 27 46 54 55 ou sur l'adresse e-mail ggeitner@laposte.net
            </p>
          </div>
 
        </div>
      </div>
      <div className="mt-5 sm:mt-6" onClick={() => setIsModalOpen(false)}>
        <span className="flex w-full rounded-md shadow-sm">
          <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            Revenir au information sur la maison
          </button>
        </span>
      </div>
    </div>
  </div>
</div>)}

//          {/* <div className="pt-10">
// {/* <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
// Nos disponibilités
// </h3>
// <div className="pt-5">
//   {/* <Horaire/> */}
//   </div>
// </div> */} */}
export default Modal