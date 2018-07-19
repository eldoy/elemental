# Elemental.js

Extremely minimal Javascript lib for making HTML.

### Install
1. Copy the elemental.js file to your application.
2. Include this line in your HTML file: ```<script src="./elemental.js"></script>```

### Usage
The h-function takes four parameters:

1. Tag name (String)
2. Text content (String)
3. Attributes (Object)
4. List of nested tags (Array)

Example:

```
document.body.appendChild(
  h('section', '', {}, [
    h('div', '', { class: 'myClass' , title: 'This is a div' }, [
      h('h1', 'Is this cool?'),
      h('h3', 'Cool!!'),
      h('p', 'Javascript is the best!', { style: 'color: red; font-size: 20px' }),
      h('p', 'Hello', {}, [
        h('a', ' Link', { href: 'https://github.com'})
      ]),
      h('button', 'Click me', { onclick: 'clickMe()' })
    ])
  ])
)
```

Enjoy!
