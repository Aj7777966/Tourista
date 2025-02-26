import React from 'react';
import '../Blog/Blog.css';
import Navbar from "../../Include/Navbar"
import Footer from "../../Include/Footer";

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
        <br /><br />
        <div className="container-md">
          <div className="slider1 skeleton">
            <ul className="items">
              <li class="item current"><img src="https://dl.dropbox.com/scl/fi/pyoffmyxhtzcu7z8q2z2t/beach-2084350_1920-1-1.jpg?rlkey=2ssh61gldfjl8j9hwr3nejmit&st=brugpzwe&dl=0" /></li>
              <li class="item"><img src="https://dl.dropbox.com/scl/fi/6ac3tsb8a6l2gcsgfcn7i/mountain-3800239_1920-1.jpg?rlkey=9xz8w5kjxvpipxbl6uhsblido&st=2lep0yck&dl=0" /></li>
              <li class="item"><img src="https://dl.dropbox.com/scl/fi/ce75bjdzh96a9awd8hqqz/kashmir.jpg?rlkey=2vkk0egi124ssd2wpwuvxtoju&st=jk431zo3&dl=0" /></li>
              <li class="item"><img src="https://dl.dropbox.com/scl/fi/bhgyxn352b5gsfafvftfd/camping-3893587_1920-1-1.jpg?rlkey=7li3unby1qrvhye2klj2go6eu&st=a4yt5rvf&dl=0" /></li>
            </ul>


          </div>
        </div>
        <h1 className='text-overlay-blog'>BLOG PAGE</h1>
        <p className='blogqoute'>Get updates along with regular news and articles related to travel and tourism </p>

        <br/><br/>
        <Footer/>



      </header>
    </>
  )
}

export default Page






