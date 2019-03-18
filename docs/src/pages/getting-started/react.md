---
path: /getting-started/react
layout: page
title: React
group: getting-started
status: complete
---

```javascript
npm i material-bread
```

        <Section name="Web Configuration" href="/components/icons#web" id="web">
          <p
            style={{
              color: 'rgba(0, 0, 0, 0.67)',
              marginTop: 16,
              lineHeight: 1.5,
            }}>
            The react-native-vector-icons{' '}
            <a href="https://github.com/oblador/react-native-vector-icons#web-with-webpack">
              web section
            </a>{' '}
            provides documentation on how to get icons working on the web.
            Essentially you need to add the icons as a font face:
            <CodeBlock
              code={`@font-face {
    font-family: 'MaterialIcons';
    src: url(require('react-native-vector-icons/Fonts/MaterialIcons.ttf')})
    format('truetype');

}`}
canCopy
/>
</p>
</Section>
