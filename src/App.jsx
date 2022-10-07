import './tailwind-styles.css'
import './teste.css'
function App() {
  return (
    <div className="bg-gray-50">
      <div className=''>
        <header className="header">
          <div className='logo'>
            LOGO
          </div>
          <ul className='flex'>
            <li>
              <a href="">Como reservar</a>
            </li>
            <li>
              <a href="">Sobre nós</a>
            </li>
            <li>
              <a href="">Informações</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </header>
      </div>
      <div className=' bg-black'>
        <div className='img-banner'>
          <div className='banner-conteudo'>
            <div>
              <h1>Onde você quer ir ?</h1>
              <p>Escolha o estado e a cidade para achar os melhores resorts</p>
              <div className='mt-7'>
                <form action="" className='flex'>
                  <select className='select'>
                    <option value="">Escolha um estado</option>
                  </select>
                  <select className='select'>
                    <option value="">Escolha uma cidade</option>
                    <option value="">Fortaleza</option>
                  </select>
                  <button className='btn-banner'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                    Pesquisar resorts
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <div>
        <div className='container max-w-5xl mx-auto px-4 py-10 mt-16'>
          <div className='flex mx-3 items-center'>
            <div className=' text-gray-600'>
              <div className=' text-yellow-600 text-sm py-1'>RESORT EM DESTAQUE</div>
              <div className=' text-3xl pt-2'>Ecoresort Praia do Forte Bahia</div>
              <div className='pb-2'>Hotel qualidade 5 estrelas </div>
              <div className='py-2 pr-4'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, beatae inventore! Cumque fugit cum dicta numquam illo corporis consequatur, unde praesentium, neque enim est commodi impedit obcaecati minima, maxime labore!</p>
                <button className=' btn-banner mt-6'>Solicitar reserva
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mx-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>

                </button>
              </div>
            </div>
            <div className=' flex-shrink-0 ml-auto'>
              <img src="./imgresort.jpg" alt=""  className='img-destaque' width={"450px"}/>
            </div>
          </div>
        </div>
      </div>

      <div className='container max-w-5xl mx-auto px-4  mt-16'>
        <div className='container mx-auto text-center'>
          <h3 className='text-gray-500 text-2xl font-semibold'>
            Conheça mais Resorts
          </h3>
        </div>
        <div className=' flex justify-center'>
          <div className=' grid grid-cols-4 grid-rows-2 gap-4 my-10 h-80  '>
            <div className=' relative  col-span-2 row-span-2 h-80 bg-black rounded-md'>
              <div className='absolute bottom-0 pl-4 pb-4 text-white font-bold text-sm'>
                Beach Park Resort
              </div>
              <img src="./img1.jpg" alt="" className='img-opacity w-full h-full object-cover  overflow-hidden'/> 
            </div>
            <div className=' col-span-2 h-40 bg-black rounded-md relative'>
              <div 
              className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-10 text-sm'>
                Arraial D'Ajuda Eco Resort
              </div>
              <img src="./img2.jpg" alt="" 
              className='img-opacity w-full h-full object-cover  overflow-hidden z-20' />
            </div>
            <div className='bg-black rounded-md relative'>
              <div 
              className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-20 text-sm'>
                Grand Palladiun
              </div>
              <img src="./img3.jpg" alt="" className='img-opacity w-full h-full object-cover  overflow-hidden z-10' />
            </div>
            <div className='bg-black rounded-md relative'>
              <div className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-20 text-sm'>
                Salinas do Maragogi Resort
              </div>
              <img src="./img4.jpg" alt="" className='img-opacity w-full h-full object-cover  overflow-hidden z-10'/>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default App;
