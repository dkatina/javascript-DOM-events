# Events & Interactive Programming - Cheat Sheet

## Event Listener Syntax

### Basic Event Listener
```javascript
element.addEventListener('eventType', function(event) {
    // Event handler code
});
```

### Event Listener with Options
```javascript
element.addEventListener('eventType', function(event) {
    // Event handler code
}, {
    capture: true,    // Use capturing phase
    once: true,       // Remove after first trigger
    passive: true     // Never call preventDefault()
});
```

### Remove Event Listener
```javascript
element.removeEventListener('eventType', handlerFunction);
```

---

## Common Event Types

### Mouse Events
```javascript
// Click events
'click'        // Single click
'dblclick'     // Double click
'mousedown'    // Mouse button pressed
'mouseup'      // Mouse button released

// Movement events
'mouseover'    // Mouse enters element
'mouseout'     // Mouse leaves element
'mousemove'    // Mouse moves over element
'mouseenter'   // Mouse enters element (no bubbling)
'mouseleave'   // Mouse leaves element (no bubbling)
```

### Keyboard Events
```javascript
'keydown'      // Key pressed down
'keyup'        // Key released
'keypress'     // Key character typed
```

### Form Events
```javascript
'submit'       // Form submitted
'change'       // Input value changed and lost focus
'input'        // Input value changed (real-time)
'focus'        // Element gained focus
'blur'         // Element lost focus
'reset'        // Form reset
```

### Window Events
```javascript
'load'         // Page fully loaded
'unload'       // Page unloaded
'resize'       // Window resized
'scroll'       // Page scrolled
'beforeunload' // Before page unloads
```

---

## Event Object Properties

### Basic Properties
```javascript
event.type          // Event type ('click', 'keydown', etc.)
event.target        // Element that triggered the event
event.currentTarget // Element where listener is attached
event.timeStamp     // Time when event occurred
```

### Mouse Event Properties
```javascript
event.clientX       // X coordinate relative to viewport
event.clientY       // Y coordinate relative to viewport
event.pageX         // X coordinate relative to document
event.pageY         // Y coordinate relative to document
event.button        // Mouse button (0=left, 1=middle, 2=right)
event.buttons       // Mouse buttons pressed (bitmask)
```

### Keyboard Event Properties
```javascript
event.key           // Key value ('a', 'Enter', 'ArrowUp', etc.)
event.code          // Physical key code ('KeyA', 'Enter', 'ArrowUp')
event.keyCode       // Numeric key code (deprecated)
event.ctrlKey       // Ctrl key pressed
event.shiftKey      // Shift key pressed
event.altKey        // Alt key pressed
event.metaKey       // Meta/Cmd key pressed
```

### Form Event Properties
```javascript
event.target.value  // Input value
event.target.checked // Checkbox/radio checked state
event.target.files  // File input files
```

---

## Event Object Methods

### Prevent Default Behavior
```javascript
event.preventDefault(); // Prevent default action
```

### Stop Event Propagation
```javascript
event.stopPropagation();        // Stop bubbling
event.stopImmediatePropagation(); // Stop all propagation
```

---

## Event Propagation

### Phases
```javascript
// Capturing phase (true)
element.addEventListener('click', handler, true);

// Bubbling phase (false, default)
element.addEventListener('click', handler, false);
```

### Event Phase Values
```javascript
event.eventPhase
// 1 = CAPTURING_PHASE
// 2 = AT_TARGET
// 3 = BUBBLING_PHASE
```

### Stop Propagation
```javascript
// Stop bubbling up
event.stopPropagation();

// Stop all propagation
event.stopImmediatePropagation();
```

---

## Event Delegation

### Basic Pattern
```javascript
// Attach listener to parent
parent.addEventListener('click', function(event) {
    // Check if target matches selector
    if (event.target.matches('.child-selector')) {
        // Handle the event
    }
});
```

### Using closest() for Nested Elements
```javascript
parent.addEventListener('click', function(event) {
    const target = event.target.closest('.child-selector');
    if (target) {
        // Handle the event
    }
});
```

### Event Delegation with Data Attributes
```javascript
parent.addEventListener('click', function(event) {
    const button = event.target.closest('[data-action]');
    if (button) {
        const action = button.dataset.action;
        switch(action) {
            case 'delete':
                deleteItem(button.dataset.id);
                break;
            case 'edit':
                editItem(button.dataset.id);
                break;
        }
    }
});
```

---

## Form Handling

### Prevent Form Submission
```javascript
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form data
});
```

### Get Form Data
```javascript
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
});
```

### Real-time Validation
```javascript
input.addEventListener('input', function(event) {
    const value = event.target.value;
    if (value.length < 3) {
        showError('Must be at least 3 characters');
    } else {
        hideError();
    }
});
```

---

## Keyboard Shortcuts

### Common Key Values
```javascript
// Special keys
'Enter'        // Enter key
'Escape'       // Escape key
'Tab'          // Tab key
'Backspace'    // Backspace
'Delete'       // Delete key
'ArrowUp'      // Up arrow
'ArrowDown'    // Down arrow
'ArrowLeft'    // Left arrow
'ArrowRight'   // Right arrow
'Space'        // Space bar

// Modifier keys
'Control'      // Ctrl key
'Shift'        // Shift key
'Alt'          // Alt key
'Meta'         // Cmd key (Mac) / Windows key
```

### Keyboard Shortcut Example
```javascript
document.addEventListener('keydown', function(event) {
    // Ctrl + S
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        save();
    }
    
    // Escape key
    if (event.key === 'Escape') {
        closeModal();
    }
});
```

---

## Custom Events

### Create Custom Event
```javascript
const customEvent = new CustomEvent('myEvent', {
    detail: { data: 'some data' },
    bubbles: true,
    cancelable: true
});
```

### Dispatch Custom Event
```javascript
element.dispatchEvent(customEvent);
```

### Listen for Custom Event
```javascript
element.addEventListener('myEvent', function(event) {
    console.log(event.detail); // { data: 'some data' }
});
```

---

## Event Bus Pattern

### Simple Event Bus
```javascript
class EventBus {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
}
```

### Usage
```javascript
const eventBus = new EventBus();

// Listen
eventBus.on('userLogin', function(user) {
    console.log('User logged in:', user);
});

// Emit
eventBus.emit('userLogin', { name: 'John', id: 123 });
```

---

## Performance Optimization

### Throttling
```javascript
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Usage
window.addEventListener('scroll', throttle(function() {
    console.log('Scrolling');
}, 100));
```

### Debouncing
```javascript
function debounce(func, delay) {
    let timeoutId;
    return function() {
        const args = arguments;
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(context, args), delay);
    }
}

// Usage
input.addEventListener('input', debounce(function() {
    console.log('Searching for:', this.value);
}, 300));
```

---

## Accessibility

### Keyboard Navigation
```javascript
// Make element focusable
element.setAttribute('tabindex', '0');

// Handle keyboard events
element.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.click();
    }
});
```

### ARIA Attributes
```javascript
// List role
list.setAttribute('role', 'list');
list.setAttribute('aria-label', 'Task list');

// List item role
item.setAttribute('role', 'listitem');
item.setAttribute('aria-checked', 'false');
```

### Screen Reader Announcements
```javascript
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}
```

---

## Common Patterns

### Toggle Class on Click
```javascript
element.addEventListener('click', function() {
    this.classList.toggle('active');
});
```

### Show/Hide Element
```javascript
toggleBtn.addEventListener('click', function() {
    const target = document.getElementById('target');
    target.style.display = target.style.display === 'none' ? 'block' : 'none';
});
```

### Handle Multiple Events
```javascript
const events = ['click', 'keydown', 'touchstart'];
events.forEach(eventType => {
    element.addEventListener(eventType, handler);
});
```

### Remove All Event Listeners
```javascript
// Clone element to remove all listeners
const newElement = element.cloneNode(true);
element.parentNode.replaceChild(newElement, element);
```

---

## Debugging Events

### Console Logging
```javascript
element.addEventListener('click', function(event) {
    console.log('Event:', event.type);
    console.log('Target:', event.target);
    console.log('Current target:', event.currentTarget);
    console.log('Event phase:', event.eventPhase);
});
```

### Event Listener Inspection
```javascript
// Get all event listeners (Chrome DevTools)
getEventListeners(element);
```

### Event Flow Debugging
```javascript
document.addEventListener('click', function(event) {
    console.log('Click on:', event.target.tagName);
    console.log('Phase:', event.eventPhase);
    console.log('Bubbling:', event.bubbles);
});
```

---

## Quick Reference

### Event Types by Category
- **Mouse**: click, dblclick, mousedown, mouseup, mouseover, mouseout, mousemove
- **Keyboard**: keydown, keyup, keypress
- **Form**: submit, change, input, focus, blur, reset
- **Window**: load, unload, resize, scroll, beforeunload
- **Touch**: touchstart, touchend, touchmove, touchcancel

### Common Event Object Properties
- `type` - Event type
- `target` - Element that triggered event
- `currentTarget` - Element with event listener
- `preventDefault()` - Prevent default behavior
- `stopPropagation()` - Stop event bubbling

### Event Delegation Selectors
- `event.target.matches('.selector')` - Check if target matches selector
- `event.target.closest('.selector')` - Find closest matching ancestor
- `event.target.classList.contains('class')` - Check for CSS class

### Performance Tips
- Use event delegation for dynamic content
- Throttle scroll and resize events
- Debounce input events
- Use passive listeners for scroll events
- Clean up event listeners to prevent memory leaks
