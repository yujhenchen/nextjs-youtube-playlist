## To-Do list

- [ ] MUI theme refer to the existing github page
- [x] Add unit tests, add eslint for unit tests
- [ ] Should pass all unit tests to commit
- [ ] Add redux
- [ ] Next.js best practice

## feat and fix

- [ ] Fix "Warning: Extra attributes from the server: cz-shortcut-listen"
- [x] Click logo should be back to home page

## Resources

- https://stackoverflow.com/questions/31629389/how-to-use-eslint-with-jest

Spreading props correctly with React + TypeScript

- https://mortenbarklund.com/blog/react-typescript-props-spread/
- https://stackoverflow.com/questions/69854211/how-to-use-next-js-link-element-as-a-custom-react-component-with-typescript

## Issues and solutions

### Invalid src prop on `next/image`, hostname is not configured under images in your `next.config.js`

#### Solution

https://nextjs.org/docs/pages/api-reference/components/image#loader

```
const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${API_URL}/${src}?w=${width}&q=${quality || 75}`;
};

 <Image
    loader={imageLoader}
    width={500}
    height={500}
    src={`${item.img}?w=248&fit=crop&auto=format`}
    alt={item.title}
/>
```

or
https://nextjs.org/docs/pages/api-reference/components/image#loaderfile

### Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". `<... loader={function} width={500} height=... src=... alt=... loading=...>`

#### Solution

Cannot find
