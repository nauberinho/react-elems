DropDown

```jsx
import React from "react";

const options = [
  { title: "Cat", key: "cat" },
  { title: "Dog", key: "dog" },
  { title: "Rabbit", key: "rabbit" }
];

const [isOpen, setIsOpen] = React.useState(false);
const [value, setValue] = React.useState(null);
<DropDown
  isOpen={isOpen}
  value={value}
  options={options}
  onChange={option => {
    setValue(option);
    setIsOpen(false);
  }}
  onToggle={() => {
    setIsOpen(!isOpen);
  }}
  placeholder="Choose your favorite animal"
/>;
```
