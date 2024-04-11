# JavaScript Style Sheets (JSS)

JSS or javaScript style sheets is a framework that came with its own syntax which is called JSS and it is a mexture of javaScript and css , let see the most deferences between these two.

### In CSS

```css
#div {
    background-color: #fff;
    color: white;
    z-index: 1;
}
```
 ### In JSS
 ```css
 #div {
    backgroundColor = #fff;
    color = white;
    zIndex = 1;
 }
```
As you can see we replace CSS style propreties with javaScript style propreties and the ":" for assigning values to the equal operator "=".
<br>
But we will sure bring a lot of features that will help you with controlling the DOM because this JSS is based on javaScript , and whose better then javaScript in what comes to controlling the DOM ?, Yes !, No one.

# Reference Propreties

We allow elements to clone any other element's propreties value to their style :

```css
#div1 {
    backgroundColor = (#div2)->backgroundColor;
    height = (#div3)->width;
}
```
 In this example [#div1]() will take [#div2]()'s backgroundColor and set it as his backgroundColor
 and he will take [#div3]()'s width and set it as his height

 # Events

 We allow a cool feature in our framework that let you handle events from JSS syntax

 ```css
 .header:click {
    backgroundColor = green;
    fontFamily = 'Arial';
 }
 .notification:mouseover {
    opacity = 1;
 }
 .notification:mouseout {
    opacity = 0.5;
 }
 ```

 With this feature you will have full controll of javaScript events, and you will be able to write style to events without the need of writing a javascript function.

# Conditional

Like in javaScript we have conditionals and we relay on them heavily either in DOM manipulation or logical operations that is why we lwt then in our framework JSS 

```css
    if ((#div)->width >= 100px ) {
        .modal {
            display = none;
        }
    }
```


# Functions

We will need functions to make certain modifications to the DOM with only one event or a condition and that is why we present to you JSS functions

```css
    function event(#div:click) {
        #div15 {
            display = flex;
            borderRadius = 50px;
        }
    }

```

This feature would be the end of use of javaScript function to display modals and elements in a certain animation or delay

# Combining functions with conditional

This is what a full JSS function would look like and let me break it out for you :

```css 
    function event(#btn:click) {
        if ((#modal)->display = block) {
            #modal {
                display = none;
            }
        } else {
            #modal {
                display - flex;
            }
        }
    }
```
the function will be called every time the event 'click' happen on the #div element then the if statement will check if the #modal element has a proprety of display equals to block, if so it will give the value none to the display proprety as in inside the if condition, if not it will set the #modal display proprety to flex which will help acheive a functioning modal.

# Event Handling Functionality

We are developing a function that will facilitate the addition of complex event handlers to elements. These event handlers can potentially control other elements. Here's a conceptual example of how this might look:

```css
function event(#id6:click) {
    #id7 {
        backgroundColor = white;
        transition = 1s;
    }
    #id6 {
        backgroundColor = red;
    }
}
```
In this example, clicking on the element with id 'id6' would change its own background color to red and the background color of the element with id 'id7' to white.

# The "Tunnel" Feature
We are excited to introduce the "Tunnel" feature, a groundbreaking addition to JSS. This feature allows two elements to share the same or proportionally related values for one or more properties. Here's a conceptual example:

```css
#div2:::#div1 {
    /* The width will remain the same */
    width(1);
    /* The height will be increased by 50% */
    height(1.5);
    /* The backgroundColor will be the inverse of the current color */
    backgroundColor(invert());
}
```
In this example, the width of 'div2' will be the same as 'div1', its height will be 1.5 times that of 'div1', and its background color will be the inverse of 'div1's color.

which means that if the div2 changes its height width or backgroundColor this tunnel will help keep the relative and try to change the #div1 to the same width and the 1.5 of the height and invert the color of it's background which will allow elements to be simultanously relative.

Please note that the "Tunnel" feature is currently memory-intensive and we are working on optimizing it for better performance.
