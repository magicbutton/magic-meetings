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
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Floor
 */
export default async function call(transactionId: string ,item: Floor) {
  console.log( "magic-meetings.floor", "create");

  return run<Floor>(
    "magic-meetings.floor",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

