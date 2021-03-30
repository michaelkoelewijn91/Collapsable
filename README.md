# Collapsable

**Collapsable** is a lightweight and flexible plugin that will let you create collapsable content.
Use it for FAQ's, More information toggles or any way you see fit.

### Installation
Want to use npm?
```javascript
npm install @mkoelewijn/collapsable
```

Want to use yarn?
```javascript
yarn add @mkoelewijn/collapsable
```

## Usage

### HTML
```html
<div data-collapsable>
  <div data-collapsable-trigger>Collapsable title</div>
  <div data-collapsable-target>Collapsable content</div>
</div>
```

### CSS
```scss
// Use the the file in the module
@use '@mkoelewijn/collapsable/dist/index';

// Or define your own
[data-collapsable-target] {
    display: none;
}
```

### Javascript
```javascript
const node = document.querySelector('[data-collapsable]');
new Collapsable(node, {

  // Optional callbacks
  openStart: (instance) => {}
  closeStart: (instance) => {}
  
});
```
###

## Options

|               | type              | Default   | Arguments   |
|---            |---                |---        |---|
| Speed         | Integer           |   500     |   |
| openStart     | Function          |           | instance  |
| closeStart    | Function          |           | instance  |