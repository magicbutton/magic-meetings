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
import { Servicecategory } from "@/services/magic-meetings/models/servicecategory";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Servicecategory
 */
export default async function call(transactionId: string ,item: Servicecategory) {
  console.log( "magic-meetings.servicecategory", "update");

  return run<Servicecategory>(
    "magic-meetings.servicecategory",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

