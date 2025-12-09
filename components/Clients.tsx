"use client";

import React from "react";

import { companies } from "@/data";

const Clients = () => {
  return (
    <section className="py-20">
      <h1 className="heading">
        Technologies I work with
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-black-200/50 backdrop-blur-sm hover:border-purple/50 transition-colors">
                {company.img && (
                  <img
                    src={company.img}
                    alt={company.name}
                    className="md:w-8 w-6"
                  />
                )}
                <span className="text-white-100 md:text-base text-sm font-medium">
                  {company.name}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
