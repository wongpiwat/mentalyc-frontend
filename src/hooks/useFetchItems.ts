"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchClients } from "@/services/client.services";
import { Client } from "@/types/client";

type UseFetchItems = {
  items: Client[];
  loading: boolean;
  refresh: () => void;
};

export const useFetchItems = (): UseFetchItems => {
  const [items, setItems] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchClients();
      setItems(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const refresh = useCallback(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { items, loading, refresh };
};

export default useFetchItems;
