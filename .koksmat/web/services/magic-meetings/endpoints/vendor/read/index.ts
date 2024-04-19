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
import { Vendor } from "@/services/magic-meetings/models/vendor";
/**
 * Read a single item
 * 
 * id - The id of the item

 * @returns
 * 
 * Vendor
 */
export default async function call(transactionId: string ,id: string) {
  console.log( "magic-meetings.vendor", "read");

  return run<Vendor>(
    "magic-meetings.vendor",
    ["read" , id],
    transactionId,
    600,
    transactionId
  );
}

