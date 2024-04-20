"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import SignalUpdate from "@/services/magic-meetings/endpoints/signal/update/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestSignalUpdate() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-meetings/signal/update/page.tsx"
}
/>
<SignalUpdate />
</div>
);
}
    
