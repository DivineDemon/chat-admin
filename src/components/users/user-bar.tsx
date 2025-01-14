import { type Dispatch, type SetStateAction, useState } from "react";

import { Verified } from "lucide-react";

import DataBar from "../dashboard/data-bar";
import DataLine from "../dashboard/data-line";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sheet, SheetContent } from "../ui/sheet";
import { Switch } from "../ui/switch";

interface SheetTriggerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const UserBar = ({ open, setOpen }: SheetTriggerProps) => {
  const [plan, setPlan] = useState<string>("free");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <div className="flex h-full w-full flex-col items-start justify-start gap-5">
          <div className="flex w-full items-center justify-center gap-2.5 border-b pb-5">
            <img
              alt="user-picture"
              src="https://ui.shadcn.com/avatars/04.png"
              className="size-16 rounded-full bg-primary"
            />
            <div className="flex flex-1 flex-col items-center justify-center gap-1">
              <div className="flex w-full items-center justify-start gap-2.5">
                <span className="text-left text-lg font-bold leading-[18px]">
                  John Doe
                </span>
                <Verified className="size-4 text-white" fill="#3B82F6" />
              </div>
              <span className="w-full overflow-hidden truncate text-left text-xs text-gray-400">
                johndoe@email.com
              </span>
              <span className="w-full overflow-hidden truncate text-left text-xs text-gray-400">
                Premium Plan
              </span>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-start justify-start gap-5 rounded-lg">
            <div className="flex w-full flex-col items-center justify-center gap-5 border-b pb-5">
              <div className="flex w-full items-center justify-center">
                <span className="flex-1 text-left">Active Status</span>
                <Switch checked={true} />
              </div>
              <div className="flex w-full items-center justify-center">
                <span className="flex-1 text-left">Payment Plan</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="capitalize">
                      {plan}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="mt-1.5 w-52 rounded-md border p-2.5"
                    align="end"
                  >
                    <DropdownMenuRadioGroup
                      value={plan}
                      onValueChange={setPlan}
                    >
                      <DropdownMenuRadioItem value="free">
                        Free
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="basic">
                        Basic
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="pro">
                        Pro
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="premium">
                        Premium
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex h-full w-full flex-col items-start justify-start gap-5">
              <DataBar />
              <DataLine />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UserBar;
