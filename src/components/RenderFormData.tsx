import React from "react";

import type { FormValues } from "../types";

interface Props {
  formData: FormValues;
}

const RenderFormData = ({ formData }: Props) => {

  const dob = new Date(formData.dob);
  const formattedDob = dob.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      <h1>Rendered Data</h1>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: +91{formData.phone}</p>
      <p>DOB: {formattedDob}</p>
      <p>
        Tech Stacks: {formData.techStack.map((tech) => tech.name).join(", ")}
      </p>
    </div>
  );
};

export default RenderFormData;
