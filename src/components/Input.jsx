import * as React from "react";
import Input from "@cloudscape-design/components/input";

export default () => {
  const [value, setValue] = React.useState("");
  return (
    <Input
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      placeholder="Ask me anything"
    />
  );
}