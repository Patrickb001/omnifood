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





*/
