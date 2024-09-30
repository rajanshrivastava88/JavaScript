/*

Events in JavaScript

Events are things that happen in the system you are programming, which the system tells you about so 
your code can react to them.

For example, if the user clicks a button on a webpage, you might want to react to that action by 
displaying an information box. 

There are many different types of events that can occur.

For example:

1. The user selects, clicks, or hovers the cursor over a certain element.

2. The user chooses a key on the keyboard.

3. The user resizes or closes the browser window.

4. A web page finishes loading.

5. A form is submitted.

6. A video is played, paused, or ends.

7. An error occurs.



Common JavaScript Events Table

Event Attribute	                            Description

onclick	                        Triggered when an element is clicked.

onmouseover	                    Fired when the mouse pointer moves over an element.

onmouseout	                    Occurs when the mouse pointer leaves an element.

onkeydown	                    Fired when a key is pressed down.

onkeyup                        	Fired when a key is released.

onchange	                    Triggered when the value of an input element changes.

onload	                        Occurs when a page has finished loading.

onsubmit	                    Fired when a form is submitted.

onfocus	                        Occurs when an element gets focus.

onblur	                        Fired when an element loses focus.




These terms and properties are commonly associated with JavaScript events, 
especially when handling user interactions like mouse clicks, key presses, or other actions.

1. type
   - Description: The `type` property represents the type of the event, which is typically a string 
                  indicating the specific event that has occurred.

   - Examples of event types:
     - 'click': A mouse click event.
     - 'keydown': A key on the keyboard was pressed down.
     - 'mousemove': The mouse was moved.
     - 'submit': A form was submitted.

   - Usage:
    
     element.addEventListener('click', function(event) {
         console.log(event.type); // Output: 'click'
     });
     

2. timestamp
   - The `timestamp` property provides the time (in milliseconds) at which the event occurred, 
   relative to the time the page was loaded. It’s useful for tracking when certain user actions take place.
   
   - Usage:
     
     element.addEventListener('click', function(event) {
         console.log(event.timeStamp); // Output: A timestamp value
     });
     

 3. defaultPrevented
   
   - The `defaultPrevented` property indicates whether the default action of the event has been prevented 
     using `event.preventDefault()`.

   - Example: In a form submission, if you prevent the default action (which is to submit the form), 
     `defaultPrevented` would be `true`.

   - Usage:
     
     element.addEventListener('submit', function(event) {
         event.preventDefault();
         console.log(event.defaultPrevented); // Output: true
     });
     

 4. target
   - Description: The `target` property refers to the DOM element that triggered the event. This can be useful when multiple elements might trigger the same event listener.
   - Usage:
     ```javascript
     element.addEventListener('click', function(event) {
         console.log(event.target); // Outputs the element that was clicked
     });
     ```

 5. toElement
   - Description: The `toElement` property is used in mouse events and refers to the element that the pointer has moved to during a `mouseover` or `mouseout` event.
   - Usage:
     ```javascript
     element.addEventListener('mouseout', function(event) {
         console.log(event.toElement); // Outputs the element the mouse moved to
     });
     ```

 6. srcElement
   - Description: `srcElement` is an alias for `target` in some browsers (especially older versions of Internet Explorer). It returns the element that triggered the event.
   - Usage:
     ```javascript
     element.addEventListener('click', function(event) {
         console.log(event.srcElement); // Similar to event.target
     });
     ```

 7. currentTarget
   - Description: The `currentTarget` property refers to the element to which the event handler is attached, as opposed to `target`, which refers to the element that triggered the event.
   - Usage:
     ```javascript
     element.addEventListener('click', function(event) {
         console.log(event.currentTarget); // Output: The element the event listener is attached to
     });
     ```

 8. clientX
   - Description: The `clientX` property indicates the horizontal coordinate of the mouse pointer, relative to the viewport (excluding scroll offsets).
   - Usage:
     ```javascript
     element.addEventListener('mousemove', function(event) {
         console.log(event.clientX); // Outputs the mouse's X position within the viewport
     });
     ```

 9. clientY
   - Description: The `clientY` property indicates the vertical coordinate of the mouse pointer, relative to the viewport.
   - Usage:
     ```javascript
     element.addEventListener('mousemove', function(event) {
         console.log(event.clientY); // Outputs the mouse's Y position within the viewport
     });
     ```

 10. screenX
   - Description: The `screenX` property provides the X-coordinate of the mouse pointer relative to the entire screen (not just the browser's viewport).
   - Usage:
     ```javascript
     element.addEventListener('mousemove', function(event) {
         console.log(event.screenX); // Outputs the mouse's X position relative to the screen
     });
     ```

 11. screenY
   - Description: The `screenY` property provides the Y-coordinate of the mouse pointer relative to the screen.
   - Usage:
     ```javascript
     element.addEventListener('mousemove', function(event) {
         console.log(event.screenY); // Outputs the mouse's Y position relative to the screen
     });
     ```

 12. altKey
   - Description: The `altKey` property is a boolean that indicates whether the "Alt" key was pressed when the event occurred.
   - Usage:
     ```javascript
     element.addEventListener('click', function(event) {
         console.log(event.altKey); // Output: true if Alt key was pressed, false otherwise
     });
     ```

 13. ctrlKey
   - Description: The `ctrlKey` property is a boolean that indicates whether the "Control" key was pressed during the event.
   - Usage:
     ```javascript
     element.addEventListener('click', function(event) {
         console.log(event.ctrlKey); // Output: true if Ctrl key was pressed, false otherwise
     });
     ```

 14. shiftKey
   - Description: The `shiftKey` property is a boolean that indicates whether the "Shift" key was pressed during the event.
   - Usage:
     ```javascript
     element.addEventListener('click', function(event) {
         console.log(event.shiftKey); // Output: true if Shift key was pressed, false otherwise
     });
     ```

 15. keyCode
   - Description: The `keyCode` property indicates the numeric code for the key that was pressed during keyboard events like `keydown` or `keyup`. It is deprecated and replaced by `event.code` or `event.key` in modern browsers.
   - Usage:
     ```javascript
     document.addEventListener('keydown', function(event) {
         console.log(event.keyCode); // Outputs the key code of the pressed key
     });
     ```

 Additional Notes:
- `clientX`, `clientY`, `screenX`, and `screenY` are properties related to mouse events and provide coordinates for the pointer position.
- `altKey`, `ctrlKey`, and `shiftKey` are modifier keys often used in combination with other actions, such as clicking or typing.
- `keyCode` is not recommended for new code due to its deprecation in modern browsers.

These event properties provide valuable information for creating interactive and responsive user interfaces.

A












*/