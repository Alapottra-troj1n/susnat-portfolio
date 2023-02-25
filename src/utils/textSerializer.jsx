export const textSerializer = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className="text-3xl font-bold font-primary">{children}</h1>,
      h2: ({children}) => <h1 className="text-2xl font-bold font-primary">{children}</h1>,
      h3: ({children}) => <h1 className="text-xl font-bold font-primary">{children}</h1>,
      h4: ({children}) => <h1 className="text-lg">{children}</h1>,

      blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
  
    },
  }