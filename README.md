## Making a plan

1. Make a drawing of your app. Simple "wireframes"
2. Once you have a drawing, name the HTML elements you'll need to realize your vision
3. For each HTML element ask: Why do I need this?
4. Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5. Is there some state we need to initialize?
6. Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7. Think about how to validate each of your steps
8. Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9. Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## What the user sees

Open page, <p> is hidden. Form alone with input fields. Click button, Madlib appears below with image and text.

//Selling my 2015 _\_\_\_\__ with _**\_\_**_. It's in excellent shape and hasn't seen a lot of use. This is the High Output 90 HP model with IBR and can seat up to 3 people. The jet ski fires right up and runs flawlessly. It's been well kept and only has 22 hours on it. It also has the convenience package (front storage bin and rear step). Jetski comes on a 2018 galvanized trailer. Includes a SeaDoo cover and have titles in hand for the ski and trailer.

//blank areas will be replaced with <spans>

# Craiglist ad for the low price of ...

## HTML

1. # of input boxes

   Name of object
   price of object

2. <p> text for text
3. <spans>Injection-for-display space.
4. A button to display content below
   //have placeholders
5. add an image
   //craiglist id image
6. h1

## JS

1. .addEventListener
   //button
   //what does it do? On-click grab the text content from the input fields and make the paragraph visible.
2. grab all DOM elements(<spans>, <ids>, <img>)

## CSS

1. background-color
2. border
3. font

Stretch) Possible takes.
Stretch) Check if actually a number.
