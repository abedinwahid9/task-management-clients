import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";

const CreateTask = () => {
  const { control, register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);

  const handleOpen = () => setOpen(!open);

  const onSubmit = (data) => {
    console.log({
      ...data,
      deadlines: selectedDate.toLocaleDateString("en-GB"),
      priority: selectedPriority,
    });
    setOpen(false);
  };

  return (
    <div>
      <Button className="text-sm bg-secondColor" onClick={handleOpen}>
        Create Task
      </Button>

      <Dialog
        className="max-h-[90vh] overflow-y-auto"
        size="lg"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <h2 className="text-center text-3xl mt-5 font-extrabold">
          Create Your Task
        </h2>
        <h2 className="text-center text-mainColor text-md mt-5 font-bold">
          abedinwahid9@gmail.com
        </h2>
        <DialogBody>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 w-3/4 mx-auto"
          >
            <div className="mb-1 flex flex-col gap-5">
              <Input {...register("title")} label="Title" />
              <Textarea {...register("descriptions")} label="Descriptions" />
              <div className="flex gap-3 mb-4">
                <DatePicker
                  selected={selectedDate}
                  onChange={(e) => setSelectedDate(e)}
                  dateFormat="dd-MM-yyyy"
                  className="p-2 border border-gray-300 rounded-md"
                  placeholderText="Select Date"
                />
                <Select
                  {...register("priority")}
                  label="Priority"
                  onChange={(e) => setSelectedPriority(e.toLowerCase())}
                >
                  <Option value="low">Low</Option>
                  <Option value="moderate">Moderate</Option>
                  <Option value="high">High</Option>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              fullWidth
              className="bg-secondColor"
              color="green"
            >
              <span>Add task</span>
            </Button>
          </form>
        </DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
    </div>
  );
};

export default CreateTask;
