import { type Dispatch, type SetStateAction, useState } from "react";

import { DialogDescription } from "@radix-ui/react-dialog";

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface EditPlanProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const EditPlan = ({ open, setOpen }: EditPlanProps) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const onSubmit = () => {
    console.log({ name, price });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm md:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Plan</DialogTitle>
          <DialogDescription className="text-gray-400">
            Edit Plan here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="flex w-full flex-col items-center justify-center gap-5"
        >
          <div className="flex w-full flex-col items-center justify-center gap-1.5">
            <Label htmlFor="name" className="w-full text-left">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-1.5">
            <Label htmlFor="price" className="w-full text-left">
              Price
            </Label>
            <Input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div className="flex w-full items-center justify-end gap-2.5">
            <Button
              onClick={() => setOpen(false)}
              type="button"
              variant="outline"
              className="h-10 rounded-md"
            >
              Cancel
            </Button>
            <Button type="button" variant="default" className="h-[39px]">
              Save changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPlan;
