/*

// Short introduction to Javascript:

// Implementing Sticky Navigation
In JavaScript the first step is to create a new intersectionobserver instance and call the observe function with the section that we want to observe. 

1)
const setctionHeroEl = document.querySelector("section-hero");

const obs = new IntersectionObserver(function () {}, {});
obs.observe(setctionHeroEl);


2) 
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
  }
);

As we are viewing the entry in the console we want to look for intersectionRatio and isIntersecting values

// Browser Support

We should copy and save the checkFlexGap into our snippets. But this function should be used in our websites over the next couple of years






.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}





*/
