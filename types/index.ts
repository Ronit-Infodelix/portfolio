// Next.js 16: params and searchParams are Promises — encode this in shared types
export type PageParams<
  P extends Record<string, string> = Record<string, string>,
> = {
  params: Promise<P>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export interface WithClassName {
  className?: string;
}

export interface WithChildren {
  children: React.ReactNode;
}
