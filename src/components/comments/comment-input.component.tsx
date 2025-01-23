import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type CommentInputProps = {
  onSubmit: (value: string) => void;
};

const CommentInput: React.FC<CommentInputProps> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  return (
    <form
      className="flex gap-x-2 w-full"
      onSubmit={(event) => {
        event.preventDefault();

        onSubmit(value);
        setValue("");
      }}
    >
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="flex-1"
        placeholder="Input a comment content here..."
      />

      <Button type="submit">Send</Button>
    </form>
  );
};

export { CommentInput };
