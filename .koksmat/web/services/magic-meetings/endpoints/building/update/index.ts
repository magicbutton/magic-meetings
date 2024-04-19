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
import { Building } from "@/services/magic-meetings/models/building";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Building
 */
export default async function call(transactionId: string ,item: Building) {
  console.log( "magic-meetings.building", "update");

  return run<Building>(
    "magic-meetings.building",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

