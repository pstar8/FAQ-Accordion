document.addEventListener('DOMContentLoaded', () => {
    const faqGroups = document.querySelectorAll('.accordion');
  
    faqGroups.forEach((faqGroup) => {
      const faqContainer = faqGroup.querySelector('.question');
      const icon = faqGroup.querySelector('.faq_icon');
      const response = faqGroup.querySelector('.response');
      const minusIcon = faqGroup.querySelector('.minus');
      const plusIcon = faqGroup.querySelector('.plus');
  
      faqContainer.addEventListener('click', function(){ 
        this. classList.toggle('open');
        // Toggle open/closed state
        icon.classList.toggle('open');
        response.classList.toggle('open');
        minusIcon.style.display = 'block';
        plusIcon.style.display = 'none';
        
       
        // Close other FAQs
        faqGroups.forEach((otherGroup) => {
          if (otherGroup !== faqGroup) {
            const otherIcon = otherGroup.querySelector('.faq_icon');
            const otherResponse = otherGroup.querySelector('.response');
            otherIcon.classList.remove('open');
            otherResponse.classList.remove('open');
          }
        });
      });
    });
  });
