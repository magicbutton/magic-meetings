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
import { Productionorder } from "@/services/magic-meetings/models/productionorder";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Productionorder
 */
export default async function call(transactionId: string ,item: Productionorder) {
  console.log( "magic-meetings.productionorder", "update");

  return run<Productionorder>(
    "magic-meetings.productionorder",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

