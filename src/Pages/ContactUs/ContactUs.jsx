import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";

const ContactUs = () => {
  return (
    <div className="flex justify-center mt-28">
      <Card className="xl:w-3/4 w-full p-5 bg-transparent shadow-md shadow-thirdColor ">
        <CardHeader
          variant="gradient"
          // color="gray"
          className="mb-4 grid h-28 place-items-center bg-thirdColor"
        >
          <Typography variant="h3" color="white">
            Cantact Us
          </Typography>
        </CardHeader>
        <form>
          <CardBody className="flex flex-col gap-4">
            <Input name="name" color="white" label="Name" size="lg" />

            <Textarea label="Message" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" className="bg-thirdColor " fullWidth>
              Send
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default ContactUs;
