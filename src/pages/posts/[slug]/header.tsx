"use client";

import { format, parseISO } from "date-fns";

type HeaderProps = {
  date: string;
  title: string;
  readingTime: string;
};

const Header = (props: HeaderProps) => {
  const { title, date, readingTime } = props;

  return (
    <>
      <div className="pt-12">
        <h1 className="text-shade-1 text-2xl font-bold md:text-4xl">{title}</h1>
        <div className="flex py-2 text-sm lg:flex-row lg:py-8">
          <div className="flex gap-1">
            {date && (
              <time dateTime={date}>
                {format(parseISO(date), "MMM dd, yyyy")}
              </time>
            )}
            &#8226;
            <span>{readingTime}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
