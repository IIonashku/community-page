import { Post } from "@/shared/types/post.types";
import { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { cn } from "@/shared/helpers/className.helper";
import { Textarea } from "@/components/ui/textarea";

type FormValue = Pick<Post, "title" | "description">;

const defaultValues: FormValue = {
  title: "",
  description: "",
};

type PostFormProps = {
  className?: string;
  onSubmit: (value: FormValue) => void;
};

export const PostForm: React.FC<PostFormProps> = ({ className, onSubmit }) => {
  const [form, setForm] = useState(defaultValues);

  return (
    <form
      className={cn("flex flex-col gap-y-2", className)}
      onSubmit={(event) => {
        event.preventDefault();

        onSubmit(form);
        setForm(defaultValues);
      }}
    >
      <div>
        <Label className="mb-1">Title</Label>
        <Input
          placeholder="E.g. The Future of AI"
          value={form.title}
          onChange={(event) =>
            setForm((form) => ({
              ...form,
              title: event.target.value,
            }))
          }
        />
      </div>

      <div>
        <Label className="mb-1">Description</Label>
        <Textarea
          placeholder="E.g. It will make us slaves!"
          value={form.description}
          onChange={(event) =>
            setForm((form) => ({
              ...form,
              description: event.target.value,
            }))
          }
        />
      </div>

      <Button type="submit">Create</Button>
    </form>
  );
};
