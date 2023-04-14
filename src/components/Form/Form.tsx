import React, { FC, useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { addPost } from "@/redux/posts/actions";
import Image from "next/image";
import Input from "@/ui/Input/Input";
import Select from "../../ui/Select/Select";
import Button from "@/ui/Button/Button";

const Form: FC = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");

  const getValue = (str: string) => {
    setStatus(str);
  };

  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.posts.posts);

  const id = posts.length + 1;

  const submit = () => {
    dispatch(addPost(title, status, time, id));
    setTitle("");
    setStatus("");
    setTime("");
  };

  return (
    <div className="w-[22.25rem] pt-5 pl-7 font-arial font-normal">
      <p className="mb-4">Post information</p>
      <div className="flex flex-col gap-2 mb-11">
        <Input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Title"
        />
        <Select
          val="Status"
          onChange={getValue}
          options={["Published", "Draft"]}
          variant="limit"
        />
        <Input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="datetime-local"
          placeholder="Time"
          icon={
            <Image width={20} height={20} src="/calendar.svg" alt="inputIcon" />
          }
        />
      </div>
      <Button onClick={submit}>Submit</Button>
    </div>
  );
};

export default Form;
