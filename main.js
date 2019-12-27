$(document).ready(function() {
  $(".burger-nav").on("click", function() {
    $("header nav ul").toggleClass("open");
  });
  $(".responsive").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  });
});
const form = document.forms.form1;
const message = document.getElementById("message");
form.onsubmit = () => {
  if (form.name.value == "") {
    message.innerHTML = "please input the name";
    return false;
  }
  if (form.email.value == "") {
    message.innerHTML = "please input the email";
    return false;
  }
  if (form.text.value == "") {
    message.innerHTML = "please input the message";
    return false;
  }
  message.innerHTML = "";
  return true;
}