import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const BBSCard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex optio
          laudantium autem id, est corrupti sequi tempora saepe debitis nesciunt
          rerum magni ut dignissimos laboriosam qui consequuntur culpa odit
          dolorum.
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/bbs-posts/1" className="text-blue-500">
            Read More
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default BBSCard;
