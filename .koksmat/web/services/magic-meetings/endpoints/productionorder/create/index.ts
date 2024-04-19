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
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Productionorder
 */
export default async function call(transactionId: string ,item: Productionorder) {
  console.log( "magic-meetings.productionorder", "create");

  return run<Productionorder>(
    "magic-meetings.productionorder",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

