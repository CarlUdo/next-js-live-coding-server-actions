"use server"

import { revalidatePath } from "next/cache";
import { couchesService } from "./instance";

export const addCouchAction = async (couchName: string) => {
 await couchesService.add(couchName);

 revalidatePath("/");
};
