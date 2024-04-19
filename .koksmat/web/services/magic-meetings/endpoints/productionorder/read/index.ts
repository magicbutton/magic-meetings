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
 * Read a single item
 * 
 * id - The id of the item

 * @returns
 * 
 * Productionorder
 */
export default async function call(transactionId: string ,id: string) {
  console.log( "magic-meetings.productionorder", "read");

  return run<Productionorder>(
    "magic-meetings.productionorder",
    ["read" , id],
    transactionId,
    600,
    transactionId
  );
}

