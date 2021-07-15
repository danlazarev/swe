// dark theme
$(".menu-button-wrapper").click(
  function() {
    $(".nav").toggleClass("active");
    
    
  }
);
let checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        // trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        // trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
    let sliderBgElements = document.querySelectorAll('.slider-img-bg')
    // let transformTemp = []
    // getTransformValues()
    // function getTransformValues() {
    //     sliderBgElements.forEach(function(value) {
    //         transformTemp.push(value.style.transform)
    //     })
    // }
    // // sliderOn()

    // setTransformValues()
    // function setTransformValues() {
    //     sliderBgElements.forEach(function(value, index) {
    //         console.log(transformTemp[index])
    //         value.style.transform = transformTemp[index]
    //     })
    // }
})


// let trans = () => {
//     document.documentElement.classList.add('transition');
//     window.setTimeout(() => {
//         document.documentElement.classList.remove('transition')
//     }, 1000)
// }
