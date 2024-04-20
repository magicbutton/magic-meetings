"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import VisitorUpdate from "@/services/magic-meetings/endpoints/visitor/update/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestVisitorUpdate() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-meetings/visitor/update/page.tsx"
}
/>
<VisitorUpdate />
</div>
);
}
    
