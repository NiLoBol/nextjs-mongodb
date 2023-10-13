import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const getTopic = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch ");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
async function page({ params }) {
  const { id } = params;
  console.log("id:", id);
  const { topic } = await getTopic(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description}/>;
}

export default page;
