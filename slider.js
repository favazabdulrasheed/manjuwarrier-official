const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
$(document).ready(function() {
	var data=[];
  currentModal = 0;
  
  $('.modalDialog').each(function(){
    data.push({
      id: $(this).attr('id'),
      order: $(this).data('modalorder')
    });
  })
    
	$('#openModalBtn').click(function(){
  	currentModal = 0;
    window.location.href = "#" + data[currentModal].id;
    $('#'+data[currentModal].id).find('.getAssignment2').prop('disabled', true);
  })
  
  //prev
  $('.getAssignment2').click(function(){
  	if (currentModal>0) {
    	currentModal--;
      window.location.href = "#" + data[currentModal].id;
    } else {
      
    	window.location.href = '#'
    }
  })
  
  //next
  $('.getAssignment').click(function(){
  	if (currentModal<data.length - 1) {
    	currentModal++;
      if (currentModal===data.length - 1) $('#'+data[currentModal].id).find('.getAssignment').prop('disabled', true);
      window.location.href = "#" + data[currentModal].id;
    } else {
    	window.location.href = '#'
    }
  })
  $('.special').click(function(){
    if (currentModal<data.length - 1) {
      currentModal++;
    if (currentModal===data.length - 1) $('#'+data[currentModal].id).find('.getAssignment').prop('disabled', true);
    window.location.href = "#" + data[currentModal].id;
  } else {
      window.location.href = '#'
  }
})


  
})