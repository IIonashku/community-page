import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PostForm } from "./post-form.component";
import { useState } from "react";
import { useCreatePost } from "@/hooks/posts/posts.hooks";

const PostTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: addPost } = useCreatePost();

  return (
    <Drawer
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DrawerTrigger asChild>
        <Button variant="outline">Add</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="max-w-screen-sm mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle>Post Form</DrawerTitle>
            <DrawerDescription>
              Add a new post by filling in the fields below
            </DrawerDescription>
          </DrawerHeader>
          <PostForm
            className="max-w-screen-sm px-4 w-full mx-auto"
            onSubmit={async (value) => {
              await addPost(value);
              setIsOpen(false);
            }}
          />

          <DrawerFooter className="py-2 px-4">
            <DrawerClose asChild>
              <Button variant="ghost">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export { PostTrigger };
