"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import VisitorRead from "@/services/magic-meetings/endpoints/visitor/read/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestVisitorRead() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-meetings/visitor/read/page.tsx"
}
/>
<VisitorRead />
</div>
);
}
    
