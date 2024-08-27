"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { postBBS } from "@/app/actions/postBBSAction";
import { formSchema } from "./formSchema";

const CreateBBSPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      title: "",
      content: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    const { username, title, content } = value;
    postBBS({ username, title, content });
  };

  return (
    <div className="bg-slate-50 py-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 w-1/2 px-7"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ユーザー名</FormLabel>
                <FormControl>
                  <Input placeholder="ユーザー名" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>タイトル</FormLabel>
                <FormControl>
                  <Input placeholder="タイトル" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>本文</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="投稿内容"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateBBSPage;
