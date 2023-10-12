import { createClient } from "@supabase/supabase-js";

export const client = createClient(
  process.env.REACT_APP_URL_DB,
  process.env.REACT_APP_ANON_KEY
);
// esto me devuelve un objeto nuevo por eso
// lo guardamos en una variable y lo exportamos
