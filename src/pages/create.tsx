import Form from "@/components/Form/Form";
import Layout from "@/components/Layout/Layout";
import React from "react";

const CreatePage = () => {
  return (
    <Layout
      title="Create Post Page"
      description="task project using Nextjs"
      pageName="New Post"
    >
      <Form />
    </Layout>
  );
};

export default CreatePage;
