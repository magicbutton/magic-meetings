"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import SignalRead from "@/services/magic-meetings/endpoints/signal/read/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestSignalRead() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-meetings/signal/read/page.tsx"
}
/>
<SignalRead />
</div>
);
}
    
