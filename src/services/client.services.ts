import { CLIENTS } from "@/constants/mock";
import { Client } from "@/types/client";

export const fetchClients = async (): Promise<Client[]> => {
  return CLIENTS;
};

export const createClient = async (client: Client): Promise<any> => {
  return client;
};
