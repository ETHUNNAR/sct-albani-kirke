import React from 'react';

export const portableTextComponents = {
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside text-slate-700 space-y-2 ml-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-slate-700">{children}</li>,
    number: ({ children }: any) => <li className="text-slate-700">{children}</li>,
  },
  block: {
    normal: ({ children }: any) => <p className="text-slate-700 mb-4">{children}</p>,
    h1: ({ children }: any) => (
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-8 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-serif text-2xl font-bold text-navy mt-6 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-serif text-xl font-bold text-navy mt-5 mb-3">{children}</h3>
    ),
  },
};
