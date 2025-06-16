
import './App.css'


function App() {

  return (
    <>
 <div className="bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-10 border-b border-gray-200 bg-pink-100">
        <img src="/images/logojoep.jpg"  className='w-24 h-24 rounded-full' alt="joep kid" />
        <div className="text-2xl px-4 font-extrabold text-pink-700 pacific">JOEP KIDDIES GLOW.</div>

      </header>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-6 p-6 bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100">
        <div>
          <h1 className="text-4xl font-semibold leading-snug text-purple-800 Mont">
            Comfortable <span className="text-teal-600 Mont animate-pulse">children&apos;s</span> clothing
          </h1>
          <p className="mt-2 text-gray-700 Mont">
          <span className='font-bold Mont'> JOEP KIDDIES GLOW </span> is a growing global brand into the sale of all kids' wear and accessories,
            helping families choose comfort, quality, and style for their little ones.
          </p>
          <div className="mt-4 flex items-center space-x-2 text-sm text-pink-500 Mont">
            <span>#popup now</span>
            <span>#kidsfashion</span>
            <span>#globalstyle</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative rounded-2xl overflow-hidden">
            <img src="images/bigboys.jpg" alt="Summer Style" className="object-cover w-full h-56" />
            <div className="absolute bottom-4 left-4 text-white bg-opacity-60 px-2 py-1 rounded">
              <a href='https://chat.whatsapp.com/KCdc1FKiWrHAUc5eQoAGvV'>   
              <button className=" btn-31  Mont ">
                  <span className="text-container">
    <span className="text">  SHOP NOW </span>
    </span>
                 </button> </a>
       
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-2xl ">
            <h4 className="text-xl font-semibold mb-2 text-pink-700 Mont">We create value</h4>
            <p className="text-sm text-gray-700 Mont mb-10">
           Explore JOEP KIDDIES GLOW for trendy, quality kids' fashion and accessories at prices you'll love. Shop smart, glow bright
            </p>
          </div>
          <div className="relative col-span-2 rounded-2xl overflow-hidden">
            <img src="images/summer.jpg" alt="Summer Glow" className="object-cover w-full h-40" />
            <div className="absolute bottom-3 left-4 text-white bg-yellow-600 bg-opacity-70 px-2 py-1 rounded">
              <h3 className="text-lg font-semibold Mont">Summer glow Coming Soon ...</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="p-6 bg-blue-50 ">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-pink-700 Mont animate-pulse">SHOP NOW</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-20">
          {[1, 2, 3, 4 ].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden shadow-md bg-white border border-pink-100">
              <img src={`/images/${item}.jpg`} alt={`Product ${item}`} className="object-cover w-full h-40" />
            </div>
          ))}
        </div>
      </section>

      <section className="p-6 text-center bg-pink-50 ">
   <div className="card">  </div>
      </section>


      <div className="slider">
  <div className="slide-track">
    <div className="slide"><img className="mg" src="/images/mg1.jpg" alt="Slide 1" /></div>
    <div className="slide"><img className="mg" src="/images/mg2.jpg" alt="Slide 2" /></div>
    <div className="slide"><img className="mg" src="/images/mg3.jpg" alt="Slide 3" /></div>
    <div className="slide"><img className="mg" src="/images/mg4.jpg" alt="Slide 4" /></div>
    <div className="slide"><img className="mg" src="/images/mg5.jpg" alt="Slide 5" /></div>
    <div className="slide"><img className="mg" src="/images/mg6.jpg" alt="Slide 6" /></div>
    <div className="slide"><img className="mg" src="/images/mg7.jpg" alt="Slide 7" /></div>
    <div className="slide"><img className="mg" src="/images/mg8.jpg" alt="Slide 8" /></div>
    <div className="slide"><img className="mg" src="/images/mg9.jpg" alt="Slide 9" /></div>

        <div className="slide"><img className="mg" src="/images/mg1.jpg" alt="Slide 1" /></div>
    <div className="slide"><img className="mg" src="/images/mg2.jpg" alt="Slide 2" /></div>
    <div className="slide"><img className="mg" src="/images/mg3.jpg" alt="Slide 3" /></div>
    <div className="slide"><img className="mg" src="/images/mg4.jpg" alt="Slide 4" /></div>
    <div className="slide"><img className="mg" src="/images/mg5.jpg" alt="Slide 5" /></div>
    <div className="slide"><img className="mg" src="/images/mg6.jpg" alt="Slide 6" /></div>
    <div className="slide"><img className="mg" src="/images/mg7.jpg" alt="Slide 7" /></div>
    <div className="slide"><img className="mg" src="/images/mg8.jpg" alt="Slide 8" /></div>
    <div className="slide"><img className="mg" src="/images/mg9.jpg" alt="Slide 9" /></div>
    </div>
    </div>


      {/* Follow Us Section */}
      <section className="p-6 text-center bg-pink-50 ">
        <h3 className="text-xl font-bold text-purple-700 mb-4 Mont "> <em> <span className='text-teal-500 animate-pulse'> Follow Us </span> on Social Media </em> </h3>
        <div className="flex justify-center space-x-6 text-2xl text-pink-600">
        <a href="https://www.facebook.com/share/15advTpwdH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">     <img src='images/facebook.png' className='sm:w-10 sm:h-10  w-12 h-12' /> </a>
             <a href="https://www.instagram.com/joep_kiddiesglow?igsh=MTVlYm9yZTFyNHF1dg==" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">     <img src='images/instagram.png' className='sm:w-10 sm:h-10 w-12 h-12'  /> </a>
                     <a  href="https://chat.whatsapp.com/KCdc1FKiWrHAUc5eQoAGvV" target="_blank"> <img src="images/whatsapp.png" alt="whatsapp" className=' sm:w-10 sm:h-10 w-10 h-10' /> </a>
            <div />
        </div>
      </section>

    
      {/* Footer */}
      <footer className="bg-pink-100 text-center py-6">
        <p className="text-sm text-gray-600 Mont font-bold">&copy; 2025 JOEP KIDDIES GLOW. All rights reserved.</p>
      </footer>
    </div>

    </>
  )
}

export default App
