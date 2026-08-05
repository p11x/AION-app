import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

const searchData = [
  { id: 1, title: "Home / About Us", path: "/" },
  { id: 2, title: "MBA Program", path: "/programs" },
  { id: 3, title: "BBA Program", path: "/programs" },
  { id: 4, title: "MCA / BCA Programs", path: "/programs" },
  { id: 5, title: "Data Science M-Sc(DS)", path: "/programs" },
  { id: 6, title: "Healthcare Administration BHA/MHA", path: "/programs" },
  { id: 7, title: "Admission Process & Fees", path: "/admissions" },
  { id: 8, title: "Application Form", path: "/admissions" },
  { id: 9, title: "Placement & Recruiters", path: "/placement" },
  { id: 10, title: "Full Time Faculty", path: "/faculty" },
  { id: 11, title: "Visiting Faculty", path: "/faculty" },
  { id: 12, title: "Research & Innovation", path: "/research" },
  { id: 13, title: "Contact Us", path: "/contact" },
];

export function SearchModal({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const filteredData = searchData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm transition-all duration-100" />
        <Dialog.Content className="fixed left-[50%] top-[20%] z-50 w-full max-w-lg translate-x-[-50%] overflow-hidden rounded-xl bg-white shadow-2xl border border-slate-200 p-0 sm:top-[10%]">
          <Command
            className="flex h-full w-full flex-col overflow-hidden bg-white text-slate-900"
            shouldFilter={false}
          >
            <div className="flex items-center border-b border-slate-200 px-3">
              <Search className="mr-2 h-5 w-5 shrink-0 text-slate-400" />
              <Command.Input
                value={query}
                onValueChange={setQuery}
                placeholder="Search programs, admissions, or faculty..."
                className="flex h-14 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button onClick={onClose} className="rounded-full p-1 hover:bg-slate-100">
                 <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>
            <Command.List className="max-h-[300px] overflow-y-auto p-2">
              {filteredData.length === 0 && (
                <div className="py-6 text-center text-sm text-slate-500">
                  No results found for "{query}"
                </div>
              )}
              {filteredData.map((item) => (
                <Command.Item
                  key={item.id}
                  value={item.title}
                  onSelect={() => {
                    navigate(item.path);
                    onClose();
                  }}
                  className="flex cursor-pointer select-none items-center rounded-md px-3 py-3 text-sm outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 aria-selected:bg-blue-50 aria-selected:text-blue-700"
                >
                  {item.title}
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
