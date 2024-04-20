"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import AuditlogRead from "@/services/magic-meetings/endpoints/auditlog/read/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestAuditlogRead() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-meetings/auditlog/read/page.tsx"
}
/>
<AuditlogRead />
</div>
);
}
    
