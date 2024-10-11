document.addEventListener('DOMContentLoaded', () => {
    const faqGroups = document.querySelectorAll('.accordion');
  
    faqGroups.forEach((faqGroup) => {
      const faqContainer = faqGroup.querySelector('.question');
      const icon = faqGroup.querySelector('.faq_icon');
      const response = faqGroup.querySelector('.response');
  
      faqContainer.addEventListener('click', (event) => {
        // Toggle open/closed state
        icon.classList.toggle('open');
        response.classList.toggle('open');
  
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