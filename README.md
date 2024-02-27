# Hero Animation

In summary, this code dynamically generates a series of nested `<div>` elements within the "hero-section" element based on the height of the parent element. Each inner `<div>` has a height of 10 pixels and is styled with the CSS classes "fx-div" and "inner-div".

## How the Hover Animation Works

There are pre-defined CSS classes called `fx-div` and `inner-div` with hover and `::before` hover effects.

JavaScript is used to dynamically generate the required number of hover elements `<div>` by calculating the height of the parent container. It then appends a predefined CSS class to the generated elements.

## My Thought Process

This simple approach ensures that only the required number of `<div>` elements are generated based on the user's screen size.

This also ensures that the HTML code is not bloated with empty `<div>` elements, well over 300 divs.

## How to Recreate

To implement the hover animation in your own project, follow these steps:

1. Add a `<div>` or `<container>` element to a page `<section>` where you want the hover elements to be. This will serve as the parent container.

2. Add a CSS ID called "hero-section".

3. Adjust the CSS style to fit your brand.

## Tools used:
1. Figma for design exploration.
2. Figma Dev mode for base CSS generation.
3. ChatGPT and Google Gemini for script ideation and generation. 