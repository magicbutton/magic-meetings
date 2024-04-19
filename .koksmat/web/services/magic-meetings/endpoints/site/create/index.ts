"use server";
/*
Parameters

*/
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import { run } from "@/koksmat/magicservices";
import { ShowCodeFragment } from "@/services/ShowCodeFragment";
import { Site } from "@/services/magic-meetings/models/site";
/**
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Site
 */
export default async function call(transactionId: string ,item: Site) {
  console.log( "magic-meetings.site", "create");

  return run<Site>(
    "magic-meetings.site",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

