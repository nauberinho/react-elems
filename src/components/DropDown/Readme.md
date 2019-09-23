DropDown

```jsx
import React from "react";

const [isOpen, setIsOpen] = React.useState(false);
const [value, setValue] = React.useState({ title: "default", key: "default" });
<DropDown
  isOpen={isOpen}
  value={value}
  options={[
    { title: "sdfd", key: "sdfsdf" },
    { title: "ssddfd", key: "sdfssfdf" },
    { title: "default", key: "default" }
  ]}
  onChange={option => {
    setValue(option);
    setIsOpen(false);
  }}
  onToggle={() => {
    console.log("Toggling");
    setIsOpen(!isOpen);
  }}
/>;
```
