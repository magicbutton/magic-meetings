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
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Building
 */
export default async function call(transactionId: string ,item: Building) {
  console.log( "magic-meetings.building", "create");

  return run<Building>(
    "magic-meetings.building",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

