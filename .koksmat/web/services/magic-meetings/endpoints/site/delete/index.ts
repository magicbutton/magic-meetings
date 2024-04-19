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
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Site
 */
export default async function call(transactionId: string ,id: string) {
  console.log( "magic-meetings.site", "delete");

  return run<Site>(
    "magic-meetings.site",
    ["delete" , id],
    transactionId,
    600,
    transactionId
  );
}

