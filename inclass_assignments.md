# Lesson 5: Events & Interactive Programming - In-Class Assignments

## Assignment 1: Interactive Color Picker
**Time**: 20 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Basic DOM manipulation, event listeners

### Objective
Create an interactive color picker that responds to mouse events and provides real-time visual feedback.

### Requirements
1. Create a color palette with 6 different colored squares
2. Implement a canvas area that changes color when you click on a palette color
3. Add a text display showing the current color name
4. Include a reset button to clear the canvas
5. Add hover effects to the color swatches

### HTML Structure
```html
<div class="color-picker">
    <h3>Interactive Color Picker</h3>
    <div class="palette">
        <div class="color-swatch" data-color="red" style="background-color: red;"></div>
        <div class="color-swatch" data-color="blue" style="background-color: blue;"></div>
        <div class="color-swatch" data-color="green" style="background-color: green;"></div>
        <div class="color-swatch" data-color="yellow" style="background-color: yellow;"></div>
        <div class="color-swatch" data-color="purple" style="background-color: purple;"></div>
        <div class="color-swatch" data-color="orange" style="background-color: orange;"></div>
    </div>
    <div class="canvas" id="colorCanvas"></div>
    <p>Current Color: <span id="currentColor">None</span></p>
    <button id="resetCanvas" class="button">Reset Canvas</button>
</div>
```

### CSS Styling
```css
.color-picker {
    margin: 20px 0;
    padding: 20px;
    border: 2px solid #ddd;
    border-radius: 10px;
}

.palette {
    display: flex;
    gap: 10px;
    margin: 10px 0;
}

.color-swatch {
    width: 50px;
    height: 50px;
    border: 2px solid #333;
    cursor: pointer;
    border-radius: 5px;
    transition: transform 0.2s;
}

.color-swatch:hover {
    transform: scale(1.1);
}

.canvas {
    width: 200px;
    height: 100px;
    border: 2px solid #333;
    margin: 10px 0;
    background-color: white;
    border-radius: 5px;
}
```

### JavaScript Requirements
- Add click event listeners to each color swatch
- Update the canvas background color when a swatch is clicked
- Update the current color display text
- Implement the reset functionality
- Add hover effects (optional enhancement)

### Success Criteria
- [ ] All color swatches respond to clicks
- [ ] Canvas changes color when swatches are clicked
- [ ] Current color text updates correctly
- [ ] Reset button clears the canvas
- [ ] Code is well-commented and organized

### Extension Challenge
Add a "Random Color" button that generates a random color and applies it to the canvas.

---

## Assignment 2: Dynamic Task List with Event Delegation
**Time**: 25 minutes  
**Difficulty**: Intermediate  
**Prerequisites**: Event delegation, DOM manipulation, forms

### Objective
Build a task management system using event delegation to handle dynamically added content.

### Requirements
1. Create a form to add new tasks
2. Display tasks in a list with remove buttons
3. Use event delegation to handle task removal
4. Toggle task completion status when clicked
5. Show different visual states for completed/incomplete tasks
6. Display task statistics (total, completed, remaining)

### HTML Structure
```html
<div class="task-manager">
    <h3>Dynamic Task Manager</h3>
    <form id="taskForm">
        <input type="text" id="taskInput" placeholder="Enter new task..." required>
        <button type="submit" class="button">Add Task</button>
    </form>
    <ul id="taskList" class="task-list">
        <!-- Tasks will be added dynamically -->
    </ul>
    <div id="taskStats">
        <p>Total: <span id="totalTasks">0</span> | 
           Completed: <span id="completedTasks">0</span> | 
           Remaining: <span id="remainingTasks">0</span></p>
    </div>
</div>
```

### CSS Styling
```css
.task-manager {
    margin: 20px 0;
    padding: 20px;
    border: 2px solid #ddd;
    border-radius: 10px;
}

.task-list {
    list-style: none;
    padding: 0;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 5px 0;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.task-item:hover {
    background-color: #e9ecef;
}

.task-item.completed {
    text-decoration: line-through;
    background-color: #d4edda;
    border-color: #c3e6cb;
}

.task-text {
    flex-grow: 1;
    margin-right: 10px;
}

.remove-btn {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}

.remove-btn:hover {
    background-color: #c82333;
}

#taskStats {
    margin-top: 15px;
    padding: 10px;
    background-color: #e9ecef;
    border-radius: 5px;
}
```

### JavaScript Requirements
- Handle form submission to add new tasks
- Use event delegation on the task list for:
  - Removing tasks when remove button is clicked
  - Toggling completion status when task is clicked
- Update statistics after each operation
- Prevent form submission if input is empty
- Clear input after adding a task

### Key Concepts to Implement
1. **Event Delegation**: Attach one event listener to the parent `<ul>` element
2. **Event Target Checking**: Use `event.target` to determine what was clicked
3. **DOM Manipulation**: Create and remove elements dynamically
4. **Form Handling**: Prevent default submission and validate input

### Success Criteria
- [ ] New tasks can be added via form
- [ ] Tasks can be removed using event delegation
- [ ] Task completion status toggles on click
- [ ] Visual feedback shows completed vs incomplete tasks
- [ ] Statistics update correctly
- [ ] Form validation prevents empty submissions
- [ ] Code uses event delegation properly

### Extension Challenges
1. Add keyboard shortcuts (Enter to add task, Escape to clear input)
2. Implement task editing (double-click to edit)
3. Add task filtering (show all, completed, or remaining)
4. Add local storage to persist tasks

---

## Assignment 3: Event Propagation Demonstration
**Time**: 15 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Event propagation concepts

### Objective
Create a visual demonstration of event propagation (bubbling and capturing phases).

### Requirements
1. Create nested HTML elements (3 levels deep)
2. Add event listeners for both capturing and bubbling phases
3. Display the order of event execution
4. Add a button to stop propagation
5. Show the difference between preventDefault() and stopPropagation()

### HTML Structure
```html
<div class="propagation-demo">
    <h3>Event Propagation Demo</h3>
    <div id="outer" class="propagation-box outer">
        <div id="middle" class="propagation-box middle">
            <div id="inner" class="propagation-box inner">
                Click me! (Hold Shift to stop propagation)
            </div>
        </div>
    </div>
    <div id="propagationOutput" class="output"></div>
    <button id="clearPropagation" class="button">Clear Output</button>
</div>
```

### CSS Styling
```css
.propagation-demo {
    margin: 20px 0;
    padding: 20px;
    border: 2px solid #ddd;
    border-radius: 10px;
}

.propagation-box {
    padding: 20px;
    border: 2px solid;
    margin: 10px;
    cursor: pointer;
    text-align: center;
}

.outer {
    background-color: lightblue;
    border-color: blue;
}

.middle {
    background-color: lightgreen;
    border-color: green;
}

.inner {
    background-color: lightcoral;
    border-color: red;
}

.output {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    min-height: 100px;
    font-family: monospace;
}
```

### JavaScript Requirements
- Add event listeners for both capturing (true) and bubbling (false) phases
- Log the order of event execution
- Implement stopPropagation() when Shift key is held
- Add a clear button to reset the output
- Show timestamps for each event

### Success Criteria
- [ ] Events fire in correct order (capturing then bubbling)
- [ ] Output clearly shows the propagation path
- [ ] Shift+click stops propagation
- [ ] Clear button resets the output
- [ ] Code demonstrates understanding of event phases

### Learning Objectives
- Understand the difference between capturing and bubbling
- Learn when to use stopPropagation()
- See how events flow through the DOM tree
- Practice debugging event behavior

---

## Assignment 4: Keyboard Shortcuts and Accessibility
**Time**: 15 minutes  
**Difficulty**: Intermediate  
**Prerequisites**: Keyboard events, accessibility concepts

### Objective
Enhance the task manager with keyboard shortcuts and accessibility features.

### Requirements
1. Add keyboard shortcuts for common actions
2. Implement focus management
3. Add ARIA attributes for screen readers
4. Handle keyboard navigation
5. Provide visual feedback for keyboard users

### Keyboard Shortcuts to Implement
- **Enter**: Add new task (when input is focused)
- **Escape**: Clear input and remove focus
- **Ctrl + A**: Select all tasks
- **Delete**: Remove focused task
- **Space**: Toggle completion of focused task

### HTML Enhancements
```html
<!-- Add ARIA attributes and keyboard navigation -->
<div class="task-manager" role="application" aria-label="Task Manager">
    <h3>Dynamic Task Manager</h3>
    <form id="taskForm" role="form">
        <label for="taskInput" class="sr-only">Enter new task</label>
        <input type="text" id="taskInput" 
               placeholder="Enter new task..." 
               required
               aria-describedby="taskHelp">
        <div id="taskHelp" class="sr-only">Press Enter to add task, Escape to clear</div>
        <button type="submit" class="button">Add Task</button>
    </form>
    <ul id="taskList" class="task-list" role="list" aria-label="Task list">
        <!-- Tasks will be added dynamically -->
    </ul>
    <div id="taskStats" role="status" aria-live="polite">
        <p>Total: <span id="totalTasks">0</span> | 
           Completed: <span id="completedTasks">0</span> | 
           Remaining: <span id="remainingTasks">0</span></p>
    </div>
</div>
```

### CSS for Accessibility
```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.task-item:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}

.task-item[tabindex="0"] {
    cursor: pointer;
}

.keyboard-hint {
    font-size: 0.8em;
    color: #666;
    margin-top: 5px;
}
```

### JavaScript Requirements
- Handle keyboard events for shortcuts
- Implement focus management
- Add ARIA attributes dynamically
- Provide keyboard navigation
- Announce changes to screen readers

### Success Criteria
- [ ] All keyboard shortcuts work correctly
- [ ] Focus management is intuitive
- [ ] ARIA attributes are properly set
- [ ] Screen reader users can navigate effectively
- [ ] Visual feedback indicates focus state
- [ ] Keyboard navigation flows logically

### Extension Challenge
Add voice commands using the Web Speech API for hands-free task management.

---

## Assignment 5: Custom Events and Event Communication
**Time**: 20 minutes  
**Difficulty**: Advanced  
**Prerequisites**: Custom events, event communication patterns

### Objective
Implement custom events to create better separation of concerns and enable component communication.

### Requirements
1. Create custom event types for task operations
2. Implement an event bus for component communication
3. Add event logging and debugging
4. Create reusable event handlers
5. Implement event cleanup

### Custom Event Types
```javascript
const TASK_EVENTS = {
    TASK_ADDED: 'taskAdded',
    TASK_REMOVED: 'taskRemoved',
    TASK_COMPLETED: 'taskCompleted',
    TASK_INCOMPLETE: 'taskIncomplete',
    TASK_EDITED: 'taskEdited',
    TASKS_CLEARED: 'tasksCleared'
};
```

### Event Bus Implementation
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

### Requirements
- Implement the EventBus class
- Create custom events for all task operations
- Add event logging to track all events
- Implement event cleanup when tasks are removed
- Create reusable event handlers

### Success Criteria
- [ ] Custom events are properly defined and used
- [ ] Event bus enables component communication
- [ ] Event logging provides debugging information
- [ ] Event cleanup prevents memory leaks
- [ ] Code is modular and reusable

### Extension Challenge
Implement undo/redo functionality using event history and custom events.

---

## General Assignment Guidelines

### Code Quality Standards
- Use meaningful variable and function names
- Add comments explaining complex logic
- Follow consistent indentation and formatting
- Handle edge cases and error conditions
- Test all functionality thoroughly

### Testing Your Code
1. Test with different browsers
2. Verify keyboard navigation works
3. Check accessibility with screen readers
4. Test with different input types
5. Verify event delegation works with dynamic content

### Common Pitfalls to Avoid
- Forgetting to prevent default form submission
- Not handling event propagation correctly
- Missing error handling for edge cases
- Not cleaning up event listeners
- Ignoring accessibility considerations

### Getting Help
- Use browser developer tools to debug
- Check the console for error messages
- Ask for help if you're stuck on a concept
- Test your code frequently as you build
- Review the comprehensive lesson guide for examples

### Submission Requirements
- All assignments should be in separate HTML files
- Include both HTML and CSS in the same file for simplicity
- JavaScript can be in a separate file or in a `<script>` tag
- Test all functionality before submitting
- Include comments explaining your approach

Remember: The goal is not just to complete the assignments, but to understand how events work and how to use them effectively in web applications. Take time to experiment and explore different approaches!
