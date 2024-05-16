"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Upload() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !content) {
      alert("Please fill in all fields!");
      return;
    }
    try {
      const response = await fetch("https://sinner-9mgnyepra-satyam-kumars-projects-891dc0ae.vercel.app/api/sin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify({ title, content }), // Stringify the object
      });
      if (response.ok) {
      } else {
        console.error("Failed to create post:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
    // Clear the form
    setTitle("");
    setContent("");

    // go to home page
    window.location.href = "/";
  };

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 dark:bg-gray-900 px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-6">
      <div className="max-w-3xl w-full">
        <header className="mb-2 md:mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Secret Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Read and share Secret anonymously .
          </p>
        </header>
        <section className="space-y-6 md:space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Confess a Secret or a SIN...
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter your blog post title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="overflow-visible">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Write your blog post content"
                    style={{
                      resize: "none",
                      overflow: "hidden",
                    }}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <Button className="w-full md:w-auto" type="submit">
                  Share SIN
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Link href="/">
        <Button className="fixed top-10 right-10" type="submit">
          Read Others SINs
        </Button>
      </Link>
    </main>
  );
}
