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
import { Accesspoint } from "@/services/magic-meetings/models/accesspoint";
/**
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Accesspoint
 */
export default async function call(transactionId: string ,id: string) {
  console.log( "magic-meetings.accesspoint", "delete");

  return run<Accesspoint>(
    "magic-meetings.accesspoint",
    ["delete" , id],
    transactionId,
    600,
    transactionId
  );
}

