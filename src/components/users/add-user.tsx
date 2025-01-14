import { type Dispatch, type SetStateAction, useState } from "react";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import ImageUploader from "../ui/image-uploader";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

interface AddUserProps {
  open: boolean;
  id?: number | null;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AddUser = ({ id, open, setOpen }: AddUserProps) => {
  const [email, setEmail] = useState<string>("");
  const [paid, setPaid] = useState<boolean>(false);
  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [image, setImage] = useState<File | string | null>(null);

  const onSubmit = () => {
    console.log({ email, paid, lastName, firstName, image });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm md:max-w-md">
        <DialogHeader>
          <DialogTitle>{id ? "Edit" : "Add"} User</DialogTitle>
          <DialogDescription>
            {id ? "Edit user here" : "Add a new user here"}. Click save when
            you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="grid w-full grid-cols-2 gap-5"
        >
          <div className="col-span-1 flex w-full flex-col items-center justify-center gap-1.5">
            <Label htmlFor="firstName" className="w-full text-left text-xs">
              First Name
            </Label>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              type="text"
              placeholder="John"
              required
            />
          </div>
          <div className="col-span-1 flex w-full flex-col items-center justify-center gap-1.5">
            <Label htmlFor="lastName" className="w-full text-left text-xs">
              Last Name
            </Label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              type="text"
              placeholder="Doe"
              required
            />
          </div>
          <div className="col-span-2 flex w-full flex-col items-center justify-center gap-1.5">
            <Label htmlFor="email" className="w-full text-left text-xs">
              Email
            </Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              required
              placeholder="johndoe@email.com"
            />
          </div>
          <div className="col-span-2 flex w-full items-center space-x-2">
            <Label
              htmlFor="payment-status"
              className="flex-1 text-left text-sm"
            >
              Active Status:
            </Label>
            <div className="flex items-center justify-center gap-2.5">
              <span className="text-sm font-medium">Active</span>
              <Switch checked={paid} onCheckedChange={setPaid} />
              <span className="text-sm font-medium text-primary">Inactive</span>
            </div>
          </div>
          <div className="col-span-2 flex w-full flex-col items-center justify-center gap-1.5">
            <Label className="w-full text-left text-sm">
              Upload Profile Picture
            </Label>
            <ImageUploader image={image} setImage={setImage} />
          </div>
          <div className="col-span-2 flex w-full items-center justify-end gap-2.5">
            <Button
              onClick={() => setOpen(false)}
              type="button"
              variant="outline"
              size="default"
            >
              Cancel
            </Button>
            <Button type="submit" variant="default" size="default">
              Save changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUser;
