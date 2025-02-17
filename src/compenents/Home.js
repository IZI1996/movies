import React from 'react'

function home() {
  return (
    <div className='intro' style={{ backgroundImage: "url('../images/back.jpg')" }}>
       <div class="container-intro">
       <div class="intro-text">
          <h2>Hey, i'm Koautar</h2>
          <h1>web developer</h1>
          <p>

            I design and code simple yet functional solutions that 
              React Developer, my passion is crafting in
          </p>
          <a href="assets/js/aos/kaoutarizi.pdf" download="" class="btn btn-large">Download Cv</a>

        </div>

        <div class="intro-image ">
          <img src="assets/images/home.png" class="img-fluid animated" alt="" />
        </div>
      </div>

    </div>
  )
}

export default home
