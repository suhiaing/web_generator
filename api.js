



// Get the target DOM node to append the template to
const targetNode = document.getElementById('wege');

// Define your template literal as a string
const myTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Responsive Online Education Website Design Tutorial</title>

    <!-- font awesome cdn link  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">

    <!-- custom css file link  -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,300;1,400;1,500&display=swap');

:root{
  --pink:#FF046F;
  --violet:#C63BFA;
}

*{
  font-family: 'Roboto', sans-serif;
  text-transform: capitalize;
  text-decoration: none;
  outline: none;
  margin: 0; padding: 0;
  box-sizing: border-box;
}

*::selection{
  background:var(--pink);
  color:#fff;
}

html{
  font-size: 62.5%;
  overflow-x: hidden;
}

.heading{
  font-size: 4rem;
  color:var(--pink);
  text-align: center;
  padding:0 1rem;
  padding-top: 6rem;
  letter-spacing: .2rem;
  font-weight: 500;
}

.title{
  padding:0 1rem;
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
  color:#aaa;
}

header{
  width:96%;
  background:#fff;
  position: fixed;
  top:2rem; left:50%;
  transform: translateX(-50%);
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:1rem 2rem;
  z-index: 1000;
  transition: .2s;
}

.header-active{
  top:0;
  width: 100%;
  border-radius: 0;
  box-shadow: 0 .1rem .3rem rgba(0,0,0,.3);
}

header .navbar ul{
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
}

header .navbar ul li{
  margin:0 1rem;
}

header .navbar ul li a{
  font-size: 2rem;
  color:var(--pink);
  transition: .2s;
}

header .navbar ul li .active,
header .navbar ul li a:hover{
  color:var(--violet);
}

header .logo{
  font-size: 2.5rem;
  color: var(--violet);
  text-transform: uppercase;
}

header .logo i{
  color:var(--pink);
  padding:0 .2rem;
}

header .fa-bars{
  font-size: 3rem;
  color:var(--pink);
  cursor: pointer;
  display: none;
  transition: .2s;
}

.home{
  min-height: 100vh;
  background:linear-gradient(rgba(198, 59, 250,.8),rgba(198, 59, 250,.8)), url(../images/bg.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0;
  overflow:hidden;
  position: relative;
}

.home .content{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  padding-top: 14rem;
  padding-bottom: 8rem;
  text-align: center;
}

.home .content h1{
  font-size: 5rem;
  color: #fff;
  padding:0 1rem;
  text-shadow: 0 .3rem .5rem rgba(0,0,0,.3);
  text-transform: uppercase;
}

.home .content p{
  font-size: 2rem;
  color:#eee;
  padding:1rem 25rem;
}

.home .content button{
  height:4rem;
  width:20rem;
  border-radius: 5rem;
  background:var(--pink);
  color:#fff;
  font-size: 2rem;
  cursor: pointer;
  transition: .2s;
  border:none;
  box-shadow: 0 .3rem 1rem rgba(0,0,0,.3);
}

.home .content button:hover{
  letter-spacing: .2rem;
}

.home .box-container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.home .box-container .box{
  height:20rem;
  width:25rem;
  background:#fff;
  text-align: center;
  border-radius: 1rem;
  box-shadow: 0 .3rem .5rem rgba(0,0,0,.5);
  margin: 2rem;
  cursor: pointer;
}

.home .box-container .box i{
  height:6rem;
  width:6rem;
  line-height: 6rem;
  text-align: center;
  border-radius: 50%;
  color:#fff;
  background:var(--violet);
  font-size: 3rem;
  margin:2rem 0;
  transition: .2s;
}

.home .box-container .box h3{
  font-size: 2rem;
  color:var(--pink);
  transition: .2s;
}

.home .box-container .box p{
  font-size: 1.3rem;
  padding:.7rem 2rem;
  color:#666;
}

.home .box-container .box:hover i{
  background:var(--pink);
}

.home .box-container .box:hover h3{
  color:var(--violet);
}

.home::before{
  content: '';
  position: absolute;
  bottom:-25rem; left:50%;
  transform: translateX(-50%);
  border-top: 70vh solid #fff;
  width:120%;
  border-radius: 50%;
  z-index: -1;
}

.about .row{
  display: flex;
  justify-content: center;
  align-items: center;
}

.about .row .image img{
  height:70vh;
  width:50vw;
}

.about .row .content{
  padding-left: 5rem;
}

.about .row .content h3{
  font-size: 3rem;
  color:var(--pink);
}

.about .row .content p{
  font-size: 1.6rem;
  color:#999;
  padding:1rem 0;
}

.about .row .content button{
  height:3.5rem;
  width:17rem;
  background:var(--violet);
  color:#fff;
  border:none;
  border-radius: 5rem;
  box-shadow: 0 .3rem 1rem rgba(0,0,0,.3);
  cursor: pointer;
  font-size: 2rem;
  transition: .2s;
}

.about .row .content button:hover{
  letter-spacing: .2rem;
  opacity: .8;
}

.teacher{
  background:#f9f9f9;
}

.teacher .card-container{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding:2rem 0;
}

.teacher .card-container .card{
  padding:2rem;
  margin: 2rem;
  background:#fff;
  text-align: center;
  width:28rem;
  box-shadow: 0 .3rem .5rem rgba(0,0,0,.3);
}

.teacher .card-container .card img{
  height:30rem;
  width:100%;
  object-fit: cover;
  filter: grayscale();
  transition: .2s;
}

.teacher .card-container .card:hover img{
  filter: grayscale(0);
}

.teacher .card-container .card h3{
  color:var(--pink);
  font-size: 2rem;
  padding:.5rem 0;
}

.teacher .card-container .card p{
  font-size: 1.7rem;
  color:#666;
}

.teacher .card-container .card .icons a{
  font-size: 1.9rem;
  padding:1.5rem .5rem;
  color:var(--pink);
}

.teacher .card-container .card .icons a:hover{
  color:var(--violet);
}

.course .box-container{
  width:85%;
  display: flex;
  justify-content: center;
  margin:0 auto;
  padding-top: 4rem;
  flex-wrap: wrap;
}

.course .box-container .box{
  height:18rem;
  width:25rem;
  margin:3.5rem 2rem;
  text-align: center;
  border-radius: 1rem;
  box-shadow: .3rem .3rem 0 .1rem var(--violet),
              .5rem .5rem .5rem rgba(0,0,0,.3);
}

.course .box-container .box i{
  height:10rem;
  width:10rem;
  line-height: 8rem;
  text-align: center;
  color:#fff;
  border-radius: 50%;
  background:var(--pink);
  margin-top: -4rem;
  border:1rem solid #fff;
  border-left:1rem solid var(--pink);
  border-right:1rem solid var(--pink);
  box-shadow: 0 0 0 1rem #fff inset;
  font-size: 3.5rem;
}

.course .box-container .box h3{
  font-size: 2rem;
  color:var(--violet);
}

.course .box-container .box p{
  font-size: 1.5rem;
  color:#999;
  padding:1rem 0;
}

.review{
  background:#f9f9f9;
}

.review .box-container{
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  flex-wrap: wrap;
}

.review .box-container .box{
  width:28rem;
  padding-bottom: 1rem;
  text-align: center;
  box-shadow: 0 .3rem .5rem rgba(0,0,0,.3);
  background:#fff;
  margin:4rem 2rem;
}

.review .box-container .box img{
  height:8.5rem;
  width:8.5rem;
  object-fit: cover;
  border-radius: 50%;
  margin-top: -4rem;
  border:.6rem solid var(--pink);
  border-left:.6rem solid var(--violet);
  border-bottom:.6rem solid var(--violet);
}

.review .box-container .box h3{
  font-size: 2rem;
  color:var(--pink);
  padding:0 .5rem;
}

.review .box-container .box p{
  font-size: 1.4rem;
  color:#999;
  padding:0 1.3rem;
}

.review .box-container .box .stars i{
  font-size: 1.6rem;
  color:var(--violet);
  padding:1.3rem .1rem;
}

.contact{
  background:#333;
}

.contact .row{
  display: flex;
  align-items: center;
  justify-content: center;
  padding:5rem 0;
}

.contact .row .image img{
  width: 50vw;
  height:70vh;
}

.contact .row .form-container{
  width:50%;
  padding-right: 6rem;
}

.contact .row .form-container input, textarea{
  height:4rem;
  width:100%;
  background:#fff;
  border:none;
  border-radius: 5rem;
  padding:0 1rem;
  margin:1rem 0;
  color:var(--pink);
  font-size: 1.7rem;
  transition: .2s linear;
}

.contact .row .form-container input:focus, textarea:focus{
  border:.2rem solid var(--pink);
}

.contact .row .form-container textarea{
  height:20rem;
  border-radius: 1rem;
  padding:1rem; 
  resize: none;
}

.contact .row .form-container input[type="submit"]{
  width:17rem;
  background:var(--pink);
  color:#fff;
  cursor: pointer;
  font-size: 2rem;
  transition: .2s;
}

.contact .row .form-container input[type="submit"]:hover{
  background:none;
  color:var(--pink);
  border:.2rem solid var(--pink);
}

.footer{
  text-align: center;
}

.footer .icons{
  padding:3rem 0;
}

.footer .icons a{
  height:4.5rem;
  width: 4.5rem;
  line-height: 4.2rem;
  text-align: center;
  border-radius: 50%;
  color:var(--violet);
  border:.2rem solid var(--violet);
  font-size: 2rem;
  margin:0 .1rem;
  transition: .2s linear;
}

.footer .icons a:hover{
  color:#fff;
  background:var(--pink);
  border-color: var(--pink);
}


.footer .credit{
  font-size: 2rem;
  border-top: .1rem solid #999;
  margin:0 auto;
  margin-bottom: 2rem;
  color:#666;
  width:90%;
  padding:1rem 0;
}

.footer .credit span{
  color:var(--pink);
}




header .fa-times{
  transform: rotate(180deg);
  color:var(--violet);
}

/* media queries  */

@media (max-width:768px){

  html{
    font-size: 55%;
  }

  header .fa-bars{
    display: block;
  }

  header .navbar{
    position: fixed;
    top:-100rem; left:0;
    width:100%;
    background:#fff;
    border-radius: 1rem;
    opacity: 0;
    transition: .2s linear;
  }

  header .navbar ul{
    flex-flow: column;
    padding:2rem 0;
  }

  header .navbar ul li{
    margin:1rem 0;
    width:100%;
    text-align: center;
  }

  header .navbar ul li a{
    font-size: 3rem;
    display: block;
  }

  header .nav-toggle{
    top:5.5rem;
    opacity: 1;
  }

  .home .content p{
    padding:1.5rem 2rem;
  }

  .home::before{
    display: none;
  }

  .about .row{
    flex-flow: column-reverse;
  }

  .about .row .image img{
    height:60vh;
    width:90vw;
  }

  .about .row .content{
    padding:0 2.5rem;
  }

  .course .box-container{
    width:100%;
  }

  .contact .row{
    flex-flow: column;
  }

  .contact .row .image img{
    height:50vh;
    width:90vw;
  }

  .contact .row .form-container{
    width:90%;
    padding:0;
  }
}


    </style>

</head>
<body>


<!-- header section starts  -->

<header>

<a href="#" class="logo"><i class="fas fa-graduation-cap"></i>logo</a>

<nav class="navbar">
    <ul>
        <li><a href="#home" class="active">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#teacher">teacher</a></li>
        <li><a href="#course">course</a></li>
        <li><a href="#review">review</a></li>
        <li><a href="#contact">contact</a></li>
    </ul>
</nav>

<div class="fas fa-bars"></div>

</header>

<!-- header section ends -->


<!-- home section starts  -->

<section class="home" id="home">

<div class="content">
    <h1>learn online form home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum accusantium dolore esse error facere totam eveniet dicta molestiae ea?</p>
    <a href="#"><button>discover more</button></a>
</div>

<div class="box-container">

    <div class="box">
        <i class="fas fa-graduation-cap"></i>
        <h3>trending courses</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, sit!</p>
    </div>

    <div class="box">
        <i class="fas fa-fire"></i>
        <h3>free trial</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, sit!</p>
    </div>

    <div class="box">
        <i class="fas fa-award"></i>
        <h3>certifications</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, sit!</p>
    </div>

</div>

</section>

<!-- home section ends -->

<!-- about section starts  -->


<section class="about" id="about">

<h1 class="heading">about us</h1>
<h3 class="title">start your journey with us</h3>

<div class="row">

    <div class="content">
        <h3>start your journey to a better life with our practical courses</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus incidunt dolorum voluptas saepe, animi perspiciatis praesentium ipsa numquam et possimus dolorem enim similique, quod dicta necessitatibus ducimus officiis nemo!</p>
        <a href="#"><button>learn more</button></a>
    </div>

    <div class="image">
        <img src="images/about-img.svg" alt="">
    </div>

</div>

</section>


<!-- about section ends -->

<!-- teacher section starts  -->

<section id="teacher" class="teacher">

<h1 class="heading">our teacher</h1>
<h3 class="title">meet professional trainers</h3>

<div class="card-container">

    <div class="card">
        <img src="images/img1.jpg" alt="">
        <h3>someone's name</h3>
        <p>i love teaching</p>
        <div class="icons">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-github"></a>
        </div>
    </div>

    <div class="card">
        <img src="images/img2.jpg" alt="">
        <h3>someone's name</h3>
        <p>i love teaching</p>
        <div class="icons">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-github"></a>
        </div>
    </div>

    <div class="card">
        <img src="images/img3.jpg" alt="">
        <h3>someone's name</h3>
        <p>i love teaching</p>
        <div class="icons">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-github"></a>
        </div>
    </div>

    <div class="card">
        <img src="images/img4.jpg" alt="">
        <h3>someone's name</h3>
        <p>i love teaching</p>
        <div class="icons">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-github"></a>
        </div>
    </div>

</div>


</section>

<!-- teacher section ends -->

<!-- course section starts  -->

<section id="course" class="course">

<h1 class="heading">our courses</h1>
<h3 class="title">upgrade your skills with newest courses</h3>


<div class="box-container">

    <div class="box">
        <i class="fab fa-html5"></i>
        <h3>html5</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>
    </div>

    <div class="box">
        <i class="fab fa-css3-alt"></i>
        <h3>css3</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>
    </div>

    <div class="box">
        <i class="fab fa-js-square"></i>
        <h3>javascript</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>
    </div>

    <div class="box">
        <i class="fas fa-code"></i>
        <h3>web development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>
    </div>

    <div class="box">
        <i class="fas fa-bullhorn"></i>
        <h3>seo marketing</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>
    </div>

    <div class="box">
        <i class="fas fa-paint-brush"></i>
        <h3>graphic design</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>
    </div>

</div>

</section>

<!-- course section ends -->

<!-- review section starts  -->

<section id="review" class="review">

<h1 class="heading">students review</h1>
<h3 class="title">what our students says about us</h3>

<div class="box-container">

    <div class="box">
        <img src="images/pic1.jpg" alt="">
        <h3>someone's name</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, corporis?</p>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
    </div>

    <div class="box">
        <img src="images/pic2.jpg" alt="">
        <h3>someone's name</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, corporis?</p>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
    </div>

    <div class="box">
        <img src="images/pic3.jpg" alt="">
        <h3>someone's name</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, corporis?</p>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
    </div>

</div>

</section>

<!-- review section ends -->

<!-- contact section starts  -->

<section class="contact" id="contact">

<h1 class="heading">contact us</h1>
<h3 class="title">we love conversatios, lets talk.</h3>

<div class="row">

    <div class="image">
        <img src="images/contact-img.svg" alt="">
    </div>

    <div class="form-container">
        <form action="">
            <input type="text" placeholder="full name">
            <input type="email" placeholder="enter your email">
            <input type="number" placeholder="phone">
            <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
            <input type="submit" value="message">
        </form>
    </div>

</div>

</section>

<!-- contact section ends -->

<section class="footer">

<div class="icons">
    <a href="#" class="fab fa-facebook-f"></a>
    <a href="#" class="fab fa-twitter"></a>
    <a href="#" class="fab fa-instagram"></a>
    <a href="#" class="fab fa-github"></a>
    <a href="#" class="fab fa-pinterest"></a>
</div>

<div class="credit">created by <span>mr. web designer</span> | all rights reserved.</div>

</section>














<!-- jquery cdn link  -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- custom js file link  -->
<script>
$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){

    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }

    $('section').each(function(){
      var id = $(this).attr('id');
      var height = $(this).height();
      var offset = $(this).offset().top - 200;
      var top = $(window).scrollTop();
      if(top >= offset && top < offset + height){
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find('[href="#' + id + '"]').addClass('active');
      }
    });

  });

});

</script>

    
</body>
</html>
`;

// Create a new element
const newElement = document.createElement('div');

// Set the innerHTML of the new element to the template literal
newElement.innerHTML = myTemplate;

// Append the new element to the target node
targetNode.appendChild(newElement);
