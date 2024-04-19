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
import { Floor } from "@/services/magic-meetings/models/floor";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Floor
 */
export default async function call(transactionId: string ,item: Floor) {
  console.log( "magic-meetings.floor", "update");

  return run<Floor>(
    "magic-meetings.floor",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

