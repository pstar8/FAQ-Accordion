document.addEventListener('DOMContentLoaded', () => {
    const faqGroups = document.querySelectorAll('.accordion');
    let currentAccordion = ""
    faqGroups.forEach((faqGroup) => {
      const faqContainer = faqGroup.querySelectorAll('.question');
      const icon = faqGroup.querySelector('.faq_icon');
      const response = faqGroup.querySelector('.response');
      const minusIcon = faqGroup.querySelector('.minus');
      const plusIcon = faqGroup.querySelector('.plus');

      faqContainer.forEach((faq) => {
        faq.addEventListener('click', function () {
          // Remove 'open' class from all FAQs
          faqContainer.forEach((item) => {
              if (item !== faq) {
                  item.children[1].classList.remove('open')
              }
          });
          // Toggle 'open' class for the clicked FAQ
          const faqElements = faq.children;
          faqElements[1].classList.toggle('open');
      });
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
