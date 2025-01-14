/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUpDown, EllipsisVertical } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Switch } from "../ui/switch";
import WarningModal from "../warning-modal";
import AddUser from "./add-user";

export const columns: ColumnDef<UserProps>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-start gap-2.5 font-medium">
          <img
            src={
              row.original.image
                ? row.original.image
                : "https://ui.shadcn.com/avatars/04.png"
            }
            alt="user-dp"
            className="size-6 rounded-full"
          />
          <span className="hidden overflow-hidden truncate md:flex">
            {row.getValue("email")}
          </span>
          <div
            className={cn(
              "relative inline-block size-3 rounded-full bg-green-500",
              {
                "bg-green-500": row.getValue("isActive"),
                "bg-red-500": !row.getValue("isActive"),
              }
            )}
          >
            <div
              className={cn(
                "absolute inset-0 size-3 animate-ping rounded-full",
                {
                  "bg-green-500": row.getValue("isActive"),
                  "bg-red-500": !row.getValue("isActive"),
                }
              )}
            />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "isActive",
    header: ({ column }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              Status
              <ArrowDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="mt-1.5 w-52 rounded-md border p-2.5"
            align="end"
          >
            <DropdownMenuRadioGroup
              value={column.getFilterValue()?.toString()}
              onValueChange={(e) => column.setFilterValue(e)}
            >
              <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="true">Active</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="false">
                Inactive
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const cellValue = row.getValue(columnId);
      return filterValue ? `${cellValue}` === filterValue : true;
    },
    cell: ({ row }) => <Switch checked={row.getValue("isActive")} />,
  },
  {
    accessorKey: "plan",
    header: ({ column }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              Payment Plan
              <ArrowDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="mt-1.5 w-52 rounded-md border p-2.5"
            align="end"
          >
            <DropdownMenuRadioGroup
              value={column.getFilterValue()?.toString()}
              onValueChange={(e) => column.setFilterValue(e)}
            >
              <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="free">Free</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="basic">Basic</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="pro">Pro</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="premium">
                Premium
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const cellValue = row.getValue(columnId);
      return filterValue ? `${cellValue}` === filterValue : true;
    },
    cell: ({ row }) => (
      <span className="cursor-pointer rounded-full bg-primary/20 px-2 py-0.5 font-medium capitalize text-primary">
        {row.getValue("plan")}
      </span>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const [warn, setWarn] = useState<boolean>(false);
      const [open, setOpen] = useState<boolean>(false);
      const [message, setMessage] = useState<string>("");
      const [selected, setSelected] = useState<string>("");

      return (
        <>
          <AddUser id={parseInt(selected)} open={open} setOpen={setOpen} />
          <WarningModal open={warn} setOpen={setWarn} message={message} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-5 w-auto">
              <DropdownMenuItem
                onClick={() => {
                  setSelected(`${row.getAllCells()[0].row.original.id}`);
                  setOpen(true);
                }}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSelected(`${row.getAllCells()[0].row.original.id}`);
                  setMessage("delete this user");
                  setWarn(true);
                }}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    },
  },
];
