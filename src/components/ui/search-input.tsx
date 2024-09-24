import { ChangeEvent, useState } from "react";

import { Button, Input } from "@nextui-org/react";

import { Icons } from "../icons";

import { cn } from "../../lib/utils";

const SearchInput = ({ className }: { className?: string }) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [input, setInput] = useState("");

  const handleBlur = () => {
    setHasFocus(false);
  };

  const handleFocus = () => {
    setHasFocus(true);
  };

  const handleInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClearInput = () => {
    setInput("");
  };

  return (
    <form className="w-full sm:max-w-[20rem] ">
      <label htmlFor="search" className="sr-only">
        Search for a course
      </label>
      <Input
        classNames={{
          base: "w-full h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-100/80 dark:bg-default-100/80 border-default-200 border-medium ",
        }}
        placeholder="Type to search..."
        size="sm"
        startContent={
          <Button
            isIconOnly
            variant="light"
            size="sm"
            className={cn(input ? "flex" : "hidden")}
            onClick={handleClearInput}
            isDisabled={!input}
          >
            <span className="sr-only">Clear search</span>
            <Icons.close />
          </Button>
        }
        endContent={
          <div className="w-8 h-8 flex justify-center items-center">
            <Icons.search />
          </div>
        }
        type="text"
        name="search"
        autoComplete="off"
        id="search"
        className={className}
        value={input}
        onChange={handleInputChanged}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </form>
  );
};

export { SearchInput };
