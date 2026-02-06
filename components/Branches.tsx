import React from "react";
import { Section, SectionHeading } from "./ui/Section";

export const Branches = () => {
  return (
    <Section id="branches" bgColor="white">
      <SectionHeading
        title="Where We Work"
        centered
      />

      <div className="text-center">
        <p className="text-2xl font-bold text-secondary">
          Kasol, Himachal Pradesh
        </p>
        <p className="text-lg text-primary mb-4">(Model Center)</p>
        <p className="text-text-light">
          More branches coming soon across India.
        </p>
      </div>
    </Section>
  );
};
