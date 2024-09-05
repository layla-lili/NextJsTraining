# Creating nextjs project (already done)
 `
 npx create-next-app@latest [project-name] [options]
 `
 all option yes

 # running nextjs project first time
  `
  cd finditbh
  npm install
  npm run dev
  `

  # running nextjs project (you already install packeges and you have node module folder)

  `
  cd finditbh
  npm run dev
  `

# file structure
```
NextJsTraining/finditbh/
  ├─].next/ (ignored)
  ├─]node_modules/ (ignored)         
  *├─ public/*
  │  └─ Ac.jpg    //where you place pictures
  *├─ src/*
  *│  ├─ app/*
  │  │  ├─ fonts/
  │  │  │  ├─ GeistMonoVF.woff
  │  │  │  └─ GeistVF.woff
  *│  │  ├─ products/*          //page route(url)   /prodcuts
  *│  │  │  ├─ [id]/*           //page by id route url  /products/id
  *│  │  │  │  └─ page.tsx*     //the page itself
  *│  │  │  └─ page.tsx*        //product page
  │  │  ├─ favicon.ico
  │  │  ├─ globals.css
  │  │  ├─ layout.tsx
  *│  │  └─ page.tsx*             //homepage Landing page
  *│  ├─ components/*             components
  *│  │  └─ ProductCard.tsx*
  *│  ├─ dummyData.ts*             //data
  *│  └─ interfaces.ts*           //interface like struct
  ├─ .eslintrc.json
  ├─ .gitignore
  ├─]next-env.d.ts (ignored)
  ├─ next.config.mjs
  ├─ package-lock.json
  ├─ package.json                 //packages saves           
  ├─ postcss.config.mjs
  ├─ README.md
  ├─ tailwind.config.ts
  └─ tsconfig.json

  #your main work will be in products/id/page
  *│  │  ├─ products/*          //page route(url)   /prodcuts
  *│  │  │  ├─ [id]/*           //page by id route url  /products/id
  *│  │  │  │  └─ page.tsx*     //the page itself
```

 # the html tailwind-css part is on the retrun()
  
import React from 'react'

const ProductDetails = () => {
  return (
    
        <div>details page</div>
  
  )
}

export default ProductDetails



