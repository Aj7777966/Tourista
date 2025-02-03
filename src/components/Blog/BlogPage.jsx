import React from 'react';
import '../Blog/Blog.css';
import Navbar from "../../Include/Navbar"

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
      <Navbar/>
        <br /><br /><br />
        <div className="container">
          <div className="slider1">
            <ul className="items">
              <li class="item current"><img src="https://dl.dropbox.com/scl/fi/fe47571tivrix8851efkh/beach-2084350_1920-1-1.jpg?rlkey=fnkz6s1jyu3hjh59702lrdh37&st=nh77zf9u&dl=0" /></li>
              <li class="item"><img src="https://dl.dropbox.com/scl/fi/0cssaslypvcer4vx1fg96/kashmir.jpg?rlkey=fdlby6c4hazep5cvgpnmn6bu8&st=uog10mw6&dl=0"/></li>
              <li class="item"><img src="https://dl.dropbox.com/scl/fi/y9h3ni1yfoq0lou7aro3j/camping-3893587_1920-1-1.jpg?rlkey=ahxmge1zsuf4hdlv7ave2w69i&st=ltt4ahzo&dl=0" /></li>
              <li class="item"><img src="https://dl.dropbox.com/scl/fi/uma0vloke7j0t6p9rsrc1/mountain-3800239_1920-1.jpg?rlkey=buxe5ahm6j87xaam06w2wr7mk&st=nq27kavr&dl=0" /></li>
            </ul>


          </div>
        </div>
        <h1 className='text-overlay-blog'>BLOG PAGE</h1>
        <p className='blogqoute'>Get updates along with regular news and articles related to travel and tourism </p>
        {/* <p class="disclaimer">Designed & Created by SpectacledCoder</p> */}




      </header>
    </>
  )
}

export default Page






