import React from 'react';
import '../Contact/Contact.css'
import Navbar from "../../Include/Navbar"
import Footer from '../../Include/Footer';

const Page = () => {

  // image fade slide starts from here
  function slider(flag, num) {
    var current = $(".item.current"),
      next,
      index;
    if (!flag) {
      next = current.is(":last-child") ? $(".item").first() : current.next();
      index = next.index();
    } else if (flag === 'dot') {
      next = $(".item").eq(num);
      index = num;
    } else {
      next = current.is(":first-child") ? $(".item").last() : current.prev();
      index = next.index();
    }
    next.addClass("current");
    current.removeClass("current");
    $(".dot").eq(index).addClass("current").siblings().removeClass("current");
  }
  var setSlider = setInterval(slider, 4000);

  $(".button").on("click", function () {
    clearInterval(setSlider);
    var flag = $(this).is(".prev") ? true : false;
    slider(flag);
    setSlider = setInterval(slider, 4000);
  });

  $(".dot").on("click", function () {
    if ($(this).is(".current")) return;
    clearInterval(setSlider);
    var num = $(this).index();
    slider('dot', num);
    setSlider = setInterval(slider, 4000);
  });

  return (
    <>

      <header className="App-header">
        <Navbar />

        <div className="container-md">
          <div className="slider1 skeleton">
            <ul className="items">
              <li className="item current"><img src="https://dl.dropbox.com/scl/fi/qfggqwanegr457q3r3csc/beach-2084350_1920-1-1.jpg?rlkey=eb5jsxsm4yx8y44zf7kobyj67&st=qy36r4lk&dl=0" /></li>
              <li className="item"><img src="https://dl.dropbox.com/scl/fi/0cssaslypvcer4vx1fg96/kashmir.jpg?rlkey=fdlby6c4hazep5cvgpnmn6bu8&st=uog10mw6&dl=0" /></li>
              <li className="item"><img src="https://dl.dropbox.com/scl/fi/y9h3ni1yfoq0lou7aro3j/camping-3893587_1920-1-1.jpg?rlkey=ahxmge1zsuf4hdlv7ave2w69i&st=ltt4ahzo&dl=0" /></li>
              <li className="item"><img src="https://dl.dropbox.com/scl/fi/uma0vloke7j0t6p9rsrc1/mountain-3800239_1920-1.jpg?rlkey=buxe5ahm6j87xaam06w2wr7mk&st=nq27kavr&dl=0" /></li>
            </ul>


          </div>
          <h1 className='text-overlay-x'>CONTACT US</h1>
          <p className='contactqoute'>Have questions? Let’s connect and make your journey smooth!</p>
          <br /> <br /> <br /> <br />
        </div>



        {/* <section class="text-gray-600 body-font bg-yellow-100">
          <div class="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
            id="contact-form">
            <div class="md:w-1/3 w-full">
              <h1 class="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">Contact Us</h1>
              <p class="leading-relaxed text-xl text-gray-900">
                We're here to assist you! If you have any questions or need assistance, please feel free to reach out to
                us.
                <br /><br />
                You can also email us. Click here to reveal email address
                <a href="https://veilmail.io/e/FkKh7o" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">https://veilmail.io/e/FkKh7o</a>

              </p>
              <p class="leading-relaxed text-xl text-gray-900 mt-8">
                We use VeilMail.io to protect your email address from spam.
              </p>
              <span class="inline-flex mt-6 justify-center sm:justify-start">


              </span>
            </div>
            <div class="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
              <h1 class="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">Contact Form</h1>
              <form action="send-contact.php" method="post" id="submit-contact-form">
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="name" class="leading-7 py-4 text-lg text-gray-900">Your Name</label>
                    <input type="text" id="name" name="name" required=""
                      class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="email" class="leading-7 py-4 text-lg text-gray-900">Your Email</label>
                    <input type="email" id="email" name="email" required=""
                      class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="message" class="leading-7 py-4 text-lg text-gray-900">Your Message</label>
                    <textarea id="message" name="message" required=""
                      class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button type="submit"
                    class="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha">
                    Send Message ✉
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section> */}
        <div class="main">
          <h1 className="card-header">WHY CHOOSE US ?</h1>
          <ul class="cards">
            <li class="cards_item">
              <div class="card">
                <div class="card_image skeleton"><img src="https://dl.dropbox.com/scl/fi/600lxle70pgtx0qae8cgz/desitnation-exploration-1.jpg?rlkey=nro1euh6zqtulm7l7iq8fby1w&st=da39h3qv&dl=0" alt='this imag cannot be displyed at this time' /></div>
                <div class="card_content">
                  <h2 class="card_title">Destination Exploration</h2>
                  <br />
                  <p class="card_text">Explore the destinations from all over india and browse the popular cities of all states of india</p>
                  <a href="/destination"><button class="btn">Read More</button></a>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card-image skeleton"><img src="https://dl.dropbox.com/scl/fi/zx554u5qycfdx8uifetf8/Hotel-Booking.jpg?rlkey=ly0ehk0xnlb486x34r85luuqw&st=r1xkvz5x&dl=0" alt='this imag cannot be displyed at this time' /></div>
                <div class="card_content">
                  <h2 class="card_title">Accommodation Booking</h2>
                  <br />
                  <p class="card_text">Get your own personalized booking through tour packagers</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card-image skeleton"><img src="https://dl.dropbox.com/scl/fi/stkghniv2fdt5z1y2ajqf/transport-information.jpeg?rlkey=k9dbvrvd063wihj0idbl6p47r&st=71u0s8ln&dl=0" alt='this imag cannot be displyed at this time' /></div>
                <div class="card_content">
                  <h2 class="card_title">Transport Information</h2>
                  <br />
                  <p class="card_text">Get all transport information related to the particular place</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card-image skeleton"><img src="https://dl.dropbox.com/scl/fi/uu8hb342co4heawag974v/food-and-dining.jpg?rlkey=4yf5ohwef5bdndsutksymj390&st=4s3k2229&dl=0" alt='this imag cannot be displyed at this time' /></div>
                <div class="card_content">
                  <h2 class="card_title">Food and Dining</h2>
                  <br />
                  <p class="card_text">explore different kind and varities of taste of all over india with its own elegance</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card-image skeleton"><img src="https://dl.dropbox.com/scl/fi/ffr73vh4r90ph6lbdw38z/Travel-Packages.jpg?rlkey=sltzinz6py84ozizatkqbtls4&st=35ok52k6&dl=0" alt='this imag cannot be displyed at this time' /></div>
                <div class="card_content">
                  <h2 class="card_title"> Travel Packages</h2>
                  <br />
                  <p class="card_text">Get personlaised travel packages from the tour planners and get personliased bookiing</p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card-image skeleton"><img src="https://dl.dropbox.com/scl/fi/gg0vawluhuk38bf0xj5ob/Budget-Friendly-Options.jpg?rlkey=oniw3zn6k2y0fo4hhcldyzvnn&st=si324soy&dl=0" alt='this imag cannot be displyed at this time' /></div>
                <div class="card_content">
                  <h2 class="card_title">Budget-Friendly Options</h2>
                  <br />
                  <p class="card_text">Select your way of budget and travel palnning by exploring packages for tour </p>
                  <button class="btn card_btn">Read More</button>
                </div> and there can eba ny of them and 
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="container contactcontainer">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div className="bg-blue-500 text-black p-6 rounded-lg shadow-lg text-left">
            <h1 className=' text-left emailheader'>Email Us At :</h1>
              <div className='emailus'>touristaofficial@gmail.com</div>
              <br/>
              <div className='emailheader'>Contact us for more : </div>
              <h1 className='emailus text-left'>+91-884-961-551-1</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <div className="bg-blue-500 text-black p-6 rounded-lg shadow-lg text-left">
            <h1 className=' text-left emailheader'>Email Us At :</h1>
              <div className='emailus'>touristaofficial@gmail.com</div>
              <br/>
              <div className='emailheader'>Contact us for more : </div>
              <h1 className='emailus text-left'>+91-884-961-551-1</h1>
            </div>

          </div>
        </div> */}
        <br /><br />
        <Footer />


      </header>
    </>
  )
}

export default Page






